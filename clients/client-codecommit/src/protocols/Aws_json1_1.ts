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

export const serializeAws_json1_1AssociateApprovalRuleTemplateWithRepositoryCommand = async (
  input: AssociateApprovalRuleTemplateWithRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.AssociateApprovalRuleTemplateWithRepository",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AssociateApprovalRuleTemplateWithRepositoryInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesCommand = async (
  input: BatchAssociateApprovalRuleTemplateWithRepositoriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.BatchAssociateApprovalRuleTemplateWithRepositories",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchDescribeMergeConflictsCommand = async (
  input: BatchDescribeMergeConflictsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.BatchDescribeMergeConflicts",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchDescribeMergeConflictsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchDisassociateApprovalRuleTemplateFromRepositoriesCommand = async (
  input: BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.BatchDisassociateApprovalRuleTemplateFromRepositories",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchDisassociateApprovalRuleTemplateFromRepositoriesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchGetCommitsCommand = async (
  input: BatchGetCommitsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.BatchGetCommits",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchGetCommitsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchGetRepositoriesCommand = async (
  input: BatchGetRepositoriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.BatchGetRepositories",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchGetRepositoriesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateApprovalRuleTemplateCommand = async (
  input: CreateApprovalRuleTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.CreateApprovalRuleTemplate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateApprovalRuleTemplateInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateBranchCommand = async (
  input: CreateBranchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.CreateBranch",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateBranchInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateCommitCommand = async (
  input: CreateCommitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.CreateCommit",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateCommitInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreatePullRequestCommand = async (
  input: CreatePullRequestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.CreatePullRequest",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreatePullRequestInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreatePullRequestApprovalRuleCommand = async (
  input: CreatePullRequestApprovalRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.CreatePullRequestApprovalRule",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreatePullRequestApprovalRuleInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateRepositoryCommand = async (
  input: CreateRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.CreateRepository",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateRepositoryInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateUnreferencedMergeCommitCommand = async (
  input: CreateUnreferencedMergeCommitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.CreateUnreferencedMergeCommit",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateUnreferencedMergeCommitInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteApprovalRuleTemplateCommand = async (
  input: DeleteApprovalRuleTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.DeleteApprovalRuleTemplate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteApprovalRuleTemplateInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteBranchCommand = async (
  input: DeleteBranchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.DeleteBranch",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteBranchInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteCommentContentCommand = async (
  input: DeleteCommentContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.DeleteCommentContent",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteCommentContentInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteFileCommand = async (
  input: DeleteFileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.DeleteFile",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteFileInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeletePullRequestApprovalRuleCommand = async (
  input: DeletePullRequestApprovalRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.DeletePullRequestApprovalRule",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeletePullRequestApprovalRuleInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteRepositoryCommand = async (
  input: DeleteRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.DeleteRepository",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteRepositoryInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeMergeConflictsCommand = async (
  input: DescribeMergeConflictsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.DescribeMergeConflicts",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeMergeConflictsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribePullRequestEventsCommand = async (
  input: DescribePullRequestEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.DescribePullRequestEvents",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribePullRequestEventsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisassociateApprovalRuleTemplateFromRepositoryCommand = async (
  input: DisassociateApprovalRuleTemplateFromRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.DisassociateApprovalRuleTemplateFromRepository",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisassociateApprovalRuleTemplateFromRepositoryInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1EvaluatePullRequestApprovalRulesCommand = async (
  input: EvaluatePullRequestApprovalRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.EvaluatePullRequestApprovalRules",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1EvaluatePullRequestApprovalRulesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetApprovalRuleTemplateCommand = async (
  input: GetApprovalRuleTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.GetApprovalRuleTemplate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetApprovalRuleTemplateInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetBlobCommand = async (
  input: GetBlobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.GetBlob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetBlobInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetBranchCommand = async (
  input: GetBranchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.GetBranch",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetBranchInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetCommentCommand = async (
  input: GetCommentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.GetComment",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetCommentInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetCommentReactionsCommand = async (
  input: GetCommentReactionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.GetCommentReactions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetCommentReactionsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetCommentsForComparedCommitCommand = async (
  input: GetCommentsForComparedCommitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.GetCommentsForComparedCommit",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetCommentsForComparedCommitInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetCommentsForPullRequestCommand = async (
  input: GetCommentsForPullRequestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.GetCommentsForPullRequest",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetCommentsForPullRequestInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetCommitCommand = async (
  input: GetCommitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.GetCommit",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetCommitInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDifferencesCommand = async (
  input: GetDifferencesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.GetDifferences",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDifferencesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetFileCommand = async (
  input: GetFileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.GetFile",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetFileInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetFolderCommand = async (
  input: GetFolderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.GetFolder",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetFolderInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetMergeCommitCommand = async (
  input: GetMergeCommitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.GetMergeCommit",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetMergeCommitInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetMergeConflictsCommand = async (
  input: GetMergeConflictsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.GetMergeConflicts",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetMergeConflictsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetMergeOptionsCommand = async (
  input: GetMergeOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.GetMergeOptions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetMergeOptionsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetPullRequestCommand = async (
  input: GetPullRequestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.GetPullRequest",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetPullRequestInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetPullRequestApprovalStatesCommand = async (
  input: GetPullRequestApprovalStatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.GetPullRequestApprovalStates",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetPullRequestApprovalStatesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetPullRequestOverrideStateCommand = async (
  input: GetPullRequestOverrideStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.GetPullRequestOverrideState",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetPullRequestOverrideStateInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetRepositoryCommand = async (
  input: GetRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.GetRepository",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetRepositoryInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetRepositoryTriggersCommand = async (
  input: GetRepositoryTriggersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.GetRepositoryTriggers",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetRepositoryTriggersInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListApprovalRuleTemplatesCommand = async (
  input: ListApprovalRuleTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.ListApprovalRuleTemplates",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListApprovalRuleTemplatesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListAssociatedApprovalRuleTemplatesForRepositoryCommand = async (
  input: ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.ListAssociatedApprovalRuleTemplatesForRepository",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListAssociatedApprovalRuleTemplatesForRepositoryInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListBranchesCommand = async (
  input: ListBranchesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.ListBranches",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListBranchesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListPullRequestsCommand = async (
  input: ListPullRequestsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.ListPullRequests",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListPullRequestsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListRepositoriesCommand = async (
  input: ListRepositoriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.ListRepositories",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListRepositoriesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListRepositoriesForApprovalRuleTemplateCommand = async (
  input: ListRepositoriesForApprovalRuleTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.ListRepositoriesForApprovalRuleTemplate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListRepositoriesForApprovalRuleTemplateInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsForResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1MergeBranchesByFastForwardCommand = async (
  input: MergeBranchesByFastForwardCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.MergeBranchesByFastForward",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1MergeBranchesByFastForwardInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1MergeBranchesBySquashCommand = async (
  input: MergeBranchesBySquashCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.MergeBranchesBySquash",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1MergeBranchesBySquashInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1MergeBranchesByThreeWayCommand = async (
  input: MergeBranchesByThreeWayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.MergeBranchesByThreeWay",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1MergeBranchesByThreeWayInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1MergePullRequestByFastForwardCommand = async (
  input: MergePullRequestByFastForwardCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.MergePullRequestByFastForward",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1MergePullRequestByFastForwardInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1MergePullRequestBySquashCommand = async (
  input: MergePullRequestBySquashCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.MergePullRequestBySquash",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1MergePullRequestBySquashInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1MergePullRequestByThreeWayCommand = async (
  input: MergePullRequestByThreeWayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.MergePullRequestByThreeWay",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1MergePullRequestByThreeWayInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1OverridePullRequestApprovalRulesCommand = async (
  input: OverridePullRequestApprovalRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.OverridePullRequestApprovalRules",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1OverridePullRequestApprovalRulesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PostCommentForComparedCommitCommand = async (
  input: PostCommentForComparedCommitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.PostCommentForComparedCommit",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PostCommentForComparedCommitInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PostCommentForPullRequestCommand = async (
  input: PostCommentForPullRequestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.PostCommentForPullRequest",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PostCommentForPullRequestInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PostCommentReplyCommand = async (
  input: PostCommentReplyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.PostCommentReply",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PostCommentReplyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutCommentReactionCommand = async (
  input: PutCommentReactionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.PutCommentReaction",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutCommentReactionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutFileCommand = async (
  input: PutFileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.PutFile",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutFileInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutRepositoryTriggersCommand = async (
  input: PutRepositoryTriggersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.PutRepositoryTriggers",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutRepositoryTriggersInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TestRepositoryTriggersCommand = async (
  input: TestRepositoryTriggersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.TestRepositoryTriggers",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TestRepositoryTriggersInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateApprovalRuleTemplateContentCommand = async (
  input: UpdateApprovalRuleTemplateContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.UpdateApprovalRuleTemplateContent",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateApprovalRuleTemplateContentInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateApprovalRuleTemplateDescriptionCommand = async (
  input: UpdateApprovalRuleTemplateDescriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.UpdateApprovalRuleTemplateDescription",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateApprovalRuleTemplateDescriptionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateApprovalRuleTemplateNameCommand = async (
  input: UpdateApprovalRuleTemplateNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.UpdateApprovalRuleTemplateName",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateApprovalRuleTemplateNameInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateCommentCommand = async (
  input: UpdateCommentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.UpdateComment",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateCommentInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateDefaultBranchCommand = async (
  input: UpdateDefaultBranchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.UpdateDefaultBranch",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateDefaultBranchInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdatePullRequestApprovalRuleContentCommand = async (
  input: UpdatePullRequestApprovalRuleContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.UpdatePullRequestApprovalRuleContent",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdatePullRequestApprovalRuleContentInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdatePullRequestApprovalStateCommand = async (
  input: UpdatePullRequestApprovalStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.UpdatePullRequestApprovalState",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdatePullRequestApprovalStateInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdatePullRequestDescriptionCommand = async (
  input: UpdatePullRequestDescriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.UpdatePullRequestDescription",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdatePullRequestDescriptionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdatePullRequestStatusCommand = async (
  input: UpdatePullRequestStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.UpdatePullRequestStatus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdatePullRequestStatusInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdatePullRequestTitleCommand = async (
  input: UpdatePullRequestTitleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.UpdatePullRequestTitle",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdatePullRequestTitleInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateRepositoryDescriptionCommand = async (
  input: UpdateRepositoryDescriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.UpdateRepositoryDescription",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateRepositoryDescriptionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateRepositoryNameCommand = async (
  input: UpdateRepositoryNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.UpdateRepositoryName",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateRepositoryNameInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AssociateApprovalRuleTemplateWithRepositoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateApprovalRuleTemplateWithRepositoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AssociateApprovalRuleTemplateWithRepositoryCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AssociateApprovalRuleTemplateWithRepositoryCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AssociateApprovalRuleTemplateWithRepositoryCommandError = async (
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
      throw await deserializeAws_json1_1ApprovalRuleTemplateDoesNotExistExceptionResponse(parsedOutput, context);
    case "ApprovalRuleTemplateNameRequiredException":
    case "com.amazonaws.codecommit#ApprovalRuleTemplateNameRequiredException":
      throw await deserializeAws_json1_1ApprovalRuleTemplateNameRequiredExceptionResponse(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context);
    case "InvalidApprovalRuleTemplateNameException":
    case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateNameException":
      throw await deserializeAws_json1_1InvalidApprovalRuleTemplateNameExceptionResponse(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context);
    case "MaximumRuleTemplatesAssociatedWithRepositoryException":
    case "com.amazonaws.codecommit#MaximumRuleTemplatesAssociatedWithRepositoryException":
      throw await deserializeAws_json1_1MaximumRuleTemplatesAssociatedWithRepositoryExceptionResponse(
        parsedOutput,
        context
      );
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchAssociateApprovalRuleTemplateWithRepositoriesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesOutput(data, context);
  const response: BatchAssociateApprovalRuleTemplateWithRepositoriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesCommandError = async (
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
      throw await deserializeAws_json1_1ApprovalRuleTemplateDoesNotExistExceptionResponse(parsedOutput, context);
    case "ApprovalRuleTemplateNameRequiredException":
    case "com.amazonaws.codecommit#ApprovalRuleTemplateNameRequiredException":
      throw await deserializeAws_json1_1ApprovalRuleTemplateNameRequiredExceptionResponse(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context);
    case "InvalidApprovalRuleTemplateNameException":
    case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateNameException":
      throw await deserializeAws_json1_1InvalidApprovalRuleTemplateNameExceptionResponse(parsedOutput, context);
    case "MaximumRepositoryNamesExceededException":
    case "com.amazonaws.codecommit#MaximumRepositoryNamesExceededException":
      throw await deserializeAws_json1_1MaximumRepositoryNamesExceededExceptionResponse(parsedOutput, context);
    case "RepositoryNamesRequiredException":
    case "com.amazonaws.codecommit#RepositoryNamesRequiredException":
      throw await deserializeAws_json1_1RepositoryNamesRequiredExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1BatchDescribeMergeConflictsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDescribeMergeConflictsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchDescribeMergeConflictsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchDescribeMergeConflictsOutput(data, context);
  const response: BatchDescribeMergeConflictsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchDescribeMergeConflictsCommandError = async (
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
      throw await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context);
    case "CommitRequiredException":
    case "com.amazonaws.codecommit#CommitRequiredException":
      throw await deserializeAws_json1_1CommitRequiredExceptionResponse(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context);
    case "InvalidCommitException":
    case "com.amazonaws.codecommit#InvalidCommitException":
      throw await deserializeAws_json1_1InvalidCommitExceptionResponse(parsedOutput, context);
    case "InvalidConflictDetailLevelException":
    case "com.amazonaws.codecommit#InvalidConflictDetailLevelException":
      throw await deserializeAws_json1_1InvalidConflictDetailLevelExceptionResponse(parsedOutput, context);
    case "InvalidConflictResolutionStrategyException":
    case "com.amazonaws.codecommit#InvalidConflictResolutionStrategyException":
      throw await deserializeAws_json1_1InvalidConflictResolutionStrategyExceptionResponse(parsedOutput, context);
    case "InvalidContinuationTokenException":
    case "com.amazonaws.codecommit#InvalidContinuationTokenException":
      throw await deserializeAws_json1_1InvalidContinuationTokenExceptionResponse(parsedOutput, context);
    case "InvalidMaxConflictFilesException":
    case "com.amazonaws.codecommit#InvalidMaxConflictFilesException":
      throw await deserializeAws_json1_1InvalidMaxConflictFilesExceptionResponse(parsedOutput, context);
    case "InvalidMaxMergeHunksException":
    case "com.amazonaws.codecommit#InvalidMaxMergeHunksException":
      throw await deserializeAws_json1_1InvalidMaxMergeHunksExceptionResponse(parsedOutput, context);
    case "InvalidMergeOptionException":
    case "com.amazonaws.codecommit#InvalidMergeOptionException":
      throw await deserializeAws_json1_1InvalidMergeOptionExceptionResponse(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context);
    case "MaximumFileContentToLoadExceededException":
    case "com.amazonaws.codecommit#MaximumFileContentToLoadExceededException":
      throw await deserializeAws_json1_1MaximumFileContentToLoadExceededExceptionResponse(parsedOutput, context);
    case "MaximumItemsToCompareExceededException":
    case "com.amazonaws.codecommit#MaximumItemsToCompareExceededException":
      throw await deserializeAws_json1_1MaximumItemsToCompareExceededExceptionResponse(parsedOutput, context);
    case "MergeOptionRequiredException":
    case "com.amazonaws.codecommit#MergeOptionRequiredException":
      throw await deserializeAws_json1_1MergeOptionRequiredExceptionResponse(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context);
    case "TipsDivergenceExceededException":
    case "com.amazonaws.codecommit#TipsDivergenceExceededException":
      throw await deserializeAws_json1_1TipsDivergenceExceededExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1BatchDisassociateApprovalRuleTemplateFromRepositoriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput(data, context);
  const response: BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandError = async (
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
      throw await deserializeAws_json1_1ApprovalRuleTemplateDoesNotExistExceptionResponse(parsedOutput, context);
    case "ApprovalRuleTemplateNameRequiredException":
    case "com.amazonaws.codecommit#ApprovalRuleTemplateNameRequiredException":
      throw await deserializeAws_json1_1ApprovalRuleTemplateNameRequiredExceptionResponse(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context);
    case "InvalidApprovalRuleTemplateNameException":
    case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateNameException":
      throw await deserializeAws_json1_1InvalidApprovalRuleTemplateNameExceptionResponse(parsedOutput, context);
    case "MaximumRepositoryNamesExceededException":
    case "com.amazonaws.codecommit#MaximumRepositoryNamesExceededException":
      throw await deserializeAws_json1_1MaximumRepositoryNamesExceededExceptionResponse(parsedOutput, context);
    case "RepositoryNamesRequiredException":
    case "com.amazonaws.codecommit#RepositoryNamesRequiredException":
      throw await deserializeAws_json1_1RepositoryNamesRequiredExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1BatchGetCommitsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetCommitsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchGetCommitsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchGetCommitsOutput(data, context);
  const response: BatchGetCommitsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchGetCommitsCommandError = async (
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
      throw await deserializeAws_json1_1CommitIdsLimitExceededExceptionResponse(parsedOutput, context);
    case "CommitIdsListRequiredException":
    case "com.amazonaws.codecommit#CommitIdsListRequiredException":
      throw await deserializeAws_json1_1CommitIdsListRequiredExceptionResponse(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1BatchGetRepositoriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetRepositoriesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchGetRepositoriesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchGetRepositoriesOutput(data, context);
  const response: BatchGetRepositoriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchGetRepositoriesCommandError = async (
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
      throw await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context);
    case "MaximumRepositoryNamesExceededException":
    case "com.amazonaws.codecommit#MaximumRepositoryNamesExceededException":
      throw await deserializeAws_json1_1MaximumRepositoryNamesExceededExceptionResponse(parsedOutput, context);
    case "RepositoryNamesRequiredException":
    case "com.amazonaws.codecommit#RepositoryNamesRequiredException":
      throw await deserializeAws_json1_1RepositoryNamesRequiredExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateApprovalRuleTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApprovalRuleTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateApprovalRuleTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateApprovalRuleTemplateOutput(data, context);
  const response: CreateApprovalRuleTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateApprovalRuleTemplateCommandError = async (
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
      throw await deserializeAws_json1_1ApprovalRuleTemplateContentRequiredExceptionResponse(parsedOutput, context);
    case "ApprovalRuleTemplateNameAlreadyExistsException":
    case "com.amazonaws.codecommit#ApprovalRuleTemplateNameAlreadyExistsException":
      throw await deserializeAws_json1_1ApprovalRuleTemplateNameAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ApprovalRuleTemplateNameRequiredException":
    case "com.amazonaws.codecommit#ApprovalRuleTemplateNameRequiredException":
      throw await deserializeAws_json1_1ApprovalRuleTemplateNameRequiredExceptionResponse(parsedOutput, context);
    case "InvalidApprovalRuleTemplateContentException":
    case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateContentException":
      throw await deserializeAws_json1_1InvalidApprovalRuleTemplateContentExceptionResponse(parsedOutput, context);
    case "InvalidApprovalRuleTemplateDescriptionException":
    case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateDescriptionException":
      throw await deserializeAws_json1_1InvalidApprovalRuleTemplateDescriptionExceptionResponse(parsedOutput, context);
    case "InvalidApprovalRuleTemplateNameException":
    case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateNameException":
      throw await deserializeAws_json1_1InvalidApprovalRuleTemplateNameExceptionResponse(parsedOutput, context);
    case "NumberOfRuleTemplatesExceededException":
    case "com.amazonaws.codecommit#NumberOfRuleTemplatesExceededException":
      throw await deserializeAws_json1_1NumberOfRuleTemplatesExceededExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateBranchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBranchCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateBranchCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: CreateBranchCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateBranchCommandError = async (
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
      throw await deserializeAws_json1_1BranchNameExistsExceptionResponse(parsedOutput, context);
    case "BranchNameRequiredException":
    case "com.amazonaws.codecommit#BranchNameRequiredException":
      throw await deserializeAws_json1_1BranchNameRequiredExceptionResponse(parsedOutput, context);
    case "CommitDoesNotExistException":
    case "com.amazonaws.codecommit#CommitDoesNotExistException":
      throw await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context);
    case "CommitIdRequiredException":
    case "com.amazonaws.codecommit#CommitIdRequiredException":
      throw await deserializeAws_json1_1CommitIdRequiredExceptionResponse(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context);
    case "InvalidBranchNameException":
    case "com.amazonaws.codecommit#InvalidBranchNameException":
      throw await deserializeAws_json1_1InvalidBranchNameExceptionResponse(parsedOutput, context);
    case "InvalidCommitIdException":
    case "com.amazonaws.codecommit#InvalidCommitIdException":
      throw await deserializeAws_json1_1InvalidCommitIdExceptionResponse(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateCommitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCommitCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateCommitCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateCommitOutput(data, context);
  const response: CreateCommitCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateCommitCommandError = async (
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
      throw await deserializeAws_json1_1BranchDoesNotExistExceptionResponse(parsedOutput, context);
    case "BranchNameIsTagNameException":
    case "com.amazonaws.codecommit#BranchNameIsTagNameException":
      throw await deserializeAws_json1_1BranchNameIsTagNameExceptionResponse(parsedOutput, context);
    case "BranchNameRequiredException":
    case "com.amazonaws.codecommit#BranchNameRequiredException":
      throw await deserializeAws_json1_1BranchNameRequiredExceptionResponse(parsedOutput, context);
    case "CommitMessageLengthExceededException":
    case "com.amazonaws.codecommit#CommitMessageLengthExceededException":
      throw await deserializeAws_json1_1CommitMessageLengthExceededExceptionResponse(parsedOutput, context);
    case "DirectoryNameConflictsWithFileNameException":
    case "com.amazonaws.codecommit#DirectoryNameConflictsWithFileNameException":
      throw await deserializeAws_json1_1DirectoryNameConflictsWithFileNameExceptionResponse(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context);
    case "FileContentAndSourceFileSpecifiedException":
    case "com.amazonaws.codecommit#FileContentAndSourceFileSpecifiedException":
      throw await deserializeAws_json1_1FileContentAndSourceFileSpecifiedExceptionResponse(parsedOutput, context);
    case "FileContentSizeLimitExceededException":
    case "com.amazonaws.codecommit#FileContentSizeLimitExceededException":
      throw await deserializeAws_json1_1FileContentSizeLimitExceededExceptionResponse(parsedOutput, context);
    case "FileDoesNotExistException":
    case "com.amazonaws.codecommit#FileDoesNotExistException":
      throw await deserializeAws_json1_1FileDoesNotExistExceptionResponse(parsedOutput, context);
    case "FileEntryRequiredException":
    case "com.amazonaws.codecommit#FileEntryRequiredException":
      throw await deserializeAws_json1_1FileEntryRequiredExceptionResponse(parsedOutput, context);
    case "FileModeRequiredException":
    case "com.amazonaws.codecommit#FileModeRequiredException":
      throw await deserializeAws_json1_1FileModeRequiredExceptionResponse(parsedOutput, context);
    case "FileNameConflictsWithDirectoryNameException":
    case "com.amazonaws.codecommit#FileNameConflictsWithDirectoryNameException":
      throw await deserializeAws_json1_1FileNameConflictsWithDirectoryNameExceptionResponse(parsedOutput, context);
    case "FilePathConflictsWithSubmodulePathException":
    case "com.amazonaws.codecommit#FilePathConflictsWithSubmodulePathException":
      throw await deserializeAws_json1_1FilePathConflictsWithSubmodulePathExceptionResponse(parsedOutput, context);
    case "FolderContentSizeLimitExceededException":
    case "com.amazonaws.codecommit#FolderContentSizeLimitExceededException":
      throw await deserializeAws_json1_1FolderContentSizeLimitExceededExceptionResponse(parsedOutput, context);
    case "InvalidBranchNameException":
    case "com.amazonaws.codecommit#InvalidBranchNameException":
      throw await deserializeAws_json1_1InvalidBranchNameExceptionResponse(parsedOutput, context);
    case "InvalidDeletionParameterException":
    case "com.amazonaws.codecommit#InvalidDeletionParameterException":
      throw await deserializeAws_json1_1InvalidDeletionParameterExceptionResponse(parsedOutput, context);
    case "InvalidEmailException":
    case "com.amazonaws.codecommit#InvalidEmailException":
      throw await deserializeAws_json1_1InvalidEmailExceptionResponse(parsedOutput, context);
    case "InvalidFileModeException":
    case "com.amazonaws.codecommit#InvalidFileModeException":
      throw await deserializeAws_json1_1InvalidFileModeExceptionResponse(parsedOutput, context);
    case "InvalidParentCommitIdException":
    case "com.amazonaws.codecommit#InvalidParentCommitIdException":
      throw await deserializeAws_json1_1InvalidParentCommitIdExceptionResponse(parsedOutput, context);
    case "InvalidPathException":
    case "com.amazonaws.codecommit#InvalidPathException":
      throw await deserializeAws_json1_1InvalidPathExceptionResponse(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context);
    case "MaximumFileEntriesExceededException":
    case "com.amazonaws.codecommit#MaximumFileEntriesExceededException":
      throw await deserializeAws_json1_1MaximumFileEntriesExceededExceptionResponse(parsedOutput, context);
    case "NameLengthExceededException":
    case "com.amazonaws.codecommit#NameLengthExceededException":
      throw await deserializeAws_json1_1NameLengthExceededExceptionResponse(parsedOutput, context);
    case "NoChangeException":
    case "com.amazonaws.codecommit#NoChangeException":
      throw await deserializeAws_json1_1NoChangeExceptionResponse(parsedOutput, context);
    case "ParentCommitDoesNotExistException":
    case "com.amazonaws.codecommit#ParentCommitDoesNotExistException":
      throw await deserializeAws_json1_1ParentCommitDoesNotExistExceptionResponse(parsedOutput, context);
    case "ParentCommitIdOutdatedException":
    case "com.amazonaws.codecommit#ParentCommitIdOutdatedException":
      throw await deserializeAws_json1_1ParentCommitIdOutdatedExceptionResponse(parsedOutput, context);
    case "ParentCommitIdRequiredException":
    case "com.amazonaws.codecommit#ParentCommitIdRequiredException":
      throw await deserializeAws_json1_1ParentCommitIdRequiredExceptionResponse(parsedOutput, context);
    case "PathRequiredException":
    case "com.amazonaws.codecommit#PathRequiredException":
      throw await deserializeAws_json1_1PathRequiredExceptionResponse(parsedOutput, context);
    case "PutFileEntryConflictException":
    case "com.amazonaws.codecommit#PutFileEntryConflictException":
      throw await deserializeAws_json1_1PutFileEntryConflictExceptionResponse(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context);
    case "RestrictedSourceFileException":
    case "com.amazonaws.codecommit#RestrictedSourceFileException":
      throw await deserializeAws_json1_1RestrictedSourceFileExceptionResponse(parsedOutput, context);
    case "SamePathRequestException":
    case "com.amazonaws.codecommit#SamePathRequestException":
      throw await deserializeAws_json1_1SamePathRequestExceptionResponse(parsedOutput, context);
    case "SourceFileOrContentRequiredException":
    case "com.amazonaws.codecommit#SourceFileOrContentRequiredException":
      throw await deserializeAws_json1_1SourceFileOrContentRequiredExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreatePullRequestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePullRequestCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreatePullRequestCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreatePullRequestOutput(data, context);
  const response: CreatePullRequestCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreatePullRequestCommandError = async (
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
      throw await deserializeAws_json1_1ClientRequestTokenRequiredExceptionResponse(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context);
    case "IdempotencyParameterMismatchException":
    case "com.amazonaws.codecommit#IdempotencyParameterMismatchException":
      throw await deserializeAws_json1_1IdempotencyParameterMismatchExceptionResponse(parsedOutput, context);
    case "InvalidClientRequestTokenException":
    case "com.amazonaws.codecommit#InvalidClientRequestTokenException":
      throw await deserializeAws_json1_1InvalidClientRequestTokenExceptionResponse(parsedOutput, context);
    case "InvalidDescriptionException":
    case "com.amazonaws.codecommit#InvalidDescriptionException":
      throw await deserializeAws_json1_1InvalidDescriptionExceptionResponse(parsedOutput, context);
    case "InvalidReferenceNameException":
    case "com.amazonaws.codecommit#InvalidReferenceNameException":
      throw await deserializeAws_json1_1InvalidReferenceNameExceptionResponse(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context);
    case "InvalidTargetException":
    case "com.amazonaws.codecommit#InvalidTargetException":
      throw await deserializeAws_json1_1InvalidTargetExceptionResponse(parsedOutput, context);
    case "InvalidTargetsException":
    case "com.amazonaws.codecommit#InvalidTargetsException":
      throw await deserializeAws_json1_1InvalidTargetsExceptionResponse(parsedOutput, context);
    case "InvalidTitleException":
    case "com.amazonaws.codecommit#InvalidTitleException":
      throw await deserializeAws_json1_1InvalidTitleExceptionResponse(parsedOutput, context);
    case "MaximumOpenPullRequestsExceededException":
    case "com.amazonaws.codecommit#MaximumOpenPullRequestsExceededException":
      throw await deserializeAws_json1_1MaximumOpenPullRequestsExceededExceptionResponse(parsedOutput, context);
    case "MultipleRepositoriesInPullRequestException":
    case "com.amazonaws.codecommit#MultipleRepositoriesInPullRequestException":
      throw await deserializeAws_json1_1MultipleRepositoriesInPullRequestExceptionResponse(parsedOutput, context);
    case "ReferenceDoesNotExistException":
    case "com.amazonaws.codecommit#ReferenceDoesNotExistException":
      throw await deserializeAws_json1_1ReferenceDoesNotExistExceptionResponse(parsedOutput, context);
    case "ReferenceNameRequiredException":
    case "com.amazonaws.codecommit#ReferenceNameRequiredException":
      throw await deserializeAws_json1_1ReferenceNameRequiredExceptionResponse(parsedOutput, context);
    case "ReferenceTypeNotSupportedException":
    case "com.amazonaws.codecommit#ReferenceTypeNotSupportedException":
      throw await deserializeAws_json1_1ReferenceTypeNotSupportedExceptionResponse(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context);
    case "SourceAndDestinationAreSameException":
    case "com.amazonaws.codecommit#SourceAndDestinationAreSameException":
      throw await deserializeAws_json1_1SourceAndDestinationAreSameExceptionResponse(parsedOutput, context);
    case "TargetRequiredException":
    case "com.amazonaws.codecommit#TargetRequiredException":
      throw await deserializeAws_json1_1TargetRequiredExceptionResponse(parsedOutput, context);
    case "TargetsRequiredException":
    case "com.amazonaws.codecommit#TargetsRequiredException":
      throw await deserializeAws_json1_1TargetsRequiredExceptionResponse(parsedOutput, context);
    case "TitleRequiredException":
    case "com.amazonaws.codecommit#TitleRequiredException":
      throw await deserializeAws_json1_1TitleRequiredExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreatePullRequestApprovalRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePullRequestApprovalRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreatePullRequestApprovalRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreatePullRequestApprovalRuleOutput(data, context);
  const response: CreatePullRequestApprovalRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreatePullRequestApprovalRuleCommandError = async (
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
      throw await deserializeAws_json1_1ApprovalRuleContentRequiredExceptionResponse(parsedOutput, context);
    case "ApprovalRuleNameAlreadyExistsException":
    case "com.amazonaws.codecommit#ApprovalRuleNameAlreadyExistsException":
      throw await deserializeAws_json1_1ApprovalRuleNameAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ApprovalRuleNameRequiredException":
    case "com.amazonaws.codecommit#ApprovalRuleNameRequiredException":
      throw await deserializeAws_json1_1ApprovalRuleNameRequiredExceptionResponse(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context);
    case "InvalidApprovalRuleContentException":
    case "com.amazonaws.codecommit#InvalidApprovalRuleContentException":
      throw await deserializeAws_json1_1InvalidApprovalRuleContentExceptionResponse(parsedOutput, context);
    case "InvalidApprovalRuleNameException":
    case "com.amazonaws.codecommit#InvalidApprovalRuleNameException":
      throw await deserializeAws_json1_1InvalidApprovalRuleNameExceptionResponse(parsedOutput, context);
    case "InvalidPullRequestIdException":
    case "com.amazonaws.codecommit#InvalidPullRequestIdException":
      throw await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context);
    case "NumberOfRulesExceededException":
    case "com.amazonaws.codecommit#NumberOfRulesExceededException":
      throw await deserializeAws_json1_1NumberOfRulesExceededExceptionResponse(parsedOutput, context);
    case "PullRequestAlreadyClosedException":
    case "com.amazonaws.codecommit#PullRequestAlreadyClosedException":
      throw await deserializeAws_json1_1PullRequestAlreadyClosedExceptionResponse(parsedOutput, context);
    case "PullRequestDoesNotExistException":
    case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
      throw await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context);
    case "PullRequestIdRequiredException":
    case "com.amazonaws.codecommit#PullRequestIdRequiredException":
      throw await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateRepositoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRepositoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateRepositoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateRepositoryOutput(data, context);
  const response: CreateRepositoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateRepositoryCommandError = async (
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
      throw await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context);
    case "InvalidRepositoryDescriptionException":
    case "com.amazonaws.codecommit#InvalidRepositoryDescriptionException":
      throw await deserializeAws_json1_1InvalidRepositoryDescriptionExceptionResponse(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context);
    case "InvalidSystemTagUsageException":
    case "com.amazonaws.codecommit#InvalidSystemTagUsageException":
      throw await deserializeAws_json1_1InvalidSystemTagUsageExceptionResponse(parsedOutput, context);
    case "InvalidTagsMapException":
    case "com.amazonaws.codecommit#InvalidTagsMapException":
      throw await deserializeAws_json1_1InvalidTagsMapExceptionResponse(parsedOutput, context);
    case "RepositoryLimitExceededException":
    case "com.amazonaws.codecommit#RepositoryLimitExceededException":
      throw await deserializeAws_json1_1RepositoryLimitExceededExceptionResponse(parsedOutput, context);
    case "RepositoryNameExistsException":
    case "com.amazonaws.codecommit#RepositoryNameExistsException":
      throw await deserializeAws_json1_1RepositoryNameExistsExceptionResponse(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context);
    case "TagPolicyException":
    case "com.amazonaws.codecommit#TagPolicyException":
      throw await deserializeAws_json1_1TagPolicyExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.codecommit#TooManyTagsException":
      throw await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateUnreferencedMergeCommitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUnreferencedMergeCommitCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateUnreferencedMergeCommitCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateUnreferencedMergeCommitOutput(data, context);
  const response: CreateUnreferencedMergeCommitCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateUnreferencedMergeCommitCommandError = async (
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
      throw await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context);
    case "CommitMessageLengthExceededException":
    case "com.amazonaws.codecommit#CommitMessageLengthExceededException":
      throw await deserializeAws_json1_1CommitMessageLengthExceededExceptionResponse(parsedOutput, context);
    case "CommitRequiredException":
    case "com.amazonaws.codecommit#CommitRequiredException":
      throw await deserializeAws_json1_1CommitRequiredExceptionResponse(parsedOutput, context);
    case "ConcurrentReferenceUpdateException":
    case "com.amazonaws.codecommit#ConcurrentReferenceUpdateException":
      throw await deserializeAws_json1_1ConcurrentReferenceUpdateExceptionResponse(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context);
    case "FileContentSizeLimitExceededException":
    case "com.amazonaws.codecommit#FileContentSizeLimitExceededException":
      throw await deserializeAws_json1_1FileContentSizeLimitExceededExceptionResponse(parsedOutput, context);
    case "FileModeRequiredException":
    case "com.amazonaws.codecommit#FileModeRequiredException":
      throw await deserializeAws_json1_1FileModeRequiredExceptionResponse(parsedOutput, context);
    case "FolderContentSizeLimitExceededException":
    case "com.amazonaws.codecommit#FolderContentSizeLimitExceededException":
      throw await deserializeAws_json1_1FolderContentSizeLimitExceededExceptionResponse(parsedOutput, context);
    case "InvalidCommitException":
    case "com.amazonaws.codecommit#InvalidCommitException":
      throw await deserializeAws_json1_1InvalidCommitExceptionResponse(parsedOutput, context);
    case "InvalidConflictDetailLevelException":
    case "com.amazonaws.codecommit#InvalidConflictDetailLevelException":
      throw await deserializeAws_json1_1InvalidConflictDetailLevelExceptionResponse(parsedOutput, context);
    case "InvalidConflictResolutionException":
    case "com.amazonaws.codecommit#InvalidConflictResolutionException":
      throw await deserializeAws_json1_1InvalidConflictResolutionExceptionResponse(parsedOutput, context);
    case "InvalidConflictResolutionStrategyException":
    case "com.amazonaws.codecommit#InvalidConflictResolutionStrategyException":
      throw await deserializeAws_json1_1InvalidConflictResolutionStrategyExceptionResponse(parsedOutput, context);
    case "InvalidEmailException":
    case "com.amazonaws.codecommit#InvalidEmailException":
      throw await deserializeAws_json1_1InvalidEmailExceptionResponse(parsedOutput, context);
    case "InvalidFileModeException":
    case "com.amazonaws.codecommit#InvalidFileModeException":
      throw await deserializeAws_json1_1InvalidFileModeExceptionResponse(parsedOutput, context);
    case "InvalidMergeOptionException":
    case "com.amazonaws.codecommit#InvalidMergeOptionException":
      throw await deserializeAws_json1_1InvalidMergeOptionExceptionResponse(parsedOutput, context);
    case "InvalidPathException":
    case "com.amazonaws.codecommit#InvalidPathException":
      throw await deserializeAws_json1_1InvalidPathExceptionResponse(parsedOutput, context);
    case "InvalidReplacementContentException":
    case "com.amazonaws.codecommit#InvalidReplacementContentException":
      throw await deserializeAws_json1_1InvalidReplacementContentExceptionResponse(parsedOutput, context);
    case "InvalidReplacementTypeException":
    case "com.amazonaws.codecommit#InvalidReplacementTypeException":
      throw await deserializeAws_json1_1InvalidReplacementTypeExceptionResponse(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context);
    case "ManualMergeRequiredException":
    case "com.amazonaws.codecommit#ManualMergeRequiredException":
      throw await deserializeAws_json1_1ManualMergeRequiredExceptionResponse(parsedOutput, context);
    case "MaximumConflictResolutionEntriesExceededException":
    case "com.amazonaws.codecommit#MaximumConflictResolutionEntriesExceededException":
      throw await deserializeAws_json1_1MaximumConflictResolutionEntriesExceededExceptionResponse(
        parsedOutput,
        context
      );
    case "MaximumFileContentToLoadExceededException":
    case "com.amazonaws.codecommit#MaximumFileContentToLoadExceededException":
      throw await deserializeAws_json1_1MaximumFileContentToLoadExceededExceptionResponse(parsedOutput, context);
    case "MaximumItemsToCompareExceededException":
    case "com.amazonaws.codecommit#MaximumItemsToCompareExceededException":
      throw await deserializeAws_json1_1MaximumItemsToCompareExceededExceptionResponse(parsedOutput, context);
    case "MergeOptionRequiredException":
    case "com.amazonaws.codecommit#MergeOptionRequiredException":
      throw await deserializeAws_json1_1MergeOptionRequiredExceptionResponse(parsedOutput, context);
    case "MultipleConflictResolutionEntriesException":
    case "com.amazonaws.codecommit#MultipleConflictResolutionEntriesException":
      throw await deserializeAws_json1_1MultipleConflictResolutionEntriesExceptionResponse(parsedOutput, context);
    case "NameLengthExceededException":
    case "com.amazonaws.codecommit#NameLengthExceededException":
      throw await deserializeAws_json1_1NameLengthExceededExceptionResponse(parsedOutput, context);
    case "PathRequiredException":
    case "com.amazonaws.codecommit#PathRequiredException":
      throw await deserializeAws_json1_1PathRequiredExceptionResponse(parsedOutput, context);
    case "ReplacementContentRequiredException":
    case "com.amazonaws.codecommit#ReplacementContentRequiredException":
      throw await deserializeAws_json1_1ReplacementContentRequiredExceptionResponse(parsedOutput, context);
    case "ReplacementTypeRequiredException":
    case "com.amazonaws.codecommit#ReplacementTypeRequiredException":
      throw await deserializeAws_json1_1ReplacementTypeRequiredExceptionResponse(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context);
    case "TipsDivergenceExceededException":
    case "com.amazonaws.codecommit#TipsDivergenceExceededException":
      throw await deserializeAws_json1_1TipsDivergenceExceededExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteApprovalRuleTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApprovalRuleTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteApprovalRuleTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteApprovalRuleTemplateOutput(data, context);
  const response: DeleteApprovalRuleTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteApprovalRuleTemplateCommandError = async (
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
      throw await deserializeAws_json1_1ApprovalRuleTemplateInUseExceptionResponse(parsedOutput, context);
    case "ApprovalRuleTemplateNameRequiredException":
    case "com.amazonaws.codecommit#ApprovalRuleTemplateNameRequiredException":
      throw await deserializeAws_json1_1ApprovalRuleTemplateNameRequiredExceptionResponse(parsedOutput, context);
    case "InvalidApprovalRuleTemplateNameException":
    case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateNameException":
      throw await deserializeAws_json1_1InvalidApprovalRuleTemplateNameExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteBranchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBranchCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteBranchCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteBranchOutput(data, context);
  const response: DeleteBranchCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteBranchCommandError = async (
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
      throw await deserializeAws_json1_1BranchNameRequiredExceptionResponse(parsedOutput, context);
    case "DefaultBranchCannotBeDeletedException":
    case "com.amazonaws.codecommit#DefaultBranchCannotBeDeletedException":
      throw await deserializeAws_json1_1DefaultBranchCannotBeDeletedExceptionResponse(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context);
    case "InvalidBranchNameException":
    case "com.amazonaws.codecommit#InvalidBranchNameException":
      throw await deserializeAws_json1_1InvalidBranchNameExceptionResponse(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteCommentContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCommentContentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteCommentContentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteCommentContentOutput(data, context);
  const response: DeleteCommentContentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteCommentContentCommandError = async (
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
      throw await deserializeAws_json1_1CommentDeletedExceptionResponse(parsedOutput, context);
    case "CommentDoesNotExistException":
    case "com.amazonaws.codecommit#CommentDoesNotExistException":
      throw await deserializeAws_json1_1CommentDoesNotExistExceptionResponse(parsedOutput, context);
    case "CommentIdRequiredException":
    case "com.amazonaws.codecommit#CommentIdRequiredException":
      throw await deserializeAws_json1_1CommentIdRequiredExceptionResponse(parsedOutput, context);
    case "InvalidCommentIdException":
    case "com.amazonaws.codecommit#InvalidCommentIdException":
      throw await deserializeAws_json1_1InvalidCommentIdExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteFileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFileCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteFileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteFileOutput(data, context);
  const response: DeleteFileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteFileCommandError = async (
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
      throw await deserializeAws_json1_1BranchDoesNotExistExceptionResponse(parsedOutput, context);
    case "BranchNameIsTagNameException":
    case "com.amazonaws.codecommit#BranchNameIsTagNameException":
      throw await deserializeAws_json1_1BranchNameIsTagNameExceptionResponse(parsedOutput, context);
    case "BranchNameRequiredException":
    case "com.amazonaws.codecommit#BranchNameRequiredException":
      throw await deserializeAws_json1_1BranchNameRequiredExceptionResponse(parsedOutput, context);
    case "CommitMessageLengthExceededException":
    case "com.amazonaws.codecommit#CommitMessageLengthExceededException":
      throw await deserializeAws_json1_1CommitMessageLengthExceededExceptionResponse(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context);
    case "FileDoesNotExistException":
    case "com.amazonaws.codecommit#FileDoesNotExistException":
      throw await deserializeAws_json1_1FileDoesNotExistExceptionResponse(parsedOutput, context);
    case "InvalidBranchNameException":
    case "com.amazonaws.codecommit#InvalidBranchNameException":
      throw await deserializeAws_json1_1InvalidBranchNameExceptionResponse(parsedOutput, context);
    case "InvalidEmailException":
    case "com.amazonaws.codecommit#InvalidEmailException":
      throw await deserializeAws_json1_1InvalidEmailExceptionResponse(parsedOutput, context);
    case "InvalidParentCommitIdException":
    case "com.amazonaws.codecommit#InvalidParentCommitIdException":
      throw await deserializeAws_json1_1InvalidParentCommitIdExceptionResponse(parsedOutput, context);
    case "InvalidPathException":
    case "com.amazonaws.codecommit#InvalidPathException":
      throw await deserializeAws_json1_1InvalidPathExceptionResponse(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context);
    case "NameLengthExceededException":
    case "com.amazonaws.codecommit#NameLengthExceededException":
      throw await deserializeAws_json1_1NameLengthExceededExceptionResponse(parsedOutput, context);
    case "ParentCommitDoesNotExistException":
    case "com.amazonaws.codecommit#ParentCommitDoesNotExistException":
      throw await deserializeAws_json1_1ParentCommitDoesNotExistExceptionResponse(parsedOutput, context);
    case "ParentCommitIdOutdatedException":
    case "com.amazonaws.codecommit#ParentCommitIdOutdatedException":
      throw await deserializeAws_json1_1ParentCommitIdOutdatedExceptionResponse(parsedOutput, context);
    case "ParentCommitIdRequiredException":
    case "com.amazonaws.codecommit#ParentCommitIdRequiredException":
      throw await deserializeAws_json1_1ParentCommitIdRequiredExceptionResponse(parsedOutput, context);
    case "PathRequiredException":
    case "com.amazonaws.codecommit#PathRequiredException":
      throw await deserializeAws_json1_1PathRequiredExceptionResponse(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeletePullRequestApprovalRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePullRequestApprovalRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeletePullRequestApprovalRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeletePullRequestApprovalRuleOutput(data, context);
  const response: DeletePullRequestApprovalRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeletePullRequestApprovalRuleCommandError = async (
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
      throw await deserializeAws_json1_1ApprovalRuleNameRequiredExceptionResponse(parsedOutput, context);
    case "CannotDeleteApprovalRuleFromTemplateException":
    case "com.amazonaws.codecommit#CannotDeleteApprovalRuleFromTemplateException":
      throw await deserializeAws_json1_1CannotDeleteApprovalRuleFromTemplateExceptionResponse(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context);
    case "InvalidApprovalRuleNameException":
    case "com.amazonaws.codecommit#InvalidApprovalRuleNameException":
      throw await deserializeAws_json1_1InvalidApprovalRuleNameExceptionResponse(parsedOutput, context);
    case "InvalidPullRequestIdException":
    case "com.amazonaws.codecommit#InvalidPullRequestIdException":
      throw await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context);
    case "PullRequestAlreadyClosedException":
    case "com.amazonaws.codecommit#PullRequestAlreadyClosedException":
      throw await deserializeAws_json1_1PullRequestAlreadyClosedExceptionResponse(parsedOutput, context);
    case "PullRequestDoesNotExistException":
    case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
      throw await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context);
    case "PullRequestIdRequiredException":
    case "com.amazonaws.codecommit#PullRequestIdRequiredException":
      throw await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteRepositoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRepositoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteRepositoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteRepositoryOutput(data, context);
  const response: DeleteRepositoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteRepositoryCommandError = async (
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
      throw await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeMergeConflictsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMergeConflictsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeMergeConflictsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeMergeConflictsOutput(data, context);
  const response: DescribeMergeConflictsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeMergeConflictsCommandError = async (
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
      throw await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context);
    case "CommitRequiredException":
    case "com.amazonaws.codecommit#CommitRequiredException":
      throw await deserializeAws_json1_1CommitRequiredExceptionResponse(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context);
    case "FileDoesNotExistException":
    case "com.amazonaws.codecommit#FileDoesNotExistException":
      throw await deserializeAws_json1_1FileDoesNotExistExceptionResponse(parsedOutput, context);
    case "InvalidCommitException":
    case "com.amazonaws.codecommit#InvalidCommitException":
      throw await deserializeAws_json1_1InvalidCommitExceptionResponse(parsedOutput, context);
    case "InvalidConflictDetailLevelException":
    case "com.amazonaws.codecommit#InvalidConflictDetailLevelException":
      throw await deserializeAws_json1_1InvalidConflictDetailLevelExceptionResponse(parsedOutput, context);
    case "InvalidConflictResolutionStrategyException":
    case "com.amazonaws.codecommit#InvalidConflictResolutionStrategyException":
      throw await deserializeAws_json1_1InvalidConflictResolutionStrategyExceptionResponse(parsedOutput, context);
    case "InvalidContinuationTokenException":
    case "com.amazonaws.codecommit#InvalidContinuationTokenException":
      throw await deserializeAws_json1_1InvalidContinuationTokenExceptionResponse(parsedOutput, context);
    case "InvalidMaxMergeHunksException":
    case "com.amazonaws.codecommit#InvalidMaxMergeHunksException":
      throw await deserializeAws_json1_1InvalidMaxMergeHunksExceptionResponse(parsedOutput, context);
    case "InvalidMergeOptionException":
    case "com.amazonaws.codecommit#InvalidMergeOptionException":
      throw await deserializeAws_json1_1InvalidMergeOptionExceptionResponse(parsedOutput, context);
    case "InvalidPathException":
    case "com.amazonaws.codecommit#InvalidPathException":
      throw await deserializeAws_json1_1InvalidPathExceptionResponse(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context);
    case "MaximumFileContentToLoadExceededException":
    case "com.amazonaws.codecommit#MaximumFileContentToLoadExceededException":
      throw await deserializeAws_json1_1MaximumFileContentToLoadExceededExceptionResponse(parsedOutput, context);
    case "MaximumItemsToCompareExceededException":
    case "com.amazonaws.codecommit#MaximumItemsToCompareExceededException":
      throw await deserializeAws_json1_1MaximumItemsToCompareExceededExceptionResponse(parsedOutput, context);
    case "MergeOptionRequiredException":
    case "com.amazonaws.codecommit#MergeOptionRequiredException":
      throw await deserializeAws_json1_1MergeOptionRequiredExceptionResponse(parsedOutput, context);
    case "PathRequiredException":
    case "com.amazonaws.codecommit#PathRequiredException":
      throw await deserializeAws_json1_1PathRequiredExceptionResponse(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context);
    case "TipsDivergenceExceededException":
    case "com.amazonaws.codecommit#TipsDivergenceExceededException":
      throw await deserializeAws_json1_1TipsDivergenceExceededExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribePullRequestEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePullRequestEventsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribePullRequestEventsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribePullRequestEventsOutput(data, context);
  const response: DescribePullRequestEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribePullRequestEventsCommandError = async (
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
      throw await deserializeAws_json1_1ActorDoesNotExistExceptionResponse(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context);
    case "InvalidActorArnException":
    case "com.amazonaws.codecommit#InvalidActorArnException":
      throw await deserializeAws_json1_1InvalidActorArnExceptionResponse(parsedOutput, context);
    case "InvalidContinuationTokenException":
    case "com.amazonaws.codecommit#InvalidContinuationTokenException":
      throw await deserializeAws_json1_1InvalidContinuationTokenExceptionResponse(parsedOutput, context);
    case "InvalidMaxResultsException":
    case "com.amazonaws.codecommit#InvalidMaxResultsException":
      throw await deserializeAws_json1_1InvalidMaxResultsExceptionResponse(parsedOutput, context);
    case "InvalidPullRequestEventTypeException":
    case "com.amazonaws.codecommit#InvalidPullRequestEventTypeException":
      throw await deserializeAws_json1_1InvalidPullRequestEventTypeExceptionResponse(parsedOutput, context);
    case "InvalidPullRequestIdException":
    case "com.amazonaws.codecommit#InvalidPullRequestIdException":
      throw await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context);
    case "PullRequestDoesNotExistException":
    case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
      throw await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context);
    case "PullRequestIdRequiredException":
    case "com.amazonaws.codecommit#PullRequestIdRequiredException":
      throw await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DisassociateApprovalRuleTemplateFromRepositoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateApprovalRuleTemplateFromRepositoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisassociateApprovalRuleTemplateFromRepositoryCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DisassociateApprovalRuleTemplateFromRepositoryCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisassociateApprovalRuleTemplateFromRepositoryCommandError = async (
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
      throw await deserializeAws_json1_1ApprovalRuleTemplateDoesNotExistExceptionResponse(parsedOutput, context);
    case "ApprovalRuleTemplateNameRequiredException":
    case "com.amazonaws.codecommit#ApprovalRuleTemplateNameRequiredException":
      throw await deserializeAws_json1_1ApprovalRuleTemplateNameRequiredExceptionResponse(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context);
    case "InvalidApprovalRuleTemplateNameException":
    case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateNameException":
      throw await deserializeAws_json1_1InvalidApprovalRuleTemplateNameExceptionResponse(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1EvaluatePullRequestApprovalRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EvaluatePullRequestApprovalRulesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1EvaluatePullRequestApprovalRulesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1EvaluatePullRequestApprovalRulesOutput(data, context);
  const response: EvaluatePullRequestApprovalRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1EvaluatePullRequestApprovalRulesCommandError = async (
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
      throw await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context);
    case "InvalidPullRequestIdException":
    case "com.amazonaws.codecommit#InvalidPullRequestIdException":
      throw await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context);
    case "InvalidRevisionIdException":
    case "com.amazonaws.codecommit#InvalidRevisionIdException":
      throw await deserializeAws_json1_1InvalidRevisionIdExceptionResponse(parsedOutput, context);
    case "PullRequestDoesNotExistException":
    case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
      throw await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context);
    case "PullRequestIdRequiredException":
    case "com.amazonaws.codecommit#PullRequestIdRequiredException":
      throw await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context);
    case "RevisionIdRequiredException":
    case "com.amazonaws.codecommit#RevisionIdRequiredException":
      throw await deserializeAws_json1_1RevisionIdRequiredExceptionResponse(parsedOutput, context);
    case "RevisionNotCurrentException":
    case "com.amazonaws.codecommit#RevisionNotCurrentException":
      throw await deserializeAws_json1_1RevisionNotCurrentExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetApprovalRuleTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApprovalRuleTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetApprovalRuleTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetApprovalRuleTemplateOutput(data, context);
  const response: GetApprovalRuleTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetApprovalRuleTemplateCommandError = async (
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
      throw await deserializeAws_json1_1ApprovalRuleTemplateDoesNotExistExceptionResponse(parsedOutput, context);
    case "ApprovalRuleTemplateNameRequiredException":
    case "com.amazonaws.codecommit#ApprovalRuleTemplateNameRequiredException":
      throw await deserializeAws_json1_1ApprovalRuleTemplateNameRequiredExceptionResponse(parsedOutput, context);
    case "InvalidApprovalRuleTemplateNameException":
    case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateNameException":
      throw await deserializeAws_json1_1InvalidApprovalRuleTemplateNameExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetBlobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBlobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetBlobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetBlobOutput(data, context);
  const response: GetBlobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetBlobCommandError = async (
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
      throw await deserializeAws_json1_1BlobIdDoesNotExistExceptionResponse(parsedOutput, context);
    case "BlobIdRequiredException":
    case "com.amazonaws.codecommit#BlobIdRequiredException":
      throw await deserializeAws_json1_1BlobIdRequiredExceptionResponse(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context);
    case "FileTooLargeException":
    case "com.amazonaws.codecommit#FileTooLargeException":
      throw await deserializeAws_json1_1FileTooLargeExceptionResponse(parsedOutput, context);
    case "InvalidBlobIdException":
    case "com.amazonaws.codecommit#InvalidBlobIdException":
      throw await deserializeAws_json1_1InvalidBlobIdExceptionResponse(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetBranchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBranchCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetBranchCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetBranchOutput(data, context);
  const response: GetBranchCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetBranchCommandError = async (
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
      throw await deserializeAws_json1_1BranchDoesNotExistExceptionResponse(parsedOutput, context);
    case "BranchNameRequiredException":
    case "com.amazonaws.codecommit#BranchNameRequiredException":
      throw await deserializeAws_json1_1BranchNameRequiredExceptionResponse(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context);
    case "InvalidBranchNameException":
    case "com.amazonaws.codecommit#InvalidBranchNameException":
      throw await deserializeAws_json1_1InvalidBranchNameExceptionResponse(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetCommentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCommentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetCommentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetCommentOutput(data, context);
  const response: GetCommentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetCommentCommandError = async (
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
      throw await deserializeAws_json1_1CommentDeletedExceptionResponse(parsedOutput, context);
    case "CommentDoesNotExistException":
    case "com.amazonaws.codecommit#CommentDoesNotExistException":
      throw await deserializeAws_json1_1CommentDoesNotExistExceptionResponse(parsedOutput, context);
    case "CommentIdRequiredException":
    case "com.amazonaws.codecommit#CommentIdRequiredException":
      throw await deserializeAws_json1_1CommentIdRequiredExceptionResponse(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context);
    case "InvalidCommentIdException":
    case "com.amazonaws.codecommit#InvalidCommentIdException":
      throw await deserializeAws_json1_1InvalidCommentIdExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetCommentReactionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCommentReactionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetCommentReactionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetCommentReactionsOutput(data, context);
  const response: GetCommentReactionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetCommentReactionsCommandError = async (
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
      throw await deserializeAws_json1_1CommentDeletedExceptionResponse(parsedOutput, context);
    case "CommentDoesNotExistException":
    case "com.amazonaws.codecommit#CommentDoesNotExistException":
      throw await deserializeAws_json1_1CommentDoesNotExistExceptionResponse(parsedOutput, context);
    case "CommentIdRequiredException":
    case "com.amazonaws.codecommit#CommentIdRequiredException":
      throw await deserializeAws_json1_1CommentIdRequiredExceptionResponse(parsedOutput, context);
    case "InvalidCommentIdException":
    case "com.amazonaws.codecommit#InvalidCommentIdException":
      throw await deserializeAws_json1_1InvalidCommentIdExceptionResponse(parsedOutput, context);
    case "InvalidContinuationTokenException":
    case "com.amazonaws.codecommit#InvalidContinuationTokenException":
      throw await deserializeAws_json1_1InvalidContinuationTokenExceptionResponse(parsedOutput, context);
    case "InvalidMaxResultsException":
    case "com.amazonaws.codecommit#InvalidMaxResultsException":
      throw await deserializeAws_json1_1InvalidMaxResultsExceptionResponse(parsedOutput, context);
    case "InvalidReactionUserArnException":
    case "com.amazonaws.codecommit#InvalidReactionUserArnException":
      throw await deserializeAws_json1_1InvalidReactionUserArnExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetCommentsForComparedCommitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCommentsForComparedCommitCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetCommentsForComparedCommitCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetCommentsForComparedCommitOutput(data, context);
  const response: GetCommentsForComparedCommitCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetCommentsForComparedCommitCommandError = async (
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
      throw await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context);
    case "CommitIdRequiredException":
    case "com.amazonaws.codecommit#CommitIdRequiredException":
      throw await deserializeAws_json1_1CommitIdRequiredExceptionResponse(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context);
    case "InvalidCommitIdException":
    case "com.amazonaws.codecommit#InvalidCommitIdException":
      throw await deserializeAws_json1_1InvalidCommitIdExceptionResponse(parsedOutput, context);
    case "InvalidContinuationTokenException":
    case "com.amazonaws.codecommit#InvalidContinuationTokenException":
      throw await deserializeAws_json1_1InvalidContinuationTokenExceptionResponse(parsedOutput, context);
    case "InvalidMaxResultsException":
    case "com.amazonaws.codecommit#InvalidMaxResultsException":
      throw await deserializeAws_json1_1InvalidMaxResultsExceptionResponse(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetCommentsForPullRequestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCommentsForPullRequestCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetCommentsForPullRequestCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetCommentsForPullRequestOutput(data, context);
  const response: GetCommentsForPullRequestCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetCommentsForPullRequestCommandError = async (
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
      throw await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context);
    case "CommitIdRequiredException":
    case "com.amazonaws.codecommit#CommitIdRequiredException":
      throw await deserializeAws_json1_1CommitIdRequiredExceptionResponse(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context);
    case "InvalidCommitIdException":
    case "com.amazonaws.codecommit#InvalidCommitIdException":
      throw await deserializeAws_json1_1InvalidCommitIdExceptionResponse(parsedOutput, context);
    case "InvalidContinuationTokenException":
    case "com.amazonaws.codecommit#InvalidContinuationTokenException":
      throw await deserializeAws_json1_1InvalidContinuationTokenExceptionResponse(parsedOutput, context);
    case "InvalidMaxResultsException":
    case "com.amazonaws.codecommit#InvalidMaxResultsException":
      throw await deserializeAws_json1_1InvalidMaxResultsExceptionResponse(parsedOutput, context);
    case "InvalidPullRequestIdException":
    case "com.amazonaws.codecommit#InvalidPullRequestIdException":
      throw await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context);
    case "PullRequestDoesNotExistException":
    case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
      throw await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context);
    case "PullRequestIdRequiredException":
    case "com.amazonaws.codecommit#PullRequestIdRequiredException":
      throw await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context);
    case "RepositoryNotAssociatedWithPullRequestException":
    case "com.amazonaws.codecommit#RepositoryNotAssociatedWithPullRequestException":
      throw await deserializeAws_json1_1RepositoryNotAssociatedWithPullRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetCommitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCommitCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetCommitCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetCommitOutput(data, context);
  const response: GetCommitCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetCommitCommandError = async (
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
      throw await deserializeAws_json1_1CommitIdDoesNotExistExceptionResponse(parsedOutput, context);
    case "CommitIdRequiredException":
    case "com.amazonaws.codecommit#CommitIdRequiredException":
      throw await deserializeAws_json1_1CommitIdRequiredExceptionResponse(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context);
    case "InvalidCommitIdException":
    case "com.amazonaws.codecommit#InvalidCommitIdException":
      throw await deserializeAws_json1_1InvalidCommitIdExceptionResponse(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetDifferencesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDifferencesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetDifferencesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDifferencesOutput(data, context);
  const response: GetDifferencesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDifferencesCommandError = async (
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
      throw await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context);
    case "CommitRequiredException":
    case "com.amazonaws.codecommit#CommitRequiredException":
      throw await deserializeAws_json1_1CommitRequiredExceptionResponse(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context);
    case "InvalidCommitException":
    case "com.amazonaws.codecommit#InvalidCommitException":
      throw await deserializeAws_json1_1InvalidCommitExceptionResponse(parsedOutput, context);
    case "InvalidCommitIdException":
    case "com.amazonaws.codecommit#InvalidCommitIdException":
      throw await deserializeAws_json1_1InvalidCommitIdExceptionResponse(parsedOutput, context);
    case "InvalidContinuationTokenException":
    case "com.amazonaws.codecommit#InvalidContinuationTokenException":
      throw await deserializeAws_json1_1InvalidContinuationTokenExceptionResponse(parsedOutput, context);
    case "InvalidMaxResultsException":
    case "com.amazonaws.codecommit#InvalidMaxResultsException":
      throw await deserializeAws_json1_1InvalidMaxResultsExceptionResponse(parsedOutput, context);
    case "InvalidPathException":
    case "com.amazonaws.codecommit#InvalidPathException":
      throw await deserializeAws_json1_1InvalidPathExceptionResponse(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context);
    case "PathDoesNotExistException":
    case "com.amazonaws.codecommit#PathDoesNotExistException":
      throw await deserializeAws_json1_1PathDoesNotExistExceptionResponse(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetFileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFileCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetFileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetFileOutput(data, context);
  const response: GetFileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetFileCommandError = async (
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
      throw await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context);
    case "FileDoesNotExistException":
    case "com.amazonaws.codecommit#FileDoesNotExistException":
      throw await deserializeAws_json1_1FileDoesNotExistExceptionResponse(parsedOutput, context);
    case "FileTooLargeException":
    case "com.amazonaws.codecommit#FileTooLargeException":
      throw await deserializeAws_json1_1FileTooLargeExceptionResponse(parsedOutput, context);
    case "InvalidCommitException":
    case "com.amazonaws.codecommit#InvalidCommitException":
      throw await deserializeAws_json1_1InvalidCommitExceptionResponse(parsedOutput, context);
    case "InvalidPathException":
    case "com.amazonaws.codecommit#InvalidPathException":
      throw await deserializeAws_json1_1InvalidPathExceptionResponse(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context);
    case "PathRequiredException":
    case "com.amazonaws.codecommit#PathRequiredException":
      throw await deserializeAws_json1_1PathRequiredExceptionResponse(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetFolderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFolderCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetFolderCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetFolderOutput(data, context);
  const response: GetFolderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetFolderCommandError = async (
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
      throw await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context);
    case "FolderDoesNotExistException":
    case "com.amazonaws.codecommit#FolderDoesNotExistException":
      throw await deserializeAws_json1_1FolderDoesNotExistExceptionResponse(parsedOutput, context);
    case "InvalidCommitException":
    case "com.amazonaws.codecommit#InvalidCommitException":
      throw await deserializeAws_json1_1InvalidCommitExceptionResponse(parsedOutput, context);
    case "InvalidPathException":
    case "com.amazonaws.codecommit#InvalidPathException":
      throw await deserializeAws_json1_1InvalidPathExceptionResponse(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context);
    case "PathRequiredException":
    case "com.amazonaws.codecommit#PathRequiredException":
      throw await deserializeAws_json1_1PathRequiredExceptionResponse(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetMergeCommitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMergeCommitCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetMergeCommitCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetMergeCommitOutput(data, context);
  const response: GetMergeCommitCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetMergeCommitCommandError = async (
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
      throw await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context);
    case "CommitRequiredException":
    case "com.amazonaws.codecommit#CommitRequiredException":
      throw await deserializeAws_json1_1CommitRequiredExceptionResponse(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context);
    case "InvalidCommitException":
    case "com.amazonaws.codecommit#InvalidCommitException":
      throw await deserializeAws_json1_1InvalidCommitExceptionResponse(parsedOutput, context);
    case "InvalidConflictDetailLevelException":
    case "com.amazonaws.codecommit#InvalidConflictDetailLevelException":
      throw await deserializeAws_json1_1InvalidConflictDetailLevelExceptionResponse(parsedOutput, context);
    case "InvalidConflictResolutionStrategyException":
    case "com.amazonaws.codecommit#InvalidConflictResolutionStrategyException":
      throw await deserializeAws_json1_1InvalidConflictResolutionStrategyExceptionResponse(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetMergeConflictsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMergeConflictsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetMergeConflictsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetMergeConflictsOutput(data, context);
  const response: GetMergeConflictsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetMergeConflictsCommandError = async (
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
      throw await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context);
    case "CommitRequiredException":
    case "com.amazonaws.codecommit#CommitRequiredException":
      throw await deserializeAws_json1_1CommitRequiredExceptionResponse(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context);
    case "InvalidCommitException":
    case "com.amazonaws.codecommit#InvalidCommitException":
      throw await deserializeAws_json1_1InvalidCommitExceptionResponse(parsedOutput, context);
    case "InvalidConflictDetailLevelException":
    case "com.amazonaws.codecommit#InvalidConflictDetailLevelException":
      throw await deserializeAws_json1_1InvalidConflictDetailLevelExceptionResponse(parsedOutput, context);
    case "InvalidConflictResolutionStrategyException":
    case "com.amazonaws.codecommit#InvalidConflictResolutionStrategyException":
      throw await deserializeAws_json1_1InvalidConflictResolutionStrategyExceptionResponse(parsedOutput, context);
    case "InvalidContinuationTokenException":
    case "com.amazonaws.codecommit#InvalidContinuationTokenException":
      throw await deserializeAws_json1_1InvalidContinuationTokenExceptionResponse(parsedOutput, context);
    case "InvalidDestinationCommitSpecifierException":
    case "com.amazonaws.codecommit#InvalidDestinationCommitSpecifierException":
      throw await deserializeAws_json1_1InvalidDestinationCommitSpecifierExceptionResponse(parsedOutput, context);
    case "InvalidMaxConflictFilesException":
    case "com.amazonaws.codecommit#InvalidMaxConflictFilesException":
      throw await deserializeAws_json1_1InvalidMaxConflictFilesExceptionResponse(parsedOutput, context);
    case "InvalidMergeOptionException":
    case "com.amazonaws.codecommit#InvalidMergeOptionException":
      throw await deserializeAws_json1_1InvalidMergeOptionExceptionResponse(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context);
    case "InvalidSourceCommitSpecifierException":
    case "com.amazonaws.codecommit#InvalidSourceCommitSpecifierException":
      throw await deserializeAws_json1_1InvalidSourceCommitSpecifierExceptionResponse(parsedOutput, context);
    case "MaximumFileContentToLoadExceededException":
    case "com.amazonaws.codecommit#MaximumFileContentToLoadExceededException":
      throw await deserializeAws_json1_1MaximumFileContentToLoadExceededExceptionResponse(parsedOutput, context);
    case "MaximumItemsToCompareExceededException":
    case "com.amazonaws.codecommit#MaximumItemsToCompareExceededException":
      throw await deserializeAws_json1_1MaximumItemsToCompareExceededExceptionResponse(parsedOutput, context);
    case "MergeOptionRequiredException":
    case "com.amazonaws.codecommit#MergeOptionRequiredException":
      throw await deserializeAws_json1_1MergeOptionRequiredExceptionResponse(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context);
    case "TipsDivergenceExceededException":
    case "com.amazonaws.codecommit#TipsDivergenceExceededException":
      throw await deserializeAws_json1_1TipsDivergenceExceededExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetMergeOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMergeOptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetMergeOptionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetMergeOptionsOutput(data, context);
  const response: GetMergeOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetMergeOptionsCommandError = async (
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
      throw await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context);
    case "CommitRequiredException":
    case "com.amazonaws.codecommit#CommitRequiredException":
      throw await deserializeAws_json1_1CommitRequiredExceptionResponse(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context);
    case "InvalidCommitException":
    case "com.amazonaws.codecommit#InvalidCommitException":
      throw await deserializeAws_json1_1InvalidCommitExceptionResponse(parsedOutput, context);
    case "InvalidConflictDetailLevelException":
    case "com.amazonaws.codecommit#InvalidConflictDetailLevelException":
      throw await deserializeAws_json1_1InvalidConflictDetailLevelExceptionResponse(parsedOutput, context);
    case "InvalidConflictResolutionStrategyException":
    case "com.amazonaws.codecommit#InvalidConflictResolutionStrategyException":
      throw await deserializeAws_json1_1InvalidConflictResolutionStrategyExceptionResponse(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context);
    case "MaximumFileContentToLoadExceededException":
    case "com.amazonaws.codecommit#MaximumFileContentToLoadExceededException":
      throw await deserializeAws_json1_1MaximumFileContentToLoadExceededExceptionResponse(parsedOutput, context);
    case "MaximumItemsToCompareExceededException":
    case "com.amazonaws.codecommit#MaximumItemsToCompareExceededException":
      throw await deserializeAws_json1_1MaximumItemsToCompareExceededExceptionResponse(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context);
    case "TipsDivergenceExceededException":
    case "com.amazonaws.codecommit#TipsDivergenceExceededException":
      throw await deserializeAws_json1_1TipsDivergenceExceededExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetPullRequestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPullRequestCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetPullRequestCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetPullRequestOutput(data, context);
  const response: GetPullRequestCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetPullRequestCommandError = async (
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
      throw await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context);
    case "InvalidPullRequestIdException":
    case "com.amazonaws.codecommit#InvalidPullRequestIdException":
      throw await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context);
    case "PullRequestDoesNotExistException":
    case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
      throw await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context);
    case "PullRequestIdRequiredException":
    case "com.amazonaws.codecommit#PullRequestIdRequiredException":
      throw await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetPullRequestApprovalStatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPullRequestApprovalStatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetPullRequestApprovalStatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetPullRequestApprovalStatesOutput(data, context);
  const response: GetPullRequestApprovalStatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetPullRequestApprovalStatesCommandError = async (
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
      throw await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context);
    case "InvalidPullRequestIdException":
    case "com.amazonaws.codecommit#InvalidPullRequestIdException":
      throw await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context);
    case "InvalidRevisionIdException":
    case "com.amazonaws.codecommit#InvalidRevisionIdException":
      throw await deserializeAws_json1_1InvalidRevisionIdExceptionResponse(parsedOutput, context);
    case "PullRequestDoesNotExistException":
    case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
      throw await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context);
    case "PullRequestIdRequiredException":
    case "com.amazonaws.codecommit#PullRequestIdRequiredException":
      throw await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context);
    case "RevisionIdRequiredException":
    case "com.amazonaws.codecommit#RevisionIdRequiredException":
      throw await deserializeAws_json1_1RevisionIdRequiredExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetPullRequestOverrideStateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPullRequestOverrideStateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetPullRequestOverrideStateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetPullRequestOverrideStateOutput(data, context);
  const response: GetPullRequestOverrideStateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetPullRequestOverrideStateCommandError = async (
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
      throw await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context);
    case "InvalidPullRequestIdException":
    case "com.amazonaws.codecommit#InvalidPullRequestIdException":
      throw await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context);
    case "InvalidRevisionIdException":
    case "com.amazonaws.codecommit#InvalidRevisionIdException":
      throw await deserializeAws_json1_1InvalidRevisionIdExceptionResponse(parsedOutput, context);
    case "PullRequestDoesNotExistException":
    case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
      throw await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context);
    case "PullRequestIdRequiredException":
    case "com.amazonaws.codecommit#PullRequestIdRequiredException":
      throw await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context);
    case "RevisionIdRequiredException":
    case "com.amazonaws.codecommit#RevisionIdRequiredException":
      throw await deserializeAws_json1_1RevisionIdRequiredExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetRepositoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRepositoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetRepositoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRepositoryOutput(data, context);
  const response: GetRepositoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetRepositoryCommandError = async (
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
      throw await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetRepositoryTriggersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRepositoryTriggersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetRepositoryTriggersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRepositoryTriggersOutput(data, context);
  const response: GetRepositoryTriggersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetRepositoryTriggersCommandError = async (
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
      throw await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListApprovalRuleTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApprovalRuleTemplatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListApprovalRuleTemplatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListApprovalRuleTemplatesOutput(data, context);
  const response: ListApprovalRuleTemplatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListApprovalRuleTemplatesCommandError = async (
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
      throw await deserializeAws_json1_1InvalidContinuationTokenExceptionResponse(parsedOutput, context);
    case "InvalidMaxResultsException":
    case "com.amazonaws.codecommit#InvalidMaxResultsException":
      throw await deserializeAws_json1_1InvalidMaxResultsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListAssociatedApprovalRuleTemplatesForRepositoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListAssociatedApprovalRuleTemplatesForRepositoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAssociatedApprovalRuleTemplatesForRepositoryOutput(data, context);
  const response: ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListAssociatedApprovalRuleTemplatesForRepositoryCommandError = async (
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
      throw await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context);
    case "InvalidContinuationTokenException":
    case "com.amazonaws.codecommit#InvalidContinuationTokenException":
      throw await deserializeAws_json1_1InvalidContinuationTokenExceptionResponse(parsedOutput, context);
    case "InvalidMaxResultsException":
    case "com.amazonaws.codecommit#InvalidMaxResultsException":
      throw await deserializeAws_json1_1InvalidMaxResultsExceptionResponse(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListBranchesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBranchesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListBranchesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListBranchesOutput(data, context);
  const response: ListBranchesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListBranchesCommandError = async (
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
      throw await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context);
    case "InvalidContinuationTokenException":
    case "com.amazonaws.codecommit#InvalidContinuationTokenException":
      throw await deserializeAws_json1_1InvalidContinuationTokenExceptionResponse(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListPullRequestsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPullRequestsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListPullRequestsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListPullRequestsOutput(data, context);
  const response: ListPullRequestsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListPullRequestsCommandError = async (
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
      throw await deserializeAws_json1_1AuthorDoesNotExistExceptionResponse(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context);
    case "InvalidAuthorArnException":
    case "com.amazonaws.codecommit#InvalidAuthorArnException":
      throw await deserializeAws_json1_1InvalidAuthorArnExceptionResponse(parsedOutput, context);
    case "InvalidContinuationTokenException":
    case "com.amazonaws.codecommit#InvalidContinuationTokenException":
      throw await deserializeAws_json1_1InvalidContinuationTokenExceptionResponse(parsedOutput, context);
    case "InvalidMaxResultsException":
    case "com.amazonaws.codecommit#InvalidMaxResultsException":
      throw await deserializeAws_json1_1InvalidMaxResultsExceptionResponse(parsedOutput, context);
    case "InvalidPullRequestStatusException":
    case "com.amazonaws.codecommit#InvalidPullRequestStatusException":
      throw await deserializeAws_json1_1InvalidPullRequestStatusExceptionResponse(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListRepositoriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRepositoriesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListRepositoriesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListRepositoriesOutput(data, context);
  const response: ListRepositoriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListRepositoriesCommandError = async (
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
      throw await deserializeAws_json1_1InvalidContinuationTokenExceptionResponse(parsedOutput, context);
    case "InvalidOrderException":
    case "com.amazonaws.codecommit#InvalidOrderException":
      throw await deserializeAws_json1_1InvalidOrderExceptionResponse(parsedOutput, context);
    case "InvalidSortByException":
    case "com.amazonaws.codecommit#InvalidSortByException":
      throw await deserializeAws_json1_1InvalidSortByExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListRepositoriesForApprovalRuleTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRepositoriesForApprovalRuleTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListRepositoriesForApprovalRuleTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListRepositoriesForApprovalRuleTemplateOutput(data, context);
  const response: ListRepositoriesForApprovalRuleTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListRepositoriesForApprovalRuleTemplateCommandError = async (
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
      throw await deserializeAws_json1_1ApprovalRuleTemplateDoesNotExistExceptionResponse(parsedOutput, context);
    case "ApprovalRuleTemplateNameRequiredException":
    case "com.amazonaws.codecommit#ApprovalRuleTemplateNameRequiredException":
      throw await deserializeAws_json1_1ApprovalRuleTemplateNameRequiredExceptionResponse(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context);
    case "InvalidApprovalRuleTemplateNameException":
    case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateNameException":
      throw await deserializeAws_json1_1InvalidApprovalRuleTemplateNameExceptionResponse(parsedOutput, context);
    case "InvalidContinuationTokenException":
    case "com.amazonaws.codecommit#InvalidContinuationTokenException":
      throw await deserializeAws_json1_1InvalidContinuationTokenExceptionResponse(parsedOutput, context);
    case "InvalidMaxResultsException":
    case "com.amazonaws.codecommit#InvalidMaxResultsException":
      throw await deserializeAws_json1_1InvalidMaxResultsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceOutput(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsForResourceCommandError = async (
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
      throw await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context);
    case "InvalidResourceArnException":
    case "com.amazonaws.codecommit#InvalidResourceArnException":
      throw await deserializeAws_json1_1InvalidResourceArnExceptionResponse(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context);
    case "ResourceArnRequiredException":
    case "com.amazonaws.codecommit#ResourceArnRequiredException":
      throw await deserializeAws_json1_1ResourceArnRequiredExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1MergeBranchesByFastForwardCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MergeBranchesByFastForwardCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1MergeBranchesByFastForwardCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1MergeBranchesByFastForwardOutput(data, context);
  const response: MergeBranchesByFastForwardCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1MergeBranchesByFastForwardCommandError = async (
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
      throw await deserializeAws_json1_1BranchDoesNotExistExceptionResponse(parsedOutput, context);
    case "BranchNameIsTagNameException":
    case "com.amazonaws.codecommit#BranchNameIsTagNameException":
      throw await deserializeAws_json1_1BranchNameIsTagNameExceptionResponse(parsedOutput, context);
    case "BranchNameRequiredException":
    case "com.amazonaws.codecommit#BranchNameRequiredException":
      throw await deserializeAws_json1_1BranchNameRequiredExceptionResponse(parsedOutput, context);
    case "CommitDoesNotExistException":
    case "com.amazonaws.codecommit#CommitDoesNotExistException":
      throw await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context);
    case "CommitRequiredException":
    case "com.amazonaws.codecommit#CommitRequiredException":
      throw await deserializeAws_json1_1CommitRequiredExceptionResponse(parsedOutput, context);
    case "ConcurrentReferenceUpdateException":
    case "com.amazonaws.codecommit#ConcurrentReferenceUpdateException":
      throw await deserializeAws_json1_1ConcurrentReferenceUpdateExceptionResponse(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context);
    case "InvalidBranchNameException":
    case "com.amazonaws.codecommit#InvalidBranchNameException":
      throw await deserializeAws_json1_1InvalidBranchNameExceptionResponse(parsedOutput, context);
    case "InvalidCommitException":
    case "com.amazonaws.codecommit#InvalidCommitException":
      throw await deserializeAws_json1_1InvalidCommitExceptionResponse(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context);
    case "InvalidTargetBranchException":
    case "com.amazonaws.codecommit#InvalidTargetBranchException":
      throw await deserializeAws_json1_1InvalidTargetBranchExceptionResponse(parsedOutput, context);
    case "ManualMergeRequiredException":
    case "com.amazonaws.codecommit#ManualMergeRequiredException":
      throw await deserializeAws_json1_1ManualMergeRequiredExceptionResponse(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context);
    case "TipsDivergenceExceededException":
    case "com.amazonaws.codecommit#TipsDivergenceExceededException":
      throw await deserializeAws_json1_1TipsDivergenceExceededExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1MergeBranchesBySquashCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MergeBranchesBySquashCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1MergeBranchesBySquashCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1MergeBranchesBySquashOutput(data, context);
  const response: MergeBranchesBySquashCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1MergeBranchesBySquashCommandError = async (
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
      throw await deserializeAws_json1_1BranchDoesNotExistExceptionResponse(parsedOutput, context);
    case "BranchNameIsTagNameException":
    case "com.amazonaws.codecommit#BranchNameIsTagNameException":
      throw await deserializeAws_json1_1BranchNameIsTagNameExceptionResponse(parsedOutput, context);
    case "BranchNameRequiredException":
    case "com.amazonaws.codecommit#BranchNameRequiredException":
      throw await deserializeAws_json1_1BranchNameRequiredExceptionResponse(parsedOutput, context);
    case "CommitDoesNotExistException":
    case "com.amazonaws.codecommit#CommitDoesNotExistException":
      throw await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context);
    case "CommitMessageLengthExceededException":
    case "com.amazonaws.codecommit#CommitMessageLengthExceededException":
      throw await deserializeAws_json1_1CommitMessageLengthExceededExceptionResponse(parsedOutput, context);
    case "CommitRequiredException":
    case "com.amazonaws.codecommit#CommitRequiredException":
      throw await deserializeAws_json1_1CommitRequiredExceptionResponse(parsedOutput, context);
    case "ConcurrentReferenceUpdateException":
    case "com.amazonaws.codecommit#ConcurrentReferenceUpdateException":
      throw await deserializeAws_json1_1ConcurrentReferenceUpdateExceptionResponse(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context);
    case "FileContentSizeLimitExceededException":
    case "com.amazonaws.codecommit#FileContentSizeLimitExceededException":
      throw await deserializeAws_json1_1FileContentSizeLimitExceededExceptionResponse(parsedOutput, context);
    case "FileModeRequiredException":
    case "com.amazonaws.codecommit#FileModeRequiredException":
      throw await deserializeAws_json1_1FileModeRequiredExceptionResponse(parsedOutput, context);
    case "FolderContentSizeLimitExceededException":
    case "com.amazonaws.codecommit#FolderContentSizeLimitExceededException":
      throw await deserializeAws_json1_1FolderContentSizeLimitExceededExceptionResponse(parsedOutput, context);
    case "InvalidBranchNameException":
    case "com.amazonaws.codecommit#InvalidBranchNameException":
      throw await deserializeAws_json1_1InvalidBranchNameExceptionResponse(parsedOutput, context);
    case "InvalidCommitException":
    case "com.amazonaws.codecommit#InvalidCommitException":
      throw await deserializeAws_json1_1InvalidCommitExceptionResponse(parsedOutput, context);
    case "InvalidConflictDetailLevelException":
    case "com.amazonaws.codecommit#InvalidConflictDetailLevelException":
      throw await deserializeAws_json1_1InvalidConflictDetailLevelExceptionResponse(parsedOutput, context);
    case "InvalidConflictResolutionException":
    case "com.amazonaws.codecommit#InvalidConflictResolutionException":
      throw await deserializeAws_json1_1InvalidConflictResolutionExceptionResponse(parsedOutput, context);
    case "InvalidConflictResolutionStrategyException":
    case "com.amazonaws.codecommit#InvalidConflictResolutionStrategyException":
      throw await deserializeAws_json1_1InvalidConflictResolutionStrategyExceptionResponse(parsedOutput, context);
    case "InvalidEmailException":
    case "com.amazonaws.codecommit#InvalidEmailException":
      throw await deserializeAws_json1_1InvalidEmailExceptionResponse(parsedOutput, context);
    case "InvalidFileModeException":
    case "com.amazonaws.codecommit#InvalidFileModeException":
      throw await deserializeAws_json1_1InvalidFileModeExceptionResponse(parsedOutput, context);
    case "InvalidPathException":
    case "com.amazonaws.codecommit#InvalidPathException":
      throw await deserializeAws_json1_1InvalidPathExceptionResponse(parsedOutput, context);
    case "InvalidReplacementContentException":
    case "com.amazonaws.codecommit#InvalidReplacementContentException":
      throw await deserializeAws_json1_1InvalidReplacementContentExceptionResponse(parsedOutput, context);
    case "InvalidReplacementTypeException":
    case "com.amazonaws.codecommit#InvalidReplacementTypeException":
      throw await deserializeAws_json1_1InvalidReplacementTypeExceptionResponse(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context);
    case "InvalidTargetBranchException":
    case "com.amazonaws.codecommit#InvalidTargetBranchException":
      throw await deserializeAws_json1_1InvalidTargetBranchExceptionResponse(parsedOutput, context);
    case "ManualMergeRequiredException":
    case "com.amazonaws.codecommit#ManualMergeRequiredException":
      throw await deserializeAws_json1_1ManualMergeRequiredExceptionResponse(parsedOutput, context);
    case "MaximumConflictResolutionEntriesExceededException":
    case "com.amazonaws.codecommit#MaximumConflictResolutionEntriesExceededException":
      throw await deserializeAws_json1_1MaximumConflictResolutionEntriesExceededExceptionResponse(
        parsedOutput,
        context
      );
    case "MaximumFileContentToLoadExceededException":
    case "com.amazonaws.codecommit#MaximumFileContentToLoadExceededException":
      throw await deserializeAws_json1_1MaximumFileContentToLoadExceededExceptionResponse(parsedOutput, context);
    case "MaximumItemsToCompareExceededException":
    case "com.amazonaws.codecommit#MaximumItemsToCompareExceededException":
      throw await deserializeAws_json1_1MaximumItemsToCompareExceededExceptionResponse(parsedOutput, context);
    case "MultipleConflictResolutionEntriesException":
    case "com.amazonaws.codecommit#MultipleConflictResolutionEntriesException":
      throw await deserializeAws_json1_1MultipleConflictResolutionEntriesExceptionResponse(parsedOutput, context);
    case "NameLengthExceededException":
    case "com.amazonaws.codecommit#NameLengthExceededException":
      throw await deserializeAws_json1_1NameLengthExceededExceptionResponse(parsedOutput, context);
    case "PathRequiredException":
    case "com.amazonaws.codecommit#PathRequiredException":
      throw await deserializeAws_json1_1PathRequiredExceptionResponse(parsedOutput, context);
    case "ReplacementContentRequiredException":
    case "com.amazonaws.codecommit#ReplacementContentRequiredException":
      throw await deserializeAws_json1_1ReplacementContentRequiredExceptionResponse(parsedOutput, context);
    case "ReplacementTypeRequiredException":
    case "com.amazonaws.codecommit#ReplacementTypeRequiredException":
      throw await deserializeAws_json1_1ReplacementTypeRequiredExceptionResponse(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context);
    case "TipsDivergenceExceededException":
    case "com.amazonaws.codecommit#TipsDivergenceExceededException":
      throw await deserializeAws_json1_1TipsDivergenceExceededExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1MergeBranchesByThreeWayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MergeBranchesByThreeWayCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1MergeBranchesByThreeWayCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1MergeBranchesByThreeWayOutput(data, context);
  const response: MergeBranchesByThreeWayCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1MergeBranchesByThreeWayCommandError = async (
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
      throw await deserializeAws_json1_1BranchDoesNotExistExceptionResponse(parsedOutput, context);
    case "BranchNameIsTagNameException":
    case "com.amazonaws.codecommit#BranchNameIsTagNameException":
      throw await deserializeAws_json1_1BranchNameIsTagNameExceptionResponse(parsedOutput, context);
    case "BranchNameRequiredException":
    case "com.amazonaws.codecommit#BranchNameRequiredException":
      throw await deserializeAws_json1_1BranchNameRequiredExceptionResponse(parsedOutput, context);
    case "CommitDoesNotExistException":
    case "com.amazonaws.codecommit#CommitDoesNotExistException":
      throw await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context);
    case "CommitMessageLengthExceededException":
    case "com.amazonaws.codecommit#CommitMessageLengthExceededException":
      throw await deserializeAws_json1_1CommitMessageLengthExceededExceptionResponse(parsedOutput, context);
    case "CommitRequiredException":
    case "com.amazonaws.codecommit#CommitRequiredException":
      throw await deserializeAws_json1_1CommitRequiredExceptionResponse(parsedOutput, context);
    case "ConcurrentReferenceUpdateException":
    case "com.amazonaws.codecommit#ConcurrentReferenceUpdateException":
      throw await deserializeAws_json1_1ConcurrentReferenceUpdateExceptionResponse(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context);
    case "FileContentSizeLimitExceededException":
    case "com.amazonaws.codecommit#FileContentSizeLimitExceededException":
      throw await deserializeAws_json1_1FileContentSizeLimitExceededExceptionResponse(parsedOutput, context);
    case "FileModeRequiredException":
    case "com.amazonaws.codecommit#FileModeRequiredException":
      throw await deserializeAws_json1_1FileModeRequiredExceptionResponse(parsedOutput, context);
    case "FolderContentSizeLimitExceededException":
    case "com.amazonaws.codecommit#FolderContentSizeLimitExceededException":
      throw await deserializeAws_json1_1FolderContentSizeLimitExceededExceptionResponse(parsedOutput, context);
    case "InvalidBranchNameException":
    case "com.amazonaws.codecommit#InvalidBranchNameException":
      throw await deserializeAws_json1_1InvalidBranchNameExceptionResponse(parsedOutput, context);
    case "InvalidCommitException":
    case "com.amazonaws.codecommit#InvalidCommitException":
      throw await deserializeAws_json1_1InvalidCommitExceptionResponse(parsedOutput, context);
    case "InvalidConflictDetailLevelException":
    case "com.amazonaws.codecommit#InvalidConflictDetailLevelException":
      throw await deserializeAws_json1_1InvalidConflictDetailLevelExceptionResponse(parsedOutput, context);
    case "InvalidConflictResolutionException":
    case "com.amazonaws.codecommit#InvalidConflictResolutionException":
      throw await deserializeAws_json1_1InvalidConflictResolutionExceptionResponse(parsedOutput, context);
    case "InvalidConflictResolutionStrategyException":
    case "com.amazonaws.codecommit#InvalidConflictResolutionStrategyException":
      throw await deserializeAws_json1_1InvalidConflictResolutionStrategyExceptionResponse(parsedOutput, context);
    case "InvalidEmailException":
    case "com.amazonaws.codecommit#InvalidEmailException":
      throw await deserializeAws_json1_1InvalidEmailExceptionResponse(parsedOutput, context);
    case "InvalidFileModeException":
    case "com.amazonaws.codecommit#InvalidFileModeException":
      throw await deserializeAws_json1_1InvalidFileModeExceptionResponse(parsedOutput, context);
    case "InvalidPathException":
    case "com.amazonaws.codecommit#InvalidPathException":
      throw await deserializeAws_json1_1InvalidPathExceptionResponse(parsedOutput, context);
    case "InvalidReplacementContentException":
    case "com.amazonaws.codecommit#InvalidReplacementContentException":
      throw await deserializeAws_json1_1InvalidReplacementContentExceptionResponse(parsedOutput, context);
    case "InvalidReplacementTypeException":
    case "com.amazonaws.codecommit#InvalidReplacementTypeException":
      throw await deserializeAws_json1_1InvalidReplacementTypeExceptionResponse(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context);
    case "InvalidTargetBranchException":
    case "com.amazonaws.codecommit#InvalidTargetBranchException":
      throw await deserializeAws_json1_1InvalidTargetBranchExceptionResponse(parsedOutput, context);
    case "ManualMergeRequiredException":
    case "com.amazonaws.codecommit#ManualMergeRequiredException":
      throw await deserializeAws_json1_1ManualMergeRequiredExceptionResponse(parsedOutput, context);
    case "MaximumConflictResolutionEntriesExceededException":
    case "com.amazonaws.codecommit#MaximumConflictResolutionEntriesExceededException":
      throw await deserializeAws_json1_1MaximumConflictResolutionEntriesExceededExceptionResponse(
        parsedOutput,
        context
      );
    case "MaximumFileContentToLoadExceededException":
    case "com.amazonaws.codecommit#MaximumFileContentToLoadExceededException":
      throw await deserializeAws_json1_1MaximumFileContentToLoadExceededExceptionResponse(parsedOutput, context);
    case "MaximumItemsToCompareExceededException":
    case "com.amazonaws.codecommit#MaximumItemsToCompareExceededException":
      throw await deserializeAws_json1_1MaximumItemsToCompareExceededExceptionResponse(parsedOutput, context);
    case "MultipleConflictResolutionEntriesException":
    case "com.amazonaws.codecommit#MultipleConflictResolutionEntriesException":
      throw await deserializeAws_json1_1MultipleConflictResolutionEntriesExceptionResponse(parsedOutput, context);
    case "NameLengthExceededException":
    case "com.amazonaws.codecommit#NameLengthExceededException":
      throw await deserializeAws_json1_1NameLengthExceededExceptionResponse(parsedOutput, context);
    case "PathRequiredException":
    case "com.amazonaws.codecommit#PathRequiredException":
      throw await deserializeAws_json1_1PathRequiredExceptionResponse(parsedOutput, context);
    case "ReplacementContentRequiredException":
    case "com.amazonaws.codecommit#ReplacementContentRequiredException":
      throw await deserializeAws_json1_1ReplacementContentRequiredExceptionResponse(parsedOutput, context);
    case "ReplacementTypeRequiredException":
    case "com.amazonaws.codecommit#ReplacementTypeRequiredException":
      throw await deserializeAws_json1_1ReplacementTypeRequiredExceptionResponse(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context);
    case "TipsDivergenceExceededException":
    case "com.amazonaws.codecommit#TipsDivergenceExceededException":
      throw await deserializeAws_json1_1TipsDivergenceExceededExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1MergePullRequestByFastForwardCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MergePullRequestByFastForwardCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1MergePullRequestByFastForwardCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1MergePullRequestByFastForwardOutput(data, context);
  const response: MergePullRequestByFastForwardCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1MergePullRequestByFastForwardCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentReferenceUpdateExceptionResponse(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context);
    case "InvalidCommitIdException":
    case "com.amazonaws.codecommit#InvalidCommitIdException":
      throw await deserializeAws_json1_1InvalidCommitIdExceptionResponse(parsedOutput, context);
    case "InvalidPullRequestIdException":
    case "com.amazonaws.codecommit#InvalidPullRequestIdException":
      throw await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context);
    case "ManualMergeRequiredException":
    case "com.amazonaws.codecommit#ManualMergeRequiredException":
      throw await deserializeAws_json1_1ManualMergeRequiredExceptionResponse(parsedOutput, context);
    case "PullRequestAlreadyClosedException":
    case "com.amazonaws.codecommit#PullRequestAlreadyClosedException":
      throw await deserializeAws_json1_1PullRequestAlreadyClosedExceptionResponse(parsedOutput, context);
    case "PullRequestApprovalRulesNotSatisfiedException":
    case "com.amazonaws.codecommit#PullRequestApprovalRulesNotSatisfiedException":
      throw await deserializeAws_json1_1PullRequestApprovalRulesNotSatisfiedExceptionResponse(parsedOutput, context);
    case "PullRequestDoesNotExistException":
    case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
      throw await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context);
    case "PullRequestIdRequiredException":
    case "com.amazonaws.codecommit#PullRequestIdRequiredException":
      throw await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context);
    case "ReferenceDoesNotExistException":
    case "com.amazonaws.codecommit#ReferenceDoesNotExistException":
      throw await deserializeAws_json1_1ReferenceDoesNotExistExceptionResponse(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context);
    case "RepositoryNotAssociatedWithPullRequestException":
    case "com.amazonaws.codecommit#RepositoryNotAssociatedWithPullRequestException":
      throw await deserializeAws_json1_1RepositoryNotAssociatedWithPullRequestExceptionResponse(parsedOutput, context);
    case "TipOfSourceReferenceIsDifferentException":
    case "com.amazonaws.codecommit#TipOfSourceReferenceIsDifferentException":
      throw await deserializeAws_json1_1TipOfSourceReferenceIsDifferentExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1MergePullRequestBySquashCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MergePullRequestBySquashCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1MergePullRequestBySquashCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1MergePullRequestBySquashOutput(data, context);
  const response: MergePullRequestBySquashCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1MergePullRequestBySquashCommandError = async (
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
      throw await deserializeAws_json1_1CommitMessageLengthExceededExceptionResponse(parsedOutput, context);
    case "ConcurrentReferenceUpdateException":
    case "com.amazonaws.codecommit#ConcurrentReferenceUpdateException":
      throw await deserializeAws_json1_1ConcurrentReferenceUpdateExceptionResponse(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context);
    case "FileContentSizeLimitExceededException":
    case "com.amazonaws.codecommit#FileContentSizeLimitExceededException":
      throw await deserializeAws_json1_1FileContentSizeLimitExceededExceptionResponse(parsedOutput, context);
    case "FolderContentSizeLimitExceededException":
    case "com.amazonaws.codecommit#FolderContentSizeLimitExceededException":
      throw await deserializeAws_json1_1FolderContentSizeLimitExceededExceptionResponse(parsedOutput, context);
    case "InvalidCommitIdException":
    case "com.amazonaws.codecommit#InvalidCommitIdException":
      throw await deserializeAws_json1_1InvalidCommitIdExceptionResponse(parsedOutput, context);
    case "InvalidConflictDetailLevelException":
    case "com.amazonaws.codecommit#InvalidConflictDetailLevelException":
      throw await deserializeAws_json1_1InvalidConflictDetailLevelExceptionResponse(parsedOutput, context);
    case "InvalidConflictResolutionException":
    case "com.amazonaws.codecommit#InvalidConflictResolutionException":
      throw await deserializeAws_json1_1InvalidConflictResolutionExceptionResponse(parsedOutput, context);
    case "InvalidConflictResolutionStrategyException":
    case "com.amazonaws.codecommit#InvalidConflictResolutionStrategyException":
      throw await deserializeAws_json1_1InvalidConflictResolutionStrategyExceptionResponse(parsedOutput, context);
    case "InvalidEmailException":
    case "com.amazonaws.codecommit#InvalidEmailException":
      throw await deserializeAws_json1_1InvalidEmailExceptionResponse(parsedOutput, context);
    case "InvalidFileModeException":
    case "com.amazonaws.codecommit#InvalidFileModeException":
      throw await deserializeAws_json1_1InvalidFileModeExceptionResponse(parsedOutput, context);
    case "InvalidPathException":
    case "com.amazonaws.codecommit#InvalidPathException":
      throw await deserializeAws_json1_1InvalidPathExceptionResponse(parsedOutput, context);
    case "InvalidPullRequestIdException":
    case "com.amazonaws.codecommit#InvalidPullRequestIdException":
      throw await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context);
    case "InvalidReplacementContentException":
    case "com.amazonaws.codecommit#InvalidReplacementContentException":
      throw await deserializeAws_json1_1InvalidReplacementContentExceptionResponse(parsedOutput, context);
    case "InvalidReplacementTypeException":
    case "com.amazonaws.codecommit#InvalidReplacementTypeException":
      throw await deserializeAws_json1_1InvalidReplacementTypeExceptionResponse(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context);
    case "ManualMergeRequiredException":
    case "com.amazonaws.codecommit#ManualMergeRequiredException":
      throw await deserializeAws_json1_1ManualMergeRequiredExceptionResponse(parsedOutput, context);
    case "MaximumConflictResolutionEntriesExceededException":
    case "com.amazonaws.codecommit#MaximumConflictResolutionEntriesExceededException":
      throw await deserializeAws_json1_1MaximumConflictResolutionEntriesExceededExceptionResponse(
        parsedOutput,
        context
      );
    case "MaximumFileContentToLoadExceededException":
    case "com.amazonaws.codecommit#MaximumFileContentToLoadExceededException":
      throw await deserializeAws_json1_1MaximumFileContentToLoadExceededExceptionResponse(parsedOutput, context);
    case "MaximumItemsToCompareExceededException":
    case "com.amazonaws.codecommit#MaximumItemsToCompareExceededException":
      throw await deserializeAws_json1_1MaximumItemsToCompareExceededExceptionResponse(parsedOutput, context);
    case "MultipleConflictResolutionEntriesException":
    case "com.amazonaws.codecommit#MultipleConflictResolutionEntriesException":
      throw await deserializeAws_json1_1MultipleConflictResolutionEntriesExceptionResponse(parsedOutput, context);
    case "NameLengthExceededException":
    case "com.amazonaws.codecommit#NameLengthExceededException":
      throw await deserializeAws_json1_1NameLengthExceededExceptionResponse(parsedOutput, context);
    case "PathRequiredException":
    case "com.amazonaws.codecommit#PathRequiredException":
      throw await deserializeAws_json1_1PathRequiredExceptionResponse(parsedOutput, context);
    case "PullRequestAlreadyClosedException":
    case "com.amazonaws.codecommit#PullRequestAlreadyClosedException":
      throw await deserializeAws_json1_1PullRequestAlreadyClosedExceptionResponse(parsedOutput, context);
    case "PullRequestApprovalRulesNotSatisfiedException":
    case "com.amazonaws.codecommit#PullRequestApprovalRulesNotSatisfiedException":
      throw await deserializeAws_json1_1PullRequestApprovalRulesNotSatisfiedExceptionResponse(parsedOutput, context);
    case "PullRequestDoesNotExistException":
    case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
      throw await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context);
    case "PullRequestIdRequiredException":
    case "com.amazonaws.codecommit#PullRequestIdRequiredException":
      throw await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context);
    case "ReplacementContentRequiredException":
    case "com.amazonaws.codecommit#ReplacementContentRequiredException":
      throw await deserializeAws_json1_1ReplacementContentRequiredExceptionResponse(parsedOutput, context);
    case "ReplacementTypeRequiredException":
    case "com.amazonaws.codecommit#ReplacementTypeRequiredException":
      throw await deserializeAws_json1_1ReplacementTypeRequiredExceptionResponse(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context);
    case "RepositoryNotAssociatedWithPullRequestException":
    case "com.amazonaws.codecommit#RepositoryNotAssociatedWithPullRequestException":
      throw await deserializeAws_json1_1RepositoryNotAssociatedWithPullRequestExceptionResponse(parsedOutput, context);
    case "TipOfSourceReferenceIsDifferentException":
    case "com.amazonaws.codecommit#TipOfSourceReferenceIsDifferentException":
      throw await deserializeAws_json1_1TipOfSourceReferenceIsDifferentExceptionResponse(parsedOutput, context);
    case "TipsDivergenceExceededException":
    case "com.amazonaws.codecommit#TipsDivergenceExceededException":
      throw await deserializeAws_json1_1TipsDivergenceExceededExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1MergePullRequestByThreeWayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MergePullRequestByThreeWayCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1MergePullRequestByThreeWayCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1MergePullRequestByThreeWayOutput(data, context);
  const response: MergePullRequestByThreeWayCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1MergePullRequestByThreeWayCommandError = async (
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
      throw await deserializeAws_json1_1CommitMessageLengthExceededExceptionResponse(parsedOutput, context);
    case "ConcurrentReferenceUpdateException":
    case "com.amazonaws.codecommit#ConcurrentReferenceUpdateException":
      throw await deserializeAws_json1_1ConcurrentReferenceUpdateExceptionResponse(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context);
    case "FileContentSizeLimitExceededException":
    case "com.amazonaws.codecommit#FileContentSizeLimitExceededException":
      throw await deserializeAws_json1_1FileContentSizeLimitExceededExceptionResponse(parsedOutput, context);
    case "FolderContentSizeLimitExceededException":
    case "com.amazonaws.codecommit#FolderContentSizeLimitExceededException":
      throw await deserializeAws_json1_1FolderContentSizeLimitExceededExceptionResponse(parsedOutput, context);
    case "InvalidCommitIdException":
    case "com.amazonaws.codecommit#InvalidCommitIdException":
      throw await deserializeAws_json1_1InvalidCommitIdExceptionResponse(parsedOutput, context);
    case "InvalidConflictDetailLevelException":
    case "com.amazonaws.codecommit#InvalidConflictDetailLevelException":
      throw await deserializeAws_json1_1InvalidConflictDetailLevelExceptionResponse(parsedOutput, context);
    case "InvalidConflictResolutionException":
    case "com.amazonaws.codecommit#InvalidConflictResolutionException":
      throw await deserializeAws_json1_1InvalidConflictResolutionExceptionResponse(parsedOutput, context);
    case "InvalidConflictResolutionStrategyException":
    case "com.amazonaws.codecommit#InvalidConflictResolutionStrategyException":
      throw await deserializeAws_json1_1InvalidConflictResolutionStrategyExceptionResponse(parsedOutput, context);
    case "InvalidEmailException":
    case "com.amazonaws.codecommit#InvalidEmailException":
      throw await deserializeAws_json1_1InvalidEmailExceptionResponse(parsedOutput, context);
    case "InvalidFileModeException":
    case "com.amazonaws.codecommit#InvalidFileModeException":
      throw await deserializeAws_json1_1InvalidFileModeExceptionResponse(parsedOutput, context);
    case "InvalidPathException":
    case "com.amazonaws.codecommit#InvalidPathException":
      throw await deserializeAws_json1_1InvalidPathExceptionResponse(parsedOutput, context);
    case "InvalidPullRequestIdException":
    case "com.amazonaws.codecommit#InvalidPullRequestIdException":
      throw await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context);
    case "InvalidReplacementContentException":
    case "com.amazonaws.codecommit#InvalidReplacementContentException":
      throw await deserializeAws_json1_1InvalidReplacementContentExceptionResponse(parsedOutput, context);
    case "InvalidReplacementTypeException":
    case "com.amazonaws.codecommit#InvalidReplacementTypeException":
      throw await deserializeAws_json1_1InvalidReplacementTypeExceptionResponse(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context);
    case "ManualMergeRequiredException":
    case "com.amazonaws.codecommit#ManualMergeRequiredException":
      throw await deserializeAws_json1_1ManualMergeRequiredExceptionResponse(parsedOutput, context);
    case "MaximumConflictResolutionEntriesExceededException":
    case "com.amazonaws.codecommit#MaximumConflictResolutionEntriesExceededException":
      throw await deserializeAws_json1_1MaximumConflictResolutionEntriesExceededExceptionResponse(
        parsedOutput,
        context
      );
    case "MaximumFileContentToLoadExceededException":
    case "com.amazonaws.codecommit#MaximumFileContentToLoadExceededException":
      throw await deserializeAws_json1_1MaximumFileContentToLoadExceededExceptionResponse(parsedOutput, context);
    case "MaximumItemsToCompareExceededException":
    case "com.amazonaws.codecommit#MaximumItemsToCompareExceededException":
      throw await deserializeAws_json1_1MaximumItemsToCompareExceededExceptionResponse(parsedOutput, context);
    case "MultipleConflictResolutionEntriesException":
    case "com.amazonaws.codecommit#MultipleConflictResolutionEntriesException":
      throw await deserializeAws_json1_1MultipleConflictResolutionEntriesExceptionResponse(parsedOutput, context);
    case "NameLengthExceededException":
    case "com.amazonaws.codecommit#NameLengthExceededException":
      throw await deserializeAws_json1_1NameLengthExceededExceptionResponse(parsedOutput, context);
    case "PathRequiredException":
    case "com.amazonaws.codecommit#PathRequiredException":
      throw await deserializeAws_json1_1PathRequiredExceptionResponse(parsedOutput, context);
    case "PullRequestAlreadyClosedException":
    case "com.amazonaws.codecommit#PullRequestAlreadyClosedException":
      throw await deserializeAws_json1_1PullRequestAlreadyClosedExceptionResponse(parsedOutput, context);
    case "PullRequestApprovalRulesNotSatisfiedException":
    case "com.amazonaws.codecommit#PullRequestApprovalRulesNotSatisfiedException":
      throw await deserializeAws_json1_1PullRequestApprovalRulesNotSatisfiedExceptionResponse(parsedOutput, context);
    case "PullRequestDoesNotExistException":
    case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
      throw await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context);
    case "PullRequestIdRequiredException":
    case "com.amazonaws.codecommit#PullRequestIdRequiredException":
      throw await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context);
    case "ReplacementContentRequiredException":
    case "com.amazonaws.codecommit#ReplacementContentRequiredException":
      throw await deserializeAws_json1_1ReplacementContentRequiredExceptionResponse(parsedOutput, context);
    case "ReplacementTypeRequiredException":
    case "com.amazonaws.codecommit#ReplacementTypeRequiredException":
      throw await deserializeAws_json1_1ReplacementTypeRequiredExceptionResponse(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context);
    case "RepositoryNotAssociatedWithPullRequestException":
    case "com.amazonaws.codecommit#RepositoryNotAssociatedWithPullRequestException":
      throw await deserializeAws_json1_1RepositoryNotAssociatedWithPullRequestExceptionResponse(parsedOutput, context);
    case "TipOfSourceReferenceIsDifferentException":
    case "com.amazonaws.codecommit#TipOfSourceReferenceIsDifferentException":
      throw await deserializeAws_json1_1TipOfSourceReferenceIsDifferentExceptionResponse(parsedOutput, context);
    case "TipsDivergenceExceededException":
    case "com.amazonaws.codecommit#TipsDivergenceExceededException":
      throw await deserializeAws_json1_1TipsDivergenceExceededExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1OverridePullRequestApprovalRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OverridePullRequestApprovalRulesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1OverridePullRequestApprovalRulesCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: OverridePullRequestApprovalRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1OverridePullRequestApprovalRulesCommandError = async (
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
      throw await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context);
    case "InvalidOverrideStatusException":
    case "com.amazonaws.codecommit#InvalidOverrideStatusException":
      throw await deserializeAws_json1_1InvalidOverrideStatusExceptionResponse(parsedOutput, context);
    case "InvalidPullRequestIdException":
    case "com.amazonaws.codecommit#InvalidPullRequestIdException":
      throw await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context);
    case "InvalidRevisionIdException":
    case "com.amazonaws.codecommit#InvalidRevisionIdException":
      throw await deserializeAws_json1_1InvalidRevisionIdExceptionResponse(parsedOutput, context);
    case "OverrideAlreadySetException":
    case "com.amazonaws.codecommit#OverrideAlreadySetException":
      throw await deserializeAws_json1_1OverrideAlreadySetExceptionResponse(parsedOutput, context);
    case "OverrideStatusRequiredException":
    case "com.amazonaws.codecommit#OverrideStatusRequiredException":
      throw await deserializeAws_json1_1OverrideStatusRequiredExceptionResponse(parsedOutput, context);
    case "PullRequestAlreadyClosedException":
    case "com.amazonaws.codecommit#PullRequestAlreadyClosedException":
      throw await deserializeAws_json1_1PullRequestAlreadyClosedExceptionResponse(parsedOutput, context);
    case "PullRequestDoesNotExistException":
    case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
      throw await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context);
    case "PullRequestIdRequiredException":
    case "com.amazonaws.codecommit#PullRequestIdRequiredException":
      throw await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context);
    case "RevisionIdRequiredException":
    case "com.amazonaws.codecommit#RevisionIdRequiredException":
      throw await deserializeAws_json1_1RevisionIdRequiredExceptionResponse(parsedOutput, context);
    case "RevisionNotCurrentException":
    case "com.amazonaws.codecommit#RevisionNotCurrentException":
      throw await deserializeAws_json1_1RevisionNotCurrentExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PostCommentForComparedCommitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PostCommentForComparedCommitCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PostCommentForComparedCommitCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PostCommentForComparedCommitOutput(data, context);
  const response: PostCommentForComparedCommitCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PostCommentForComparedCommitCommandError = async (
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
      throw await deserializeAws_json1_1BeforeCommitIdAndAfterCommitIdAreSameExceptionResponse(parsedOutput, context);
    case "ClientRequestTokenRequiredException":
    case "com.amazonaws.codecommit#ClientRequestTokenRequiredException":
      throw await deserializeAws_json1_1ClientRequestTokenRequiredExceptionResponse(parsedOutput, context);
    case "CommentContentRequiredException":
    case "com.amazonaws.codecommit#CommentContentRequiredException":
      throw await deserializeAws_json1_1CommentContentRequiredExceptionResponse(parsedOutput, context);
    case "CommentContentSizeLimitExceededException":
    case "com.amazonaws.codecommit#CommentContentSizeLimitExceededException":
      throw await deserializeAws_json1_1CommentContentSizeLimitExceededExceptionResponse(parsedOutput, context);
    case "CommitDoesNotExistException":
    case "com.amazonaws.codecommit#CommitDoesNotExistException":
      throw await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context);
    case "CommitIdRequiredException":
    case "com.amazonaws.codecommit#CommitIdRequiredException":
      throw await deserializeAws_json1_1CommitIdRequiredExceptionResponse(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context);
    case "IdempotencyParameterMismatchException":
    case "com.amazonaws.codecommit#IdempotencyParameterMismatchException":
      throw await deserializeAws_json1_1IdempotencyParameterMismatchExceptionResponse(parsedOutput, context);
    case "InvalidClientRequestTokenException":
    case "com.amazonaws.codecommit#InvalidClientRequestTokenException":
      throw await deserializeAws_json1_1InvalidClientRequestTokenExceptionResponse(parsedOutput, context);
    case "InvalidCommitIdException":
    case "com.amazonaws.codecommit#InvalidCommitIdException":
      throw await deserializeAws_json1_1InvalidCommitIdExceptionResponse(parsedOutput, context);
    case "InvalidFileLocationException":
    case "com.amazonaws.codecommit#InvalidFileLocationException":
      throw await deserializeAws_json1_1InvalidFileLocationExceptionResponse(parsedOutput, context);
    case "InvalidFilePositionException":
    case "com.amazonaws.codecommit#InvalidFilePositionException":
      throw await deserializeAws_json1_1InvalidFilePositionExceptionResponse(parsedOutput, context);
    case "InvalidPathException":
    case "com.amazonaws.codecommit#InvalidPathException":
      throw await deserializeAws_json1_1InvalidPathExceptionResponse(parsedOutput, context);
    case "InvalidRelativeFileVersionEnumException":
    case "com.amazonaws.codecommit#InvalidRelativeFileVersionEnumException":
      throw await deserializeAws_json1_1InvalidRelativeFileVersionEnumExceptionResponse(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context);
    case "PathDoesNotExistException":
    case "com.amazonaws.codecommit#PathDoesNotExistException":
      throw await deserializeAws_json1_1PathDoesNotExistExceptionResponse(parsedOutput, context);
    case "PathRequiredException":
    case "com.amazonaws.codecommit#PathRequiredException":
      throw await deserializeAws_json1_1PathRequiredExceptionResponse(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PostCommentForPullRequestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PostCommentForPullRequestCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PostCommentForPullRequestCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PostCommentForPullRequestOutput(data, context);
  const response: PostCommentForPullRequestCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PostCommentForPullRequestCommandError = async (
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
      throw await deserializeAws_json1_1BeforeCommitIdAndAfterCommitIdAreSameExceptionResponse(parsedOutput, context);
    case "ClientRequestTokenRequiredException":
    case "com.amazonaws.codecommit#ClientRequestTokenRequiredException":
      throw await deserializeAws_json1_1ClientRequestTokenRequiredExceptionResponse(parsedOutput, context);
    case "CommentContentRequiredException":
    case "com.amazonaws.codecommit#CommentContentRequiredException":
      throw await deserializeAws_json1_1CommentContentRequiredExceptionResponse(parsedOutput, context);
    case "CommentContentSizeLimitExceededException":
    case "com.amazonaws.codecommit#CommentContentSizeLimitExceededException":
      throw await deserializeAws_json1_1CommentContentSizeLimitExceededExceptionResponse(parsedOutput, context);
    case "CommitDoesNotExistException":
    case "com.amazonaws.codecommit#CommitDoesNotExistException":
      throw await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context);
    case "CommitIdRequiredException":
    case "com.amazonaws.codecommit#CommitIdRequiredException":
      throw await deserializeAws_json1_1CommitIdRequiredExceptionResponse(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context);
    case "IdempotencyParameterMismatchException":
    case "com.amazonaws.codecommit#IdempotencyParameterMismatchException":
      throw await deserializeAws_json1_1IdempotencyParameterMismatchExceptionResponse(parsedOutput, context);
    case "InvalidClientRequestTokenException":
    case "com.amazonaws.codecommit#InvalidClientRequestTokenException":
      throw await deserializeAws_json1_1InvalidClientRequestTokenExceptionResponse(parsedOutput, context);
    case "InvalidCommitIdException":
    case "com.amazonaws.codecommit#InvalidCommitIdException":
      throw await deserializeAws_json1_1InvalidCommitIdExceptionResponse(parsedOutput, context);
    case "InvalidFileLocationException":
    case "com.amazonaws.codecommit#InvalidFileLocationException":
      throw await deserializeAws_json1_1InvalidFileLocationExceptionResponse(parsedOutput, context);
    case "InvalidFilePositionException":
    case "com.amazonaws.codecommit#InvalidFilePositionException":
      throw await deserializeAws_json1_1InvalidFilePositionExceptionResponse(parsedOutput, context);
    case "InvalidPathException":
    case "com.amazonaws.codecommit#InvalidPathException":
      throw await deserializeAws_json1_1InvalidPathExceptionResponse(parsedOutput, context);
    case "InvalidPullRequestIdException":
    case "com.amazonaws.codecommit#InvalidPullRequestIdException":
      throw await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context);
    case "InvalidRelativeFileVersionEnumException":
    case "com.amazonaws.codecommit#InvalidRelativeFileVersionEnumException":
      throw await deserializeAws_json1_1InvalidRelativeFileVersionEnumExceptionResponse(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context);
    case "PathDoesNotExistException":
    case "com.amazonaws.codecommit#PathDoesNotExistException":
      throw await deserializeAws_json1_1PathDoesNotExistExceptionResponse(parsedOutput, context);
    case "PathRequiredException":
    case "com.amazonaws.codecommit#PathRequiredException":
      throw await deserializeAws_json1_1PathRequiredExceptionResponse(parsedOutput, context);
    case "PullRequestDoesNotExistException":
    case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
      throw await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context);
    case "PullRequestIdRequiredException":
    case "com.amazonaws.codecommit#PullRequestIdRequiredException":
      throw await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context);
    case "RepositoryNotAssociatedWithPullRequestException":
    case "com.amazonaws.codecommit#RepositoryNotAssociatedWithPullRequestException":
      throw await deserializeAws_json1_1RepositoryNotAssociatedWithPullRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PostCommentReplyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PostCommentReplyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PostCommentReplyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PostCommentReplyOutput(data, context);
  const response: PostCommentReplyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PostCommentReplyCommandError = async (
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
      throw await deserializeAws_json1_1ClientRequestTokenRequiredExceptionResponse(parsedOutput, context);
    case "CommentContentRequiredException":
    case "com.amazonaws.codecommit#CommentContentRequiredException":
      throw await deserializeAws_json1_1CommentContentRequiredExceptionResponse(parsedOutput, context);
    case "CommentContentSizeLimitExceededException":
    case "com.amazonaws.codecommit#CommentContentSizeLimitExceededException":
      throw await deserializeAws_json1_1CommentContentSizeLimitExceededExceptionResponse(parsedOutput, context);
    case "CommentDoesNotExistException":
    case "com.amazonaws.codecommit#CommentDoesNotExistException":
      throw await deserializeAws_json1_1CommentDoesNotExistExceptionResponse(parsedOutput, context);
    case "CommentIdRequiredException":
    case "com.amazonaws.codecommit#CommentIdRequiredException":
      throw await deserializeAws_json1_1CommentIdRequiredExceptionResponse(parsedOutput, context);
    case "IdempotencyParameterMismatchException":
    case "com.amazonaws.codecommit#IdempotencyParameterMismatchException":
      throw await deserializeAws_json1_1IdempotencyParameterMismatchExceptionResponse(parsedOutput, context);
    case "InvalidClientRequestTokenException":
    case "com.amazonaws.codecommit#InvalidClientRequestTokenException":
      throw await deserializeAws_json1_1InvalidClientRequestTokenExceptionResponse(parsedOutput, context);
    case "InvalidCommentIdException":
    case "com.amazonaws.codecommit#InvalidCommentIdException":
      throw await deserializeAws_json1_1InvalidCommentIdExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutCommentReactionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutCommentReactionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutCommentReactionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutCommentReactionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutCommentReactionCommandError = async (
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
      throw await deserializeAws_json1_1CommentDeletedExceptionResponse(parsedOutput, context);
    case "CommentDoesNotExistException":
    case "com.amazonaws.codecommit#CommentDoesNotExistException":
      throw await deserializeAws_json1_1CommentDoesNotExistExceptionResponse(parsedOutput, context);
    case "CommentIdRequiredException":
    case "com.amazonaws.codecommit#CommentIdRequiredException":
      throw await deserializeAws_json1_1CommentIdRequiredExceptionResponse(parsedOutput, context);
    case "InvalidCommentIdException":
    case "com.amazonaws.codecommit#InvalidCommentIdException":
      throw await deserializeAws_json1_1InvalidCommentIdExceptionResponse(parsedOutput, context);
    case "InvalidReactionValueException":
    case "com.amazonaws.codecommit#InvalidReactionValueException":
      throw await deserializeAws_json1_1InvalidReactionValueExceptionResponse(parsedOutput, context);
    case "ReactionLimitExceededException":
    case "com.amazonaws.codecommit#ReactionLimitExceededException":
      throw await deserializeAws_json1_1ReactionLimitExceededExceptionResponse(parsedOutput, context);
    case "ReactionValueRequiredException":
    case "com.amazonaws.codecommit#ReactionValueRequiredException":
      throw await deserializeAws_json1_1ReactionValueRequiredExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutFileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutFileCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutFileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutFileOutput(data, context);
  const response: PutFileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutFileCommandError = async (
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
      throw await deserializeAws_json1_1BranchDoesNotExistExceptionResponse(parsedOutput, context);
    case "BranchNameIsTagNameException":
    case "com.amazonaws.codecommit#BranchNameIsTagNameException":
      throw await deserializeAws_json1_1BranchNameIsTagNameExceptionResponse(parsedOutput, context);
    case "BranchNameRequiredException":
    case "com.amazonaws.codecommit#BranchNameRequiredException":
      throw await deserializeAws_json1_1BranchNameRequiredExceptionResponse(parsedOutput, context);
    case "CommitMessageLengthExceededException":
    case "com.amazonaws.codecommit#CommitMessageLengthExceededException":
      throw await deserializeAws_json1_1CommitMessageLengthExceededExceptionResponse(parsedOutput, context);
    case "DirectoryNameConflictsWithFileNameException":
    case "com.amazonaws.codecommit#DirectoryNameConflictsWithFileNameException":
      throw await deserializeAws_json1_1DirectoryNameConflictsWithFileNameExceptionResponse(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context);
    case "FileContentRequiredException":
    case "com.amazonaws.codecommit#FileContentRequiredException":
      throw await deserializeAws_json1_1FileContentRequiredExceptionResponse(parsedOutput, context);
    case "FileContentSizeLimitExceededException":
    case "com.amazonaws.codecommit#FileContentSizeLimitExceededException":
      throw await deserializeAws_json1_1FileContentSizeLimitExceededExceptionResponse(parsedOutput, context);
    case "FileNameConflictsWithDirectoryNameException":
    case "com.amazonaws.codecommit#FileNameConflictsWithDirectoryNameException":
      throw await deserializeAws_json1_1FileNameConflictsWithDirectoryNameExceptionResponse(parsedOutput, context);
    case "FilePathConflictsWithSubmodulePathException":
    case "com.amazonaws.codecommit#FilePathConflictsWithSubmodulePathException":
      throw await deserializeAws_json1_1FilePathConflictsWithSubmodulePathExceptionResponse(parsedOutput, context);
    case "FolderContentSizeLimitExceededException":
    case "com.amazonaws.codecommit#FolderContentSizeLimitExceededException":
      throw await deserializeAws_json1_1FolderContentSizeLimitExceededExceptionResponse(parsedOutput, context);
    case "InvalidBranchNameException":
    case "com.amazonaws.codecommit#InvalidBranchNameException":
      throw await deserializeAws_json1_1InvalidBranchNameExceptionResponse(parsedOutput, context);
    case "InvalidDeletionParameterException":
    case "com.amazonaws.codecommit#InvalidDeletionParameterException":
      throw await deserializeAws_json1_1InvalidDeletionParameterExceptionResponse(parsedOutput, context);
    case "InvalidEmailException":
    case "com.amazonaws.codecommit#InvalidEmailException":
      throw await deserializeAws_json1_1InvalidEmailExceptionResponse(parsedOutput, context);
    case "InvalidFileModeException":
    case "com.amazonaws.codecommit#InvalidFileModeException":
      throw await deserializeAws_json1_1InvalidFileModeExceptionResponse(parsedOutput, context);
    case "InvalidParentCommitIdException":
    case "com.amazonaws.codecommit#InvalidParentCommitIdException":
      throw await deserializeAws_json1_1InvalidParentCommitIdExceptionResponse(parsedOutput, context);
    case "InvalidPathException":
    case "com.amazonaws.codecommit#InvalidPathException":
      throw await deserializeAws_json1_1InvalidPathExceptionResponse(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context);
    case "NameLengthExceededException":
    case "com.amazonaws.codecommit#NameLengthExceededException":
      throw await deserializeAws_json1_1NameLengthExceededExceptionResponse(parsedOutput, context);
    case "ParentCommitDoesNotExistException":
    case "com.amazonaws.codecommit#ParentCommitDoesNotExistException":
      throw await deserializeAws_json1_1ParentCommitDoesNotExistExceptionResponse(parsedOutput, context);
    case "ParentCommitIdOutdatedException":
    case "com.amazonaws.codecommit#ParentCommitIdOutdatedException":
      throw await deserializeAws_json1_1ParentCommitIdOutdatedExceptionResponse(parsedOutput, context);
    case "ParentCommitIdRequiredException":
    case "com.amazonaws.codecommit#ParentCommitIdRequiredException":
      throw await deserializeAws_json1_1ParentCommitIdRequiredExceptionResponse(parsedOutput, context);
    case "PathRequiredException":
    case "com.amazonaws.codecommit#PathRequiredException":
      throw await deserializeAws_json1_1PathRequiredExceptionResponse(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context);
    case "SameFileContentException":
    case "com.amazonaws.codecommit#SameFileContentException":
      throw await deserializeAws_json1_1SameFileContentExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutRepositoryTriggersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRepositoryTriggersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutRepositoryTriggersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutRepositoryTriggersOutput(data, context);
  const response: PutRepositoryTriggersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutRepositoryTriggersCommandError = async (
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
      throw await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context);
    case "InvalidRepositoryTriggerBranchNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryTriggerBranchNameException":
      throw await deserializeAws_json1_1InvalidRepositoryTriggerBranchNameExceptionResponse(parsedOutput, context);
    case "InvalidRepositoryTriggerCustomDataException":
    case "com.amazonaws.codecommit#InvalidRepositoryTriggerCustomDataException":
      throw await deserializeAws_json1_1InvalidRepositoryTriggerCustomDataExceptionResponse(parsedOutput, context);
    case "InvalidRepositoryTriggerDestinationArnException":
    case "com.amazonaws.codecommit#InvalidRepositoryTriggerDestinationArnException":
      throw await deserializeAws_json1_1InvalidRepositoryTriggerDestinationArnExceptionResponse(parsedOutput, context);
    case "InvalidRepositoryTriggerEventsException":
    case "com.amazonaws.codecommit#InvalidRepositoryTriggerEventsException":
      throw await deserializeAws_json1_1InvalidRepositoryTriggerEventsExceptionResponse(parsedOutput, context);
    case "InvalidRepositoryTriggerNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryTriggerNameException":
      throw await deserializeAws_json1_1InvalidRepositoryTriggerNameExceptionResponse(parsedOutput, context);
    case "InvalidRepositoryTriggerRegionException":
    case "com.amazonaws.codecommit#InvalidRepositoryTriggerRegionException":
      throw await deserializeAws_json1_1InvalidRepositoryTriggerRegionExceptionResponse(parsedOutput, context);
    case "MaximumBranchesExceededException":
    case "com.amazonaws.codecommit#MaximumBranchesExceededException":
      throw await deserializeAws_json1_1MaximumBranchesExceededExceptionResponse(parsedOutput, context);
    case "MaximumRepositoryTriggersExceededException":
    case "com.amazonaws.codecommit#MaximumRepositoryTriggersExceededException":
      throw await deserializeAws_json1_1MaximumRepositoryTriggersExceededExceptionResponse(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context);
    case "RepositoryTriggerBranchNameListRequiredException":
    case "com.amazonaws.codecommit#RepositoryTriggerBranchNameListRequiredException":
      throw await deserializeAws_json1_1RepositoryTriggerBranchNameListRequiredExceptionResponse(parsedOutput, context);
    case "RepositoryTriggerDestinationArnRequiredException":
    case "com.amazonaws.codecommit#RepositoryTriggerDestinationArnRequiredException":
      throw await deserializeAws_json1_1RepositoryTriggerDestinationArnRequiredExceptionResponse(parsedOutput, context);
    case "RepositoryTriggerEventsListRequiredException":
    case "com.amazonaws.codecommit#RepositoryTriggerEventsListRequiredException":
      throw await deserializeAws_json1_1RepositoryTriggerEventsListRequiredExceptionResponse(parsedOutput, context);
    case "RepositoryTriggerNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryTriggerNameRequiredException":
      throw await deserializeAws_json1_1RepositoryTriggerNameRequiredExceptionResponse(parsedOutput, context);
    case "RepositoryTriggersListRequiredException":
    case "com.amazonaws.codecommit#RepositoryTriggersListRequiredException":
      throw await deserializeAws_json1_1RepositoryTriggersListRequiredExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TagResourceCommandError = async (
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
      throw await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context);
    case "InvalidResourceArnException":
    case "com.amazonaws.codecommit#InvalidResourceArnException":
      throw await deserializeAws_json1_1InvalidResourceArnExceptionResponse(parsedOutput, context);
    case "InvalidSystemTagUsageException":
    case "com.amazonaws.codecommit#InvalidSystemTagUsageException":
      throw await deserializeAws_json1_1InvalidSystemTagUsageExceptionResponse(parsedOutput, context);
    case "InvalidTagsMapException":
    case "com.amazonaws.codecommit#InvalidTagsMapException":
      throw await deserializeAws_json1_1InvalidTagsMapExceptionResponse(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context);
    case "ResourceArnRequiredException":
    case "com.amazonaws.codecommit#ResourceArnRequiredException":
      throw await deserializeAws_json1_1ResourceArnRequiredExceptionResponse(parsedOutput, context);
    case "TagPolicyException":
    case "com.amazonaws.codecommit#TagPolicyException":
      throw await deserializeAws_json1_1TagPolicyExceptionResponse(parsedOutput, context);
    case "TagsMapRequiredException":
    case "com.amazonaws.codecommit#TagsMapRequiredException":
      throw await deserializeAws_json1_1TagsMapRequiredExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.codecommit#TooManyTagsException":
      throw await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1TestRepositoryTriggersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestRepositoryTriggersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TestRepositoryTriggersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TestRepositoryTriggersOutput(data, context);
  const response: TestRepositoryTriggersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TestRepositoryTriggersCommandError = async (
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
      throw await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context);
    case "InvalidRepositoryTriggerBranchNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryTriggerBranchNameException":
      throw await deserializeAws_json1_1InvalidRepositoryTriggerBranchNameExceptionResponse(parsedOutput, context);
    case "InvalidRepositoryTriggerCustomDataException":
    case "com.amazonaws.codecommit#InvalidRepositoryTriggerCustomDataException":
      throw await deserializeAws_json1_1InvalidRepositoryTriggerCustomDataExceptionResponse(parsedOutput, context);
    case "InvalidRepositoryTriggerDestinationArnException":
    case "com.amazonaws.codecommit#InvalidRepositoryTriggerDestinationArnException":
      throw await deserializeAws_json1_1InvalidRepositoryTriggerDestinationArnExceptionResponse(parsedOutput, context);
    case "InvalidRepositoryTriggerEventsException":
    case "com.amazonaws.codecommit#InvalidRepositoryTriggerEventsException":
      throw await deserializeAws_json1_1InvalidRepositoryTriggerEventsExceptionResponse(parsedOutput, context);
    case "InvalidRepositoryTriggerNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryTriggerNameException":
      throw await deserializeAws_json1_1InvalidRepositoryTriggerNameExceptionResponse(parsedOutput, context);
    case "InvalidRepositoryTriggerRegionException":
    case "com.amazonaws.codecommit#InvalidRepositoryTriggerRegionException":
      throw await deserializeAws_json1_1InvalidRepositoryTriggerRegionExceptionResponse(parsedOutput, context);
    case "MaximumBranchesExceededException":
    case "com.amazonaws.codecommit#MaximumBranchesExceededException":
      throw await deserializeAws_json1_1MaximumBranchesExceededExceptionResponse(parsedOutput, context);
    case "MaximumRepositoryTriggersExceededException":
    case "com.amazonaws.codecommit#MaximumRepositoryTriggersExceededException":
      throw await deserializeAws_json1_1MaximumRepositoryTriggersExceededExceptionResponse(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context);
    case "RepositoryTriggerBranchNameListRequiredException":
    case "com.amazonaws.codecommit#RepositoryTriggerBranchNameListRequiredException":
      throw await deserializeAws_json1_1RepositoryTriggerBranchNameListRequiredExceptionResponse(parsedOutput, context);
    case "RepositoryTriggerDestinationArnRequiredException":
    case "com.amazonaws.codecommit#RepositoryTriggerDestinationArnRequiredException":
      throw await deserializeAws_json1_1RepositoryTriggerDestinationArnRequiredExceptionResponse(parsedOutput, context);
    case "RepositoryTriggerEventsListRequiredException":
    case "com.amazonaws.codecommit#RepositoryTriggerEventsListRequiredException":
      throw await deserializeAws_json1_1RepositoryTriggerEventsListRequiredExceptionResponse(parsedOutput, context);
    case "RepositoryTriggerNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryTriggerNameRequiredException":
      throw await deserializeAws_json1_1RepositoryTriggerNameRequiredExceptionResponse(parsedOutput, context);
    case "RepositoryTriggersListRequiredException":
    case "com.amazonaws.codecommit#RepositoryTriggersListRequiredException":
      throw await deserializeAws_json1_1RepositoryTriggersListRequiredExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UntagResourceCommandError = async (
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
      throw await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context);
    case "InvalidResourceArnException":
    case "com.amazonaws.codecommit#InvalidResourceArnException":
      throw await deserializeAws_json1_1InvalidResourceArnExceptionResponse(parsedOutput, context);
    case "InvalidSystemTagUsageException":
    case "com.amazonaws.codecommit#InvalidSystemTagUsageException":
      throw await deserializeAws_json1_1InvalidSystemTagUsageExceptionResponse(parsedOutput, context);
    case "InvalidTagKeysListException":
    case "com.amazonaws.codecommit#InvalidTagKeysListException":
      throw await deserializeAws_json1_1InvalidTagKeysListExceptionResponse(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context);
    case "ResourceArnRequiredException":
    case "com.amazonaws.codecommit#ResourceArnRequiredException":
      throw await deserializeAws_json1_1ResourceArnRequiredExceptionResponse(parsedOutput, context);
    case "TagKeysListRequiredException":
    case "com.amazonaws.codecommit#TagKeysListRequiredException":
      throw await deserializeAws_json1_1TagKeysListRequiredExceptionResponse(parsedOutput, context);
    case "TagPolicyException":
    case "com.amazonaws.codecommit#TagPolicyException":
      throw await deserializeAws_json1_1TagPolicyExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.codecommit#TooManyTagsException":
      throw await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateApprovalRuleTemplateContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApprovalRuleTemplateContentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateApprovalRuleTemplateContentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateApprovalRuleTemplateContentOutput(data, context);
  const response: UpdateApprovalRuleTemplateContentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateApprovalRuleTemplateContentCommandError = async (
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
      throw await deserializeAws_json1_1ApprovalRuleTemplateContentRequiredExceptionResponse(parsedOutput, context);
    case "ApprovalRuleTemplateDoesNotExistException":
    case "com.amazonaws.codecommit#ApprovalRuleTemplateDoesNotExistException":
      throw await deserializeAws_json1_1ApprovalRuleTemplateDoesNotExistExceptionResponse(parsedOutput, context);
    case "ApprovalRuleTemplateNameRequiredException":
    case "com.amazonaws.codecommit#ApprovalRuleTemplateNameRequiredException":
      throw await deserializeAws_json1_1ApprovalRuleTemplateNameRequiredExceptionResponse(parsedOutput, context);
    case "InvalidApprovalRuleTemplateContentException":
    case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateContentException":
      throw await deserializeAws_json1_1InvalidApprovalRuleTemplateContentExceptionResponse(parsedOutput, context);
    case "InvalidApprovalRuleTemplateNameException":
    case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateNameException":
      throw await deserializeAws_json1_1InvalidApprovalRuleTemplateNameExceptionResponse(parsedOutput, context);
    case "InvalidRuleContentSha256Exception":
    case "com.amazonaws.codecommit#InvalidRuleContentSha256Exception":
      throw await deserializeAws_json1_1InvalidRuleContentSha256ExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateApprovalRuleTemplateDescriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApprovalRuleTemplateDescriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateApprovalRuleTemplateDescriptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateApprovalRuleTemplateDescriptionOutput(data, context);
  const response: UpdateApprovalRuleTemplateDescriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateApprovalRuleTemplateDescriptionCommandError = async (
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
      throw await deserializeAws_json1_1ApprovalRuleTemplateDoesNotExistExceptionResponse(parsedOutput, context);
    case "ApprovalRuleTemplateNameRequiredException":
    case "com.amazonaws.codecommit#ApprovalRuleTemplateNameRequiredException":
      throw await deserializeAws_json1_1ApprovalRuleTemplateNameRequiredExceptionResponse(parsedOutput, context);
    case "InvalidApprovalRuleTemplateDescriptionException":
    case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateDescriptionException":
      throw await deserializeAws_json1_1InvalidApprovalRuleTemplateDescriptionExceptionResponse(parsedOutput, context);
    case "InvalidApprovalRuleTemplateNameException":
    case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateNameException":
      throw await deserializeAws_json1_1InvalidApprovalRuleTemplateNameExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateApprovalRuleTemplateNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApprovalRuleTemplateNameCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateApprovalRuleTemplateNameCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateApprovalRuleTemplateNameOutput(data, context);
  const response: UpdateApprovalRuleTemplateNameCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateApprovalRuleTemplateNameCommandError = async (
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
      throw await deserializeAws_json1_1ApprovalRuleTemplateDoesNotExistExceptionResponse(parsedOutput, context);
    case "ApprovalRuleTemplateNameAlreadyExistsException":
    case "com.amazonaws.codecommit#ApprovalRuleTemplateNameAlreadyExistsException":
      throw await deserializeAws_json1_1ApprovalRuleTemplateNameAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ApprovalRuleTemplateNameRequiredException":
    case "com.amazonaws.codecommit#ApprovalRuleTemplateNameRequiredException":
      throw await deserializeAws_json1_1ApprovalRuleTemplateNameRequiredExceptionResponse(parsedOutput, context);
    case "InvalidApprovalRuleTemplateNameException":
    case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateNameException":
      throw await deserializeAws_json1_1InvalidApprovalRuleTemplateNameExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateCommentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCommentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateCommentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateCommentOutput(data, context);
  const response: UpdateCommentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateCommentCommandError = async (
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
      throw await deserializeAws_json1_1CommentContentRequiredExceptionResponse(parsedOutput, context);
    case "CommentContentSizeLimitExceededException":
    case "com.amazonaws.codecommit#CommentContentSizeLimitExceededException":
      throw await deserializeAws_json1_1CommentContentSizeLimitExceededExceptionResponse(parsedOutput, context);
    case "CommentDeletedException":
    case "com.amazonaws.codecommit#CommentDeletedException":
      throw await deserializeAws_json1_1CommentDeletedExceptionResponse(parsedOutput, context);
    case "CommentDoesNotExistException":
    case "com.amazonaws.codecommit#CommentDoesNotExistException":
      throw await deserializeAws_json1_1CommentDoesNotExistExceptionResponse(parsedOutput, context);
    case "CommentIdRequiredException":
    case "com.amazonaws.codecommit#CommentIdRequiredException":
      throw await deserializeAws_json1_1CommentIdRequiredExceptionResponse(parsedOutput, context);
    case "CommentNotCreatedByCallerException":
    case "com.amazonaws.codecommit#CommentNotCreatedByCallerException":
      throw await deserializeAws_json1_1CommentNotCreatedByCallerExceptionResponse(parsedOutput, context);
    case "InvalidCommentIdException":
    case "com.amazonaws.codecommit#InvalidCommentIdException":
      throw await deserializeAws_json1_1InvalidCommentIdExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateDefaultBranchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDefaultBranchCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateDefaultBranchCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateDefaultBranchCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateDefaultBranchCommandError = async (
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
      throw await deserializeAws_json1_1BranchDoesNotExistExceptionResponse(parsedOutput, context);
    case "BranchNameRequiredException":
    case "com.amazonaws.codecommit#BranchNameRequiredException":
      throw await deserializeAws_json1_1BranchNameRequiredExceptionResponse(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context);
    case "InvalidBranchNameException":
    case "com.amazonaws.codecommit#InvalidBranchNameException":
      throw await deserializeAws_json1_1InvalidBranchNameExceptionResponse(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdatePullRequestApprovalRuleContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePullRequestApprovalRuleContentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdatePullRequestApprovalRuleContentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdatePullRequestApprovalRuleContentOutput(data, context);
  const response: UpdatePullRequestApprovalRuleContentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdatePullRequestApprovalRuleContentCommandError = async (
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
      throw await deserializeAws_json1_1ApprovalRuleContentRequiredExceptionResponse(parsedOutput, context);
    case "ApprovalRuleDoesNotExistException":
    case "com.amazonaws.codecommit#ApprovalRuleDoesNotExistException":
      throw await deserializeAws_json1_1ApprovalRuleDoesNotExistExceptionResponse(parsedOutput, context);
    case "ApprovalRuleNameRequiredException":
    case "com.amazonaws.codecommit#ApprovalRuleNameRequiredException":
      throw await deserializeAws_json1_1ApprovalRuleNameRequiredExceptionResponse(parsedOutput, context);
    case "CannotModifyApprovalRuleFromTemplateException":
    case "com.amazonaws.codecommit#CannotModifyApprovalRuleFromTemplateException":
      throw await deserializeAws_json1_1CannotModifyApprovalRuleFromTemplateExceptionResponse(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context);
    case "InvalidApprovalRuleContentException":
    case "com.amazonaws.codecommit#InvalidApprovalRuleContentException":
      throw await deserializeAws_json1_1InvalidApprovalRuleContentExceptionResponse(parsedOutput, context);
    case "InvalidApprovalRuleNameException":
    case "com.amazonaws.codecommit#InvalidApprovalRuleNameException":
      throw await deserializeAws_json1_1InvalidApprovalRuleNameExceptionResponse(parsedOutput, context);
    case "InvalidPullRequestIdException":
    case "com.amazonaws.codecommit#InvalidPullRequestIdException":
      throw await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context);
    case "InvalidRuleContentSha256Exception":
    case "com.amazonaws.codecommit#InvalidRuleContentSha256Exception":
      throw await deserializeAws_json1_1InvalidRuleContentSha256ExceptionResponse(parsedOutput, context);
    case "PullRequestAlreadyClosedException":
    case "com.amazonaws.codecommit#PullRequestAlreadyClosedException":
      throw await deserializeAws_json1_1PullRequestAlreadyClosedExceptionResponse(parsedOutput, context);
    case "PullRequestDoesNotExistException":
    case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
      throw await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context);
    case "PullRequestIdRequiredException":
    case "com.amazonaws.codecommit#PullRequestIdRequiredException":
      throw await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdatePullRequestApprovalStateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePullRequestApprovalStateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdatePullRequestApprovalStateCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdatePullRequestApprovalStateCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdatePullRequestApprovalStateCommandError = async (
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
      throw await deserializeAws_json1_1ApprovalStateRequiredExceptionResponse(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context);
    case "InvalidApprovalStateException":
    case "com.amazonaws.codecommit#InvalidApprovalStateException":
      throw await deserializeAws_json1_1InvalidApprovalStateExceptionResponse(parsedOutput, context);
    case "InvalidPullRequestIdException":
    case "com.amazonaws.codecommit#InvalidPullRequestIdException":
      throw await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context);
    case "InvalidRevisionIdException":
    case "com.amazonaws.codecommit#InvalidRevisionIdException":
      throw await deserializeAws_json1_1InvalidRevisionIdExceptionResponse(parsedOutput, context);
    case "MaximumNumberOfApprovalsExceededException":
    case "com.amazonaws.codecommit#MaximumNumberOfApprovalsExceededException":
      throw await deserializeAws_json1_1MaximumNumberOfApprovalsExceededExceptionResponse(parsedOutput, context);
    case "PullRequestAlreadyClosedException":
    case "com.amazonaws.codecommit#PullRequestAlreadyClosedException":
      throw await deserializeAws_json1_1PullRequestAlreadyClosedExceptionResponse(parsedOutput, context);
    case "PullRequestCannotBeApprovedByAuthorException":
    case "com.amazonaws.codecommit#PullRequestCannotBeApprovedByAuthorException":
      throw await deserializeAws_json1_1PullRequestCannotBeApprovedByAuthorExceptionResponse(parsedOutput, context);
    case "PullRequestDoesNotExistException":
    case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
      throw await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context);
    case "PullRequestIdRequiredException":
    case "com.amazonaws.codecommit#PullRequestIdRequiredException":
      throw await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context);
    case "RevisionIdRequiredException":
    case "com.amazonaws.codecommit#RevisionIdRequiredException":
      throw await deserializeAws_json1_1RevisionIdRequiredExceptionResponse(parsedOutput, context);
    case "RevisionNotCurrentException":
    case "com.amazonaws.codecommit#RevisionNotCurrentException":
      throw await deserializeAws_json1_1RevisionNotCurrentExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdatePullRequestDescriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePullRequestDescriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdatePullRequestDescriptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdatePullRequestDescriptionOutput(data, context);
  const response: UpdatePullRequestDescriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdatePullRequestDescriptionCommandError = async (
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
      throw await deserializeAws_json1_1InvalidDescriptionExceptionResponse(parsedOutput, context);
    case "InvalidPullRequestIdException":
    case "com.amazonaws.codecommit#InvalidPullRequestIdException":
      throw await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context);
    case "PullRequestAlreadyClosedException":
    case "com.amazonaws.codecommit#PullRequestAlreadyClosedException":
      throw await deserializeAws_json1_1PullRequestAlreadyClosedExceptionResponse(parsedOutput, context);
    case "PullRequestDoesNotExistException":
    case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
      throw await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context);
    case "PullRequestIdRequiredException":
    case "com.amazonaws.codecommit#PullRequestIdRequiredException":
      throw await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdatePullRequestStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePullRequestStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdatePullRequestStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdatePullRequestStatusOutput(data, context);
  const response: UpdatePullRequestStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdatePullRequestStatusCommandError = async (
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
      throw await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context);
    case "InvalidPullRequestIdException":
    case "com.amazonaws.codecommit#InvalidPullRequestIdException":
      throw await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context);
    case "InvalidPullRequestStatusException":
    case "com.amazonaws.codecommit#InvalidPullRequestStatusException":
      throw await deserializeAws_json1_1InvalidPullRequestStatusExceptionResponse(parsedOutput, context);
    case "InvalidPullRequestStatusUpdateException":
    case "com.amazonaws.codecommit#InvalidPullRequestStatusUpdateException":
      throw await deserializeAws_json1_1InvalidPullRequestStatusUpdateExceptionResponse(parsedOutput, context);
    case "PullRequestDoesNotExistException":
    case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
      throw await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context);
    case "PullRequestIdRequiredException":
    case "com.amazonaws.codecommit#PullRequestIdRequiredException":
      throw await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context);
    case "PullRequestStatusRequiredException":
    case "com.amazonaws.codecommit#PullRequestStatusRequiredException":
      throw await deserializeAws_json1_1PullRequestStatusRequiredExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdatePullRequestTitleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePullRequestTitleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdatePullRequestTitleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdatePullRequestTitleOutput(data, context);
  const response: UpdatePullRequestTitleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdatePullRequestTitleCommandError = async (
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
      throw await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context);
    case "InvalidTitleException":
    case "com.amazonaws.codecommit#InvalidTitleException":
      throw await deserializeAws_json1_1InvalidTitleExceptionResponse(parsedOutput, context);
    case "PullRequestAlreadyClosedException":
    case "com.amazonaws.codecommit#PullRequestAlreadyClosedException":
      throw await deserializeAws_json1_1PullRequestAlreadyClosedExceptionResponse(parsedOutput, context);
    case "PullRequestDoesNotExistException":
    case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
      throw await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context);
    case "PullRequestIdRequiredException":
    case "com.amazonaws.codecommit#PullRequestIdRequiredException":
      throw await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context);
    case "TitleRequiredException":
    case "com.amazonaws.codecommit#TitleRequiredException":
      throw await deserializeAws_json1_1TitleRequiredExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateRepositoryDescriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRepositoryDescriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateRepositoryDescriptionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateRepositoryDescriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateRepositoryDescriptionCommandError = async (
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
      throw await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context);
    case "InvalidRepositoryDescriptionException":
    case "com.amazonaws.codecommit#InvalidRepositoryDescriptionException":
      throw await deserializeAws_json1_1InvalidRepositoryDescriptionExceptionResponse(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateRepositoryNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRepositoryNameCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateRepositoryNameCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateRepositoryNameCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateRepositoryNameCommandError = async (
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
      throw await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context);
    case "RepositoryNameExistsException":
    case "com.amazonaws.codecommit#RepositoryNameExistsException":
      throw await deserializeAws_json1_1RepositoryNameExistsExceptionResponse(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context);
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

const deserializeAws_json1_1ActorDoesNotExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ActorDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ActorDoesNotExistException(body, context);
  const exception = new ActorDoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ApprovalRuleContentRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ApprovalRuleContentRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ApprovalRuleContentRequiredException(body, context);
  const exception = new ApprovalRuleContentRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ApprovalRuleDoesNotExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ApprovalRuleDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ApprovalRuleDoesNotExistException(body, context);
  const exception = new ApprovalRuleDoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ApprovalRuleNameAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ApprovalRuleNameAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ApprovalRuleNameAlreadyExistsException(body, context);
  const exception = new ApprovalRuleNameAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ApprovalRuleNameRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ApprovalRuleNameRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ApprovalRuleNameRequiredException(body, context);
  const exception = new ApprovalRuleNameRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ApprovalRuleTemplateContentRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ApprovalRuleTemplateContentRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ApprovalRuleTemplateContentRequiredException(body, context);
  const exception = new ApprovalRuleTemplateContentRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ApprovalRuleTemplateDoesNotExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ApprovalRuleTemplateDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ApprovalRuleTemplateDoesNotExistException(body, context);
  const exception = new ApprovalRuleTemplateDoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ApprovalRuleTemplateInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ApprovalRuleTemplateInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ApprovalRuleTemplateInUseException(body, context);
  const exception = new ApprovalRuleTemplateInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ApprovalRuleTemplateNameAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ApprovalRuleTemplateNameAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ApprovalRuleTemplateNameAlreadyExistsException(body, context);
  const exception = new ApprovalRuleTemplateNameAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ApprovalRuleTemplateNameRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ApprovalRuleTemplateNameRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ApprovalRuleTemplateNameRequiredException(body, context);
  const exception = new ApprovalRuleTemplateNameRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ApprovalStateRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ApprovalStateRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ApprovalStateRequiredException(body, context);
  const exception = new ApprovalStateRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1AuthorDoesNotExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AuthorDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AuthorDoesNotExistException(body, context);
  const exception = new AuthorDoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1BeforeCommitIdAndAfterCommitIdAreSameExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BeforeCommitIdAndAfterCommitIdAreSameException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1BeforeCommitIdAndAfterCommitIdAreSameException(body, context);
  const exception = new BeforeCommitIdAndAfterCommitIdAreSameException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1BlobIdDoesNotExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BlobIdDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1BlobIdDoesNotExistException(body, context);
  const exception = new BlobIdDoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1BlobIdRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BlobIdRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1BlobIdRequiredException(body, context);
  const exception = new BlobIdRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1BranchDoesNotExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BranchDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1BranchDoesNotExistException(body, context);
  const exception = new BranchDoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1BranchNameExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BranchNameExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1BranchNameExistsException(body, context);
  const exception = new BranchNameExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1BranchNameIsTagNameExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BranchNameIsTagNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1BranchNameIsTagNameException(body, context);
  const exception = new BranchNameIsTagNameException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1BranchNameRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BranchNameRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1BranchNameRequiredException(body, context);
  const exception = new BranchNameRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1CannotDeleteApprovalRuleFromTemplateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CannotDeleteApprovalRuleFromTemplateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CannotDeleteApprovalRuleFromTemplateException(body, context);
  const exception = new CannotDeleteApprovalRuleFromTemplateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1CannotModifyApprovalRuleFromTemplateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CannotModifyApprovalRuleFromTemplateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CannotModifyApprovalRuleFromTemplateException(body, context);
  const exception = new CannotModifyApprovalRuleFromTemplateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ClientRequestTokenRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClientRequestTokenRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ClientRequestTokenRequiredException(body, context);
  const exception = new ClientRequestTokenRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1CommentContentRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CommentContentRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CommentContentRequiredException(body, context);
  const exception = new CommentContentRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1CommentContentSizeLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CommentContentSizeLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CommentContentSizeLimitExceededException(body, context);
  const exception = new CommentContentSizeLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1CommentDeletedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CommentDeletedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CommentDeletedException(body, context);
  const exception = new CommentDeletedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1CommentDoesNotExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CommentDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CommentDoesNotExistException(body, context);
  const exception = new CommentDoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1CommentIdRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CommentIdRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CommentIdRequiredException(body, context);
  const exception = new CommentIdRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1CommentNotCreatedByCallerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CommentNotCreatedByCallerException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CommentNotCreatedByCallerException(body, context);
  const exception = new CommentNotCreatedByCallerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1CommitDoesNotExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CommitDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CommitDoesNotExistException(body, context);
  const exception = new CommitDoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1CommitIdDoesNotExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CommitIdDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CommitIdDoesNotExistException(body, context);
  const exception = new CommitIdDoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1CommitIdRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CommitIdRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CommitIdRequiredException(body, context);
  const exception = new CommitIdRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1CommitIdsLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CommitIdsLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CommitIdsLimitExceededException(body, context);
  const exception = new CommitIdsLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1CommitIdsListRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CommitIdsListRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CommitIdsListRequiredException(body, context);
  const exception = new CommitIdsListRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1CommitMessageLengthExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CommitMessageLengthExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CommitMessageLengthExceededException(body, context);
  const exception = new CommitMessageLengthExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1CommitRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CommitRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CommitRequiredException(body, context);
  const exception = new CommitRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ConcurrentReferenceUpdateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentReferenceUpdateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConcurrentReferenceUpdateException(body, context);
  const exception = new ConcurrentReferenceUpdateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1DefaultBranchCannotBeDeletedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DefaultBranchCannotBeDeletedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DefaultBranchCannotBeDeletedException(body, context);
  const exception = new DefaultBranchCannotBeDeletedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1DirectoryNameConflictsWithFileNameExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DirectoryNameConflictsWithFileNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DirectoryNameConflictsWithFileNameException(body, context);
  const exception = new DirectoryNameConflictsWithFileNameException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EncryptionIntegrityChecksFailedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1EncryptionIntegrityChecksFailedException(body, context);
  const exception = new EncryptionIntegrityChecksFailedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EncryptionKeyAccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1EncryptionKeyAccessDeniedException(body, context);
  const exception = new EncryptionKeyAccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EncryptionKeyDisabledException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1EncryptionKeyDisabledException(body, context);
  const exception = new EncryptionKeyDisabledException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EncryptionKeyNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1EncryptionKeyNotFoundException(body, context);
  const exception = new EncryptionKeyNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EncryptionKeyUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1EncryptionKeyUnavailableException(body, context);
  const exception = new EncryptionKeyUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1FileContentAndSourceFileSpecifiedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FileContentAndSourceFileSpecifiedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1FileContentAndSourceFileSpecifiedException(body, context);
  const exception = new FileContentAndSourceFileSpecifiedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1FileContentRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FileContentRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1FileContentRequiredException(body, context);
  const exception = new FileContentRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1FileContentSizeLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FileContentSizeLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1FileContentSizeLimitExceededException(body, context);
  const exception = new FileContentSizeLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1FileDoesNotExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FileDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1FileDoesNotExistException(body, context);
  const exception = new FileDoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1FileEntryRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FileEntryRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1FileEntryRequiredException(body, context);
  const exception = new FileEntryRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1FileModeRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FileModeRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1FileModeRequiredException(body, context);
  const exception = new FileModeRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1FileNameConflictsWithDirectoryNameExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FileNameConflictsWithDirectoryNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1FileNameConflictsWithDirectoryNameException(body, context);
  const exception = new FileNameConflictsWithDirectoryNameException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1FilePathConflictsWithSubmodulePathExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FilePathConflictsWithSubmodulePathException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1FilePathConflictsWithSubmodulePathException(body, context);
  const exception = new FilePathConflictsWithSubmodulePathException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1FileTooLargeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FileTooLargeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1FileTooLargeException(body, context);
  const exception = new FileTooLargeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1FolderContentSizeLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FolderContentSizeLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1FolderContentSizeLimitExceededException(body, context);
  const exception = new FolderContentSizeLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1FolderDoesNotExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FolderDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1FolderDoesNotExistException(body, context);
  const exception = new FolderDoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1IdempotencyParameterMismatchExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IdempotencyParameterMismatchException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1IdempotencyParameterMismatchException(body, context);
  const exception = new IdempotencyParameterMismatchException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidActorArnExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidActorArnException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidActorArnException(body, context);
  const exception = new InvalidActorArnException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidApprovalRuleContentExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidApprovalRuleContentException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidApprovalRuleContentException(body, context);
  const exception = new InvalidApprovalRuleContentException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidApprovalRuleNameExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidApprovalRuleNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidApprovalRuleNameException(body, context);
  const exception = new InvalidApprovalRuleNameException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidApprovalRuleTemplateContentExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidApprovalRuleTemplateContentException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidApprovalRuleTemplateContentException(body, context);
  const exception = new InvalidApprovalRuleTemplateContentException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidApprovalRuleTemplateDescriptionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidApprovalRuleTemplateDescriptionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidApprovalRuleTemplateDescriptionException(body, context);
  const exception = new InvalidApprovalRuleTemplateDescriptionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidApprovalRuleTemplateNameExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidApprovalRuleTemplateNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidApprovalRuleTemplateNameException(body, context);
  const exception = new InvalidApprovalRuleTemplateNameException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidApprovalStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidApprovalStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidApprovalStateException(body, context);
  const exception = new InvalidApprovalStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidAuthorArnExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidAuthorArnException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidAuthorArnException(body, context);
  const exception = new InvalidAuthorArnException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidBlobIdExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidBlobIdException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidBlobIdException(body, context);
  const exception = new InvalidBlobIdException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidBranchNameExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidBranchNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidBranchNameException(body, context);
  const exception = new InvalidBranchNameException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidClientRequestTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidClientRequestTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidClientRequestTokenException(body, context);
  const exception = new InvalidClientRequestTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidCommentIdExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCommentIdException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidCommentIdException(body, context);
  const exception = new InvalidCommentIdException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidCommitExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCommitException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidCommitException(body, context);
  const exception = new InvalidCommitException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidCommitIdExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCommitIdException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidCommitIdException(body, context);
  const exception = new InvalidCommitIdException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidConflictDetailLevelExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidConflictDetailLevelException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidConflictDetailLevelException(body, context);
  const exception = new InvalidConflictDetailLevelException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidConflictResolutionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidConflictResolutionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidConflictResolutionException(body, context);
  const exception = new InvalidConflictResolutionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidConflictResolutionStrategyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidConflictResolutionStrategyException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidConflictResolutionStrategyException(body, context);
  const exception = new InvalidConflictResolutionStrategyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidContinuationTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidContinuationTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidContinuationTokenException(body, context);
  const exception = new InvalidContinuationTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidDeletionParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDeletionParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidDeletionParameterException(body, context);
  const exception = new InvalidDeletionParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidDescriptionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDescriptionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidDescriptionException(body, context);
  const exception = new InvalidDescriptionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidDestinationCommitSpecifierExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDestinationCommitSpecifierException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidDestinationCommitSpecifierException(body, context);
  const exception = new InvalidDestinationCommitSpecifierException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidEmailExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidEmailException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidEmailException(body, context);
  const exception = new InvalidEmailException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidFileLocationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidFileLocationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidFileLocationException(body, context);
  const exception = new InvalidFileLocationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidFileModeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidFileModeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidFileModeException(body, context);
  const exception = new InvalidFileModeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidFilePositionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidFilePositionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidFilePositionException(body, context);
  const exception = new InvalidFilePositionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidMaxConflictFilesExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidMaxConflictFilesException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidMaxConflictFilesException(body, context);
  const exception = new InvalidMaxConflictFilesException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidMaxMergeHunksExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidMaxMergeHunksException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidMaxMergeHunksException(body, context);
  const exception = new InvalidMaxMergeHunksException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidMaxResultsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidMaxResultsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidMaxResultsException(body, context);
  const exception = new InvalidMaxResultsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidMergeOptionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidMergeOptionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidMergeOptionException(body, context);
  const exception = new InvalidMergeOptionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidOrderExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidOrderException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidOrderException(body, context);
  const exception = new InvalidOrderException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidOverrideStatusExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidOverrideStatusException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidOverrideStatusException(body, context);
  const exception = new InvalidOverrideStatusException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidParentCommitIdExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParentCommitIdException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParentCommitIdException(body, context);
  const exception = new InvalidParentCommitIdException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidPathExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPathException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidPathException(body, context);
  const exception = new InvalidPathException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidPullRequestEventTypeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPullRequestEventTypeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidPullRequestEventTypeException(body, context);
  const exception = new InvalidPullRequestEventTypeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidPullRequestIdExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPullRequestIdException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidPullRequestIdException(body, context);
  const exception = new InvalidPullRequestIdException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidPullRequestStatusExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPullRequestStatusException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidPullRequestStatusException(body, context);
  const exception = new InvalidPullRequestStatusException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidPullRequestStatusUpdateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPullRequestStatusUpdateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidPullRequestStatusUpdateException(body, context);
  const exception = new InvalidPullRequestStatusUpdateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidReactionUserArnExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidReactionUserArnException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidReactionUserArnException(body, context);
  const exception = new InvalidReactionUserArnException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidReactionValueExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidReactionValueException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidReactionValueException(body, context);
  const exception = new InvalidReactionValueException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidReferenceNameExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidReferenceNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidReferenceNameException(body, context);
  const exception = new InvalidReferenceNameException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidRelativeFileVersionEnumExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRelativeFileVersionEnumException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRelativeFileVersionEnumException(body, context);
  const exception = new InvalidRelativeFileVersionEnumException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidReplacementContentExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidReplacementContentException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidReplacementContentException(body, context);
  const exception = new InvalidReplacementContentException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidReplacementTypeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidReplacementTypeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidReplacementTypeException(body, context);
  const exception = new InvalidReplacementTypeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidRepositoryDescriptionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRepositoryDescriptionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRepositoryDescriptionException(body, context);
  const exception = new InvalidRepositoryDescriptionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidRepositoryNameExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRepositoryNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRepositoryNameException(body, context);
  const exception = new InvalidRepositoryNameException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidRepositoryTriggerBranchNameExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRepositoryTriggerBranchNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRepositoryTriggerBranchNameException(body, context);
  const exception = new InvalidRepositoryTriggerBranchNameException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidRepositoryTriggerCustomDataExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRepositoryTriggerCustomDataException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRepositoryTriggerCustomDataException(body, context);
  const exception = new InvalidRepositoryTriggerCustomDataException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidRepositoryTriggerDestinationArnExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRepositoryTriggerDestinationArnException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRepositoryTriggerDestinationArnException(body, context);
  const exception = new InvalidRepositoryTriggerDestinationArnException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidRepositoryTriggerEventsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRepositoryTriggerEventsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRepositoryTriggerEventsException(body, context);
  const exception = new InvalidRepositoryTriggerEventsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidRepositoryTriggerNameExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRepositoryTriggerNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRepositoryTriggerNameException(body, context);
  const exception = new InvalidRepositoryTriggerNameException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidRepositoryTriggerRegionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRepositoryTriggerRegionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRepositoryTriggerRegionException(body, context);
  const exception = new InvalidRepositoryTriggerRegionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidResourceArnExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidResourceArnException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidResourceArnException(body, context);
  const exception = new InvalidResourceArnException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidRevisionIdExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRevisionIdException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRevisionIdException(body, context);
  const exception = new InvalidRevisionIdException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidRuleContentSha256ExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRuleContentSha256Exception> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRuleContentSha256Exception(body, context);
  const exception = new InvalidRuleContentSha256Exception({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidSortByExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSortByException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidSortByException(body, context);
  const exception = new InvalidSortByException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidSourceCommitSpecifierExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSourceCommitSpecifierException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidSourceCommitSpecifierException(body, context);
  const exception = new InvalidSourceCommitSpecifierException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidSystemTagUsageExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSystemTagUsageException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidSystemTagUsageException(body, context);
  const exception = new InvalidSystemTagUsageException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidTagKeysListExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTagKeysListException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidTagKeysListException(body, context);
  const exception = new InvalidTagKeysListException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidTagsMapExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTagsMapException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidTagsMapException(body, context);
  const exception = new InvalidTagsMapException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidTargetBranchExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTargetBranchException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidTargetBranchException(body, context);
  const exception = new InvalidTargetBranchException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidTargetExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTargetException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidTargetException(body, context);
  const exception = new InvalidTargetException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidTargetsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTargetsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidTargetsException(body, context);
  const exception = new InvalidTargetsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidTitleExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTitleException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidTitleException(body, context);
  const exception = new InvalidTitleException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ManualMergeRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ManualMergeRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ManualMergeRequiredException(body, context);
  const exception = new ManualMergeRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1MaximumBranchesExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MaximumBranchesExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MaximumBranchesExceededException(body, context);
  const exception = new MaximumBranchesExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1MaximumConflictResolutionEntriesExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MaximumConflictResolutionEntriesExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MaximumConflictResolutionEntriesExceededException(body, context);
  const exception = new MaximumConflictResolutionEntriesExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1MaximumFileContentToLoadExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MaximumFileContentToLoadExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MaximumFileContentToLoadExceededException(body, context);
  const exception = new MaximumFileContentToLoadExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1MaximumFileEntriesExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MaximumFileEntriesExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MaximumFileEntriesExceededException(body, context);
  const exception = new MaximumFileEntriesExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1MaximumItemsToCompareExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MaximumItemsToCompareExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MaximumItemsToCompareExceededException(body, context);
  const exception = new MaximumItemsToCompareExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1MaximumNumberOfApprovalsExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MaximumNumberOfApprovalsExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MaximumNumberOfApprovalsExceededException(body, context);
  const exception = new MaximumNumberOfApprovalsExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1MaximumOpenPullRequestsExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MaximumOpenPullRequestsExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MaximumOpenPullRequestsExceededException(body, context);
  const exception = new MaximumOpenPullRequestsExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1MaximumRepositoryNamesExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MaximumRepositoryNamesExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MaximumRepositoryNamesExceededException(body, context);
  const exception = new MaximumRepositoryNamesExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1MaximumRepositoryTriggersExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MaximumRepositoryTriggersExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MaximumRepositoryTriggersExceededException(body, context);
  const exception = new MaximumRepositoryTriggersExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1MaximumRuleTemplatesAssociatedWithRepositoryExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MaximumRuleTemplatesAssociatedWithRepositoryException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MaximumRuleTemplatesAssociatedWithRepositoryException(body, context);
  const exception = new MaximumRuleTemplatesAssociatedWithRepositoryException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1MergeOptionRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MergeOptionRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MergeOptionRequiredException(body, context);
  const exception = new MergeOptionRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1MultipleConflictResolutionEntriesExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MultipleConflictResolutionEntriesException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MultipleConflictResolutionEntriesException(body, context);
  const exception = new MultipleConflictResolutionEntriesException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1MultipleRepositoriesInPullRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MultipleRepositoriesInPullRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MultipleRepositoriesInPullRequestException(body, context);
  const exception = new MultipleRepositoriesInPullRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1NameLengthExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NameLengthExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NameLengthExceededException(body, context);
  const exception = new NameLengthExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1NoChangeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoChangeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NoChangeException(body, context);
  const exception = new NoChangeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1NumberOfRulesExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NumberOfRulesExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NumberOfRulesExceededException(body, context);
  const exception = new NumberOfRulesExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1NumberOfRuleTemplatesExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NumberOfRuleTemplatesExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NumberOfRuleTemplatesExceededException(body, context);
  const exception = new NumberOfRuleTemplatesExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1OverrideAlreadySetExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OverrideAlreadySetException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OverrideAlreadySetException(body, context);
  const exception = new OverrideAlreadySetException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1OverrideStatusRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OverrideStatusRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OverrideStatusRequiredException(body, context);
  const exception = new OverrideStatusRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ParentCommitDoesNotExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ParentCommitDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ParentCommitDoesNotExistException(body, context);
  const exception = new ParentCommitDoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ParentCommitIdOutdatedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ParentCommitIdOutdatedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ParentCommitIdOutdatedException(body, context);
  const exception = new ParentCommitIdOutdatedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ParentCommitIdRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ParentCommitIdRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ParentCommitIdRequiredException(body, context);
  const exception = new ParentCommitIdRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1PathDoesNotExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PathDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PathDoesNotExistException(body, context);
  const exception = new PathDoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1PathRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PathRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PathRequiredException(body, context);
  const exception = new PathRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1PullRequestAlreadyClosedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PullRequestAlreadyClosedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PullRequestAlreadyClosedException(body, context);
  const exception = new PullRequestAlreadyClosedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1PullRequestApprovalRulesNotSatisfiedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PullRequestApprovalRulesNotSatisfiedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PullRequestApprovalRulesNotSatisfiedException(body, context);
  const exception = new PullRequestApprovalRulesNotSatisfiedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1PullRequestCannotBeApprovedByAuthorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PullRequestCannotBeApprovedByAuthorException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PullRequestCannotBeApprovedByAuthorException(body, context);
  const exception = new PullRequestCannotBeApprovedByAuthorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PullRequestDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PullRequestDoesNotExistException(body, context);
  const exception = new PullRequestDoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1PullRequestIdRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PullRequestIdRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PullRequestIdRequiredException(body, context);
  const exception = new PullRequestIdRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1PullRequestStatusRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PullRequestStatusRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PullRequestStatusRequiredException(body, context);
  const exception = new PullRequestStatusRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1PutFileEntryConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PutFileEntryConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PutFileEntryConflictException(body, context);
  const exception = new PutFileEntryConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ReactionLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReactionLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ReactionLimitExceededException(body, context);
  const exception = new ReactionLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ReactionValueRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReactionValueRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ReactionValueRequiredException(body, context);
  const exception = new ReactionValueRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ReferenceDoesNotExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReferenceDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ReferenceDoesNotExistException(body, context);
  const exception = new ReferenceDoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ReferenceNameRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReferenceNameRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ReferenceNameRequiredException(body, context);
  const exception = new ReferenceNameRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ReferenceTypeNotSupportedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReferenceTypeNotSupportedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ReferenceTypeNotSupportedException(body, context);
  const exception = new ReferenceTypeNotSupportedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ReplacementContentRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReplacementContentRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ReplacementContentRequiredException(body, context);
  const exception = new ReplacementContentRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ReplacementTypeRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReplacementTypeRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ReplacementTypeRequiredException(body, context);
  const exception = new ReplacementTypeRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RepositoryDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RepositoryDoesNotExistException(body, context);
  const exception = new RepositoryDoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1RepositoryLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RepositoryLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RepositoryLimitExceededException(body, context);
  const exception = new RepositoryLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1RepositoryNameExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RepositoryNameExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RepositoryNameExistsException(body, context);
  const exception = new RepositoryNameExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1RepositoryNameRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RepositoryNameRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RepositoryNameRequiredException(body, context);
  const exception = new RepositoryNameRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1RepositoryNamesRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RepositoryNamesRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RepositoryNamesRequiredException(body, context);
  const exception = new RepositoryNamesRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1RepositoryNotAssociatedWithPullRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RepositoryNotAssociatedWithPullRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RepositoryNotAssociatedWithPullRequestException(body, context);
  const exception = new RepositoryNotAssociatedWithPullRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1RepositoryTriggerBranchNameListRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RepositoryTriggerBranchNameListRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RepositoryTriggerBranchNameListRequiredException(body, context);
  const exception = new RepositoryTriggerBranchNameListRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1RepositoryTriggerDestinationArnRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RepositoryTriggerDestinationArnRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RepositoryTriggerDestinationArnRequiredException(body, context);
  const exception = new RepositoryTriggerDestinationArnRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1RepositoryTriggerEventsListRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RepositoryTriggerEventsListRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RepositoryTriggerEventsListRequiredException(body, context);
  const exception = new RepositoryTriggerEventsListRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1RepositoryTriggerNameRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RepositoryTriggerNameRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RepositoryTriggerNameRequiredException(body, context);
  const exception = new RepositoryTriggerNameRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1RepositoryTriggersListRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RepositoryTriggersListRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RepositoryTriggersListRequiredException(body, context);
  const exception = new RepositoryTriggersListRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceArnRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceArnRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceArnRequiredException(body, context);
  const exception = new ResourceArnRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1RestrictedSourceFileExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RestrictedSourceFileException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RestrictedSourceFileException(body, context);
  const exception = new RestrictedSourceFileException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1RevisionIdRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RevisionIdRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RevisionIdRequiredException(body, context);
  const exception = new RevisionIdRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1RevisionNotCurrentExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RevisionNotCurrentException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RevisionNotCurrentException(body, context);
  const exception = new RevisionNotCurrentException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1SameFileContentExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SameFileContentException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1SameFileContentException(body, context);
  const exception = new SameFileContentException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1SamePathRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SamePathRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1SamePathRequestException(body, context);
  const exception = new SamePathRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1SourceAndDestinationAreSameExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SourceAndDestinationAreSameException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1SourceAndDestinationAreSameException(body, context);
  const exception = new SourceAndDestinationAreSameException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1SourceFileOrContentRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SourceFileOrContentRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1SourceFileOrContentRequiredException(body, context);
  const exception = new SourceFileOrContentRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1TagKeysListRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagKeysListRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TagKeysListRequiredException(body, context);
  const exception = new TagKeysListRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1TagPolicyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagPolicyException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TagPolicyException(body, context);
  const exception = new TagPolicyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1TagsMapRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagsMapRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TagsMapRequiredException(body, context);
  const exception = new TagsMapRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1TargetRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TargetRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TargetRequiredException(body, context);
  const exception = new TargetRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1TargetsRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TargetsRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TargetsRequiredException(body, context);
  const exception = new TargetsRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1TipOfSourceReferenceIsDifferentExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TipOfSourceReferenceIsDifferentException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TipOfSourceReferenceIsDifferentException(body, context);
  const exception = new TipOfSourceReferenceIsDifferentException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1TipsDivergenceExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TipsDivergenceExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TipsDivergenceExceededException(body, context);
  const exception = new TipsDivergenceExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1TitleRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TitleRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TitleRequiredException(body, context);
  const exception = new TitleRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1TooManyTagsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TooManyTagsException(body, context);
  const exception = new TooManyTagsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_1AssociateApprovalRuleTemplateWithRepositoryInput = (
  input: AssociateApprovalRuleTemplateWithRepositoryInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.approvalRuleTemplateName != null && { approvalRuleTemplateName: input.approvalRuleTemplateName }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesInput = (
  input: BatchAssociateApprovalRuleTemplateWithRepositoriesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.approvalRuleTemplateName != null && { approvalRuleTemplateName: input.approvalRuleTemplateName }),
    ...(input.repositoryNames != null && {
      repositoryNames: serializeAws_json1_1RepositoryNameList(input.repositoryNames, context),
    }),
  };
};

const serializeAws_json1_1BatchDescribeMergeConflictsInput = (
  input: BatchDescribeMergeConflictsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.conflictDetailLevel != null && { conflictDetailLevel: input.conflictDetailLevel }),
    ...(input.conflictResolutionStrategy != null && { conflictResolutionStrategy: input.conflictResolutionStrategy }),
    ...(input.destinationCommitSpecifier != null && { destinationCommitSpecifier: input.destinationCommitSpecifier }),
    ...(input.filePaths != null && { filePaths: serializeAws_json1_1FilePaths(input.filePaths, context) }),
    ...(input.maxConflictFiles != null && { maxConflictFiles: input.maxConflictFiles }),
    ...(input.maxMergeHunks != null && { maxMergeHunks: input.maxMergeHunks }),
    ...(input.mergeOption != null && { mergeOption: input.mergeOption }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
    ...(input.sourceCommitSpecifier != null && { sourceCommitSpecifier: input.sourceCommitSpecifier }),
  };
};

const serializeAws_json1_1BatchDisassociateApprovalRuleTemplateFromRepositoriesInput = (
  input: BatchDisassociateApprovalRuleTemplateFromRepositoriesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.approvalRuleTemplateName != null && { approvalRuleTemplateName: input.approvalRuleTemplateName }),
    ...(input.repositoryNames != null && {
      repositoryNames: serializeAws_json1_1RepositoryNameList(input.repositoryNames, context),
    }),
  };
};

const serializeAws_json1_1BatchGetCommitsInput = (input: BatchGetCommitsInput, context: __SerdeContext): any => {
  return {
    ...(input.commitIds != null && { commitIds: serializeAws_json1_1CommitIdsInputList(input.commitIds, context) }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1BatchGetRepositoriesInput = (
  input: BatchGetRepositoriesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.repositoryNames != null && {
      repositoryNames: serializeAws_json1_1RepositoryNameList(input.repositoryNames, context),
    }),
  };
};

const serializeAws_json1_1BranchNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1CommitIdsInputList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ConflictResolution = (input: ConflictResolution, context: __SerdeContext): any => {
  return {
    ...(input.deleteFiles != null && {
      deleteFiles: serializeAws_json1_1DeleteFileEntries(input.deleteFiles, context),
    }),
    ...(input.replaceContents != null && {
      replaceContents: serializeAws_json1_1ReplaceContentEntries(input.replaceContents, context),
    }),
    ...(input.setFileModes != null && {
      setFileModes: serializeAws_json1_1SetFileModeEntries(input.setFileModes, context),
    }),
  };
};

const serializeAws_json1_1CreateApprovalRuleTemplateInput = (
  input: CreateApprovalRuleTemplateInput,
  context: __SerdeContext
): any => {
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

const serializeAws_json1_1CreateBranchInput = (input: CreateBranchInput, context: __SerdeContext): any => {
  return {
    ...(input.branchName != null && { branchName: input.branchName }),
    ...(input.commitId != null && { commitId: input.commitId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1CreateCommitInput = (input: CreateCommitInput, context: __SerdeContext): any => {
  return {
    ...(input.authorName != null && { authorName: input.authorName }),
    ...(input.branchName != null && { branchName: input.branchName }),
    ...(input.commitMessage != null && { commitMessage: input.commitMessage }),
    ...(input.deleteFiles != null && {
      deleteFiles: serializeAws_json1_1DeleteFileEntries(input.deleteFiles, context),
    }),
    ...(input.email != null && { email: input.email }),
    ...(input.keepEmptyFolders != null && { keepEmptyFolders: input.keepEmptyFolders }),
    ...(input.parentCommitId != null && { parentCommitId: input.parentCommitId }),
    ...(input.putFiles != null && { putFiles: serializeAws_json1_1PutFileEntries(input.putFiles, context) }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
    ...(input.setFileModes != null && {
      setFileModes: serializeAws_json1_1SetFileModeEntries(input.setFileModes, context),
    }),
  };
};

const serializeAws_json1_1CreatePullRequestApprovalRuleInput = (
  input: CreatePullRequestApprovalRuleInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.approvalRuleContent != null && { approvalRuleContent: input.approvalRuleContent }),
    ...(input.approvalRuleName != null && { approvalRuleName: input.approvalRuleName }),
    ...(input.pullRequestId != null && { pullRequestId: input.pullRequestId }),
  };
};

const serializeAws_json1_1CreatePullRequestInput = (input: CreatePullRequestInput, context: __SerdeContext): any => {
  return {
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.description != null && { description: input.description }),
    ...(input.targets != null && { targets: serializeAws_json1_1TargetList(input.targets, context) }),
    ...(input.title != null && { title: input.title }),
  };
};

const serializeAws_json1_1CreateRepositoryInput = (input: CreateRepositoryInput, context: __SerdeContext): any => {
  return {
    ...(input.repositoryDescription != null && { repositoryDescription: input.repositoryDescription }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
    ...(input.tags != null && { tags: serializeAws_json1_1TagsMap(input.tags, context) }),
  };
};

const serializeAws_json1_1CreateUnreferencedMergeCommitInput = (
  input: CreateUnreferencedMergeCommitInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.authorName != null && { authorName: input.authorName }),
    ...(input.commitMessage != null && { commitMessage: input.commitMessage }),
    ...(input.conflictDetailLevel != null && { conflictDetailLevel: input.conflictDetailLevel }),
    ...(input.conflictResolution != null && {
      conflictResolution: serializeAws_json1_1ConflictResolution(input.conflictResolution, context),
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

const serializeAws_json1_1DeleteApprovalRuleTemplateInput = (
  input: DeleteApprovalRuleTemplateInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.approvalRuleTemplateName != null && { approvalRuleTemplateName: input.approvalRuleTemplateName }),
  };
};

const serializeAws_json1_1DeleteBranchInput = (input: DeleteBranchInput, context: __SerdeContext): any => {
  return {
    ...(input.branchName != null && { branchName: input.branchName }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1DeleteCommentContentInput = (
  input: DeleteCommentContentInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.commentId != null && { commentId: input.commentId }),
  };
};

const serializeAws_json1_1DeleteFileEntries = (input: DeleteFileEntry[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1DeleteFileEntry(entry, context);
    });
};

const serializeAws_json1_1DeleteFileEntry = (input: DeleteFileEntry, context: __SerdeContext): any => {
  return {
    ...(input.filePath != null && { filePath: input.filePath }),
  };
};

const serializeAws_json1_1DeleteFileInput = (input: DeleteFileInput, context: __SerdeContext): any => {
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

const serializeAws_json1_1DeletePullRequestApprovalRuleInput = (
  input: DeletePullRequestApprovalRuleInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.approvalRuleName != null && { approvalRuleName: input.approvalRuleName }),
    ...(input.pullRequestId != null && { pullRequestId: input.pullRequestId }),
  };
};

const serializeAws_json1_1DeleteRepositoryInput = (input: DeleteRepositoryInput, context: __SerdeContext): any => {
  return {
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1DescribeMergeConflictsInput = (
  input: DescribeMergeConflictsInput,
  context: __SerdeContext
): any => {
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

const serializeAws_json1_1DescribePullRequestEventsInput = (
  input: DescribePullRequestEventsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.actorArn != null && { actorArn: input.actorArn }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.pullRequestEventType != null && { pullRequestEventType: input.pullRequestEventType }),
    ...(input.pullRequestId != null && { pullRequestId: input.pullRequestId }),
  };
};

const serializeAws_json1_1DisassociateApprovalRuleTemplateFromRepositoryInput = (
  input: DisassociateApprovalRuleTemplateFromRepositoryInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.approvalRuleTemplateName != null && { approvalRuleTemplateName: input.approvalRuleTemplateName }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1EvaluatePullRequestApprovalRulesInput = (
  input: EvaluatePullRequestApprovalRulesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.pullRequestId != null && { pullRequestId: input.pullRequestId }),
    ...(input.revisionId != null && { revisionId: input.revisionId }),
  };
};

const serializeAws_json1_1FilePaths = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1GetApprovalRuleTemplateInput = (
  input: GetApprovalRuleTemplateInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.approvalRuleTemplateName != null && { approvalRuleTemplateName: input.approvalRuleTemplateName }),
  };
};

const serializeAws_json1_1GetBlobInput = (input: GetBlobInput, context: __SerdeContext): any => {
  return {
    ...(input.blobId != null && { blobId: input.blobId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1GetBranchInput = (input: GetBranchInput, context: __SerdeContext): any => {
  return {
    ...(input.branchName != null && { branchName: input.branchName }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1GetCommentInput = (input: GetCommentInput, context: __SerdeContext): any => {
  return {
    ...(input.commentId != null && { commentId: input.commentId }),
  };
};

const serializeAws_json1_1GetCommentReactionsInput = (
  input: GetCommentReactionsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.commentId != null && { commentId: input.commentId }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.reactionUserArn != null && { reactionUserArn: input.reactionUserArn }),
  };
};

const serializeAws_json1_1GetCommentsForComparedCommitInput = (
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

const serializeAws_json1_1GetCommentsForPullRequestInput = (
  input: GetCommentsForPullRequestInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.afterCommitId != null && { afterCommitId: input.afterCommitId }),
    ...(input.beforeCommitId != null && { beforeCommitId: input.beforeCommitId }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.pullRequestId != null && { pullRequestId: input.pullRequestId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1GetCommitInput = (input: GetCommitInput, context: __SerdeContext): any => {
  return {
    ...(input.commitId != null && { commitId: input.commitId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1GetDifferencesInput = (input: GetDifferencesInput, context: __SerdeContext): any => {
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

const serializeAws_json1_1GetFileInput = (input: GetFileInput, context: __SerdeContext): any => {
  return {
    ...(input.commitSpecifier != null && { commitSpecifier: input.commitSpecifier }),
    ...(input.filePath != null && { filePath: input.filePath }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1GetFolderInput = (input: GetFolderInput, context: __SerdeContext): any => {
  return {
    ...(input.commitSpecifier != null && { commitSpecifier: input.commitSpecifier }),
    ...(input.folderPath != null && { folderPath: input.folderPath }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1GetMergeCommitInput = (input: GetMergeCommitInput, context: __SerdeContext): any => {
  return {
    ...(input.conflictDetailLevel != null && { conflictDetailLevel: input.conflictDetailLevel }),
    ...(input.conflictResolutionStrategy != null && { conflictResolutionStrategy: input.conflictResolutionStrategy }),
    ...(input.destinationCommitSpecifier != null && { destinationCommitSpecifier: input.destinationCommitSpecifier }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
    ...(input.sourceCommitSpecifier != null && { sourceCommitSpecifier: input.sourceCommitSpecifier }),
  };
};

const serializeAws_json1_1GetMergeConflictsInput = (input: GetMergeConflictsInput, context: __SerdeContext): any => {
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

const serializeAws_json1_1GetMergeOptionsInput = (input: GetMergeOptionsInput, context: __SerdeContext): any => {
  return {
    ...(input.conflictDetailLevel != null && { conflictDetailLevel: input.conflictDetailLevel }),
    ...(input.conflictResolutionStrategy != null && { conflictResolutionStrategy: input.conflictResolutionStrategy }),
    ...(input.destinationCommitSpecifier != null && { destinationCommitSpecifier: input.destinationCommitSpecifier }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
    ...(input.sourceCommitSpecifier != null && { sourceCommitSpecifier: input.sourceCommitSpecifier }),
  };
};

const serializeAws_json1_1GetPullRequestApprovalStatesInput = (
  input: GetPullRequestApprovalStatesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.pullRequestId != null && { pullRequestId: input.pullRequestId }),
    ...(input.revisionId != null && { revisionId: input.revisionId }),
  };
};

const serializeAws_json1_1GetPullRequestInput = (input: GetPullRequestInput, context: __SerdeContext): any => {
  return {
    ...(input.pullRequestId != null && { pullRequestId: input.pullRequestId }),
  };
};

const serializeAws_json1_1GetPullRequestOverrideStateInput = (
  input: GetPullRequestOverrideStateInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.pullRequestId != null && { pullRequestId: input.pullRequestId }),
    ...(input.revisionId != null && { revisionId: input.revisionId }),
  };
};

const serializeAws_json1_1GetRepositoryInput = (input: GetRepositoryInput, context: __SerdeContext): any => {
  return {
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1GetRepositoryTriggersInput = (
  input: GetRepositoryTriggersInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1ListApprovalRuleTemplatesInput = (
  input: ListApprovalRuleTemplatesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1ListAssociatedApprovalRuleTemplatesForRepositoryInput = (
  input: ListAssociatedApprovalRuleTemplatesForRepositoryInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1ListBranchesInput = (input: ListBranchesInput, context: __SerdeContext): any => {
  return {
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1ListPullRequestsInput = (input: ListPullRequestsInput, context: __SerdeContext): any => {
  return {
    ...(input.authorArn != null && { authorArn: input.authorArn }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.pullRequestStatus != null && { pullRequestStatus: input.pullRequestStatus }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1ListRepositoriesForApprovalRuleTemplateInput = (
  input: ListRepositoriesForApprovalRuleTemplateInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.approvalRuleTemplateName != null && { approvalRuleTemplateName: input.approvalRuleTemplateName }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1ListRepositoriesInput = (input: ListRepositoriesInput, context: __SerdeContext): any => {
  return {
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.order != null && { order: input.order }),
    ...(input.sortBy != null && { sortBy: input.sortBy }),
  };
};

const serializeAws_json1_1ListTagsForResourceInput = (
  input: ListTagsForResourceInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
  };
};

const serializeAws_json1_1Location = (input: Location, context: __SerdeContext): any => {
  return {
    ...(input.filePath != null && { filePath: input.filePath }),
    ...(input.filePosition != null && { filePosition: input.filePosition }),
    ...(input.relativeFileVersion != null && { relativeFileVersion: input.relativeFileVersion }),
  };
};

const serializeAws_json1_1MergeBranchesByFastForwardInput = (
  input: MergeBranchesByFastForwardInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.destinationCommitSpecifier != null && { destinationCommitSpecifier: input.destinationCommitSpecifier }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
    ...(input.sourceCommitSpecifier != null && { sourceCommitSpecifier: input.sourceCommitSpecifier }),
    ...(input.targetBranch != null && { targetBranch: input.targetBranch }),
  };
};

const serializeAws_json1_1MergeBranchesBySquashInput = (
  input: MergeBranchesBySquashInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.authorName != null && { authorName: input.authorName }),
    ...(input.commitMessage != null && { commitMessage: input.commitMessage }),
    ...(input.conflictDetailLevel != null && { conflictDetailLevel: input.conflictDetailLevel }),
    ...(input.conflictResolution != null && {
      conflictResolution: serializeAws_json1_1ConflictResolution(input.conflictResolution, context),
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

const serializeAws_json1_1MergeBranchesByThreeWayInput = (
  input: MergeBranchesByThreeWayInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.authorName != null && { authorName: input.authorName }),
    ...(input.commitMessage != null && { commitMessage: input.commitMessage }),
    ...(input.conflictDetailLevel != null && { conflictDetailLevel: input.conflictDetailLevel }),
    ...(input.conflictResolution != null && {
      conflictResolution: serializeAws_json1_1ConflictResolution(input.conflictResolution, context),
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

const serializeAws_json1_1MergePullRequestByFastForwardInput = (
  input: MergePullRequestByFastForwardInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.pullRequestId != null && { pullRequestId: input.pullRequestId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
    ...(input.sourceCommitId != null && { sourceCommitId: input.sourceCommitId }),
  };
};

const serializeAws_json1_1MergePullRequestBySquashInput = (
  input: MergePullRequestBySquashInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.authorName != null && { authorName: input.authorName }),
    ...(input.commitMessage != null && { commitMessage: input.commitMessage }),
    ...(input.conflictDetailLevel != null && { conflictDetailLevel: input.conflictDetailLevel }),
    ...(input.conflictResolution != null && {
      conflictResolution: serializeAws_json1_1ConflictResolution(input.conflictResolution, context),
    }),
    ...(input.conflictResolutionStrategy != null && { conflictResolutionStrategy: input.conflictResolutionStrategy }),
    ...(input.email != null && { email: input.email }),
    ...(input.keepEmptyFolders != null && { keepEmptyFolders: input.keepEmptyFolders }),
    ...(input.pullRequestId != null && { pullRequestId: input.pullRequestId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
    ...(input.sourceCommitId != null && { sourceCommitId: input.sourceCommitId }),
  };
};

const serializeAws_json1_1MergePullRequestByThreeWayInput = (
  input: MergePullRequestByThreeWayInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.authorName != null && { authorName: input.authorName }),
    ...(input.commitMessage != null && { commitMessage: input.commitMessage }),
    ...(input.conflictDetailLevel != null && { conflictDetailLevel: input.conflictDetailLevel }),
    ...(input.conflictResolution != null && {
      conflictResolution: serializeAws_json1_1ConflictResolution(input.conflictResolution, context),
    }),
    ...(input.conflictResolutionStrategy != null && { conflictResolutionStrategy: input.conflictResolutionStrategy }),
    ...(input.email != null && { email: input.email }),
    ...(input.keepEmptyFolders != null && { keepEmptyFolders: input.keepEmptyFolders }),
    ...(input.pullRequestId != null && { pullRequestId: input.pullRequestId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
    ...(input.sourceCommitId != null && { sourceCommitId: input.sourceCommitId }),
  };
};

const serializeAws_json1_1OverridePullRequestApprovalRulesInput = (
  input: OverridePullRequestApprovalRulesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.overrideStatus != null && { overrideStatus: input.overrideStatus }),
    ...(input.pullRequestId != null && { pullRequestId: input.pullRequestId }),
    ...(input.revisionId != null && { revisionId: input.revisionId }),
  };
};

const serializeAws_json1_1PostCommentForComparedCommitInput = (
  input: PostCommentForComparedCommitInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.afterCommitId != null && { afterCommitId: input.afterCommitId }),
    ...(input.beforeCommitId != null && { beforeCommitId: input.beforeCommitId }),
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.content != null && { content: input.content }),
    ...(input.location != null && { location: serializeAws_json1_1Location(input.location, context) }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1PostCommentForPullRequestInput = (
  input: PostCommentForPullRequestInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.afterCommitId != null && { afterCommitId: input.afterCommitId }),
    ...(input.beforeCommitId != null && { beforeCommitId: input.beforeCommitId }),
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.content != null && { content: input.content }),
    ...(input.location != null && { location: serializeAws_json1_1Location(input.location, context) }),
    ...(input.pullRequestId != null && { pullRequestId: input.pullRequestId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1PostCommentReplyInput = (input: PostCommentReplyInput, context: __SerdeContext): any => {
  return {
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.content != null && { content: input.content }),
    ...(input.inReplyTo != null && { inReplyTo: input.inReplyTo }),
  };
};

const serializeAws_json1_1PutCommentReactionInput = (input: PutCommentReactionInput, context: __SerdeContext): any => {
  return {
    ...(input.commentId != null && { commentId: input.commentId }),
    ...(input.reactionValue != null && { reactionValue: input.reactionValue }),
  };
};

const serializeAws_json1_1PutFileEntries = (input: PutFileEntry[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1PutFileEntry(entry, context);
    });
};

const serializeAws_json1_1PutFileEntry = (input: PutFileEntry, context: __SerdeContext): any => {
  return {
    ...(input.fileContent != null && { fileContent: context.base64Encoder(input.fileContent) }),
    ...(input.fileMode != null && { fileMode: input.fileMode }),
    ...(input.filePath != null && { filePath: input.filePath }),
    ...(input.sourceFile != null && { sourceFile: serializeAws_json1_1SourceFileSpecifier(input.sourceFile, context) }),
  };
};

const serializeAws_json1_1PutFileInput = (input: PutFileInput, context: __SerdeContext): any => {
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

const serializeAws_json1_1PutRepositoryTriggersInput = (
  input: PutRepositoryTriggersInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
    ...(input.triggers != null && { triggers: serializeAws_json1_1RepositoryTriggersList(input.triggers, context) }),
  };
};

const serializeAws_json1_1ReplaceContentEntries = (input: ReplaceContentEntry[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1ReplaceContentEntry(entry, context);
    });
};

const serializeAws_json1_1ReplaceContentEntry = (input: ReplaceContentEntry, context: __SerdeContext): any => {
  return {
    ...(input.content != null && { content: context.base64Encoder(input.content) }),
    ...(input.fileMode != null && { fileMode: input.fileMode }),
    ...(input.filePath != null && { filePath: input.filePath }),
    ...(input.replacementType != null && { replacementType: input.replacementType }),
  };
};

const serializeAws_json1_1RepositoryNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1RepositoryTrigger = (input: RepositoryTrigger, context: __SerdeContext): any => {
  return {
    ...(input.branches != null && { branches: serializeAws_json1_1BranchNameList(input.branches, context) }),
    ...(input.customData != null && { customData: input.customData }),
    ...(input.destinationArn != null && { destinationArn: input.destinationArn }),
    ...(input.events != null && { events: serializeAws_json1_1RepositoryTriggerEventList(input.events, context) }),
    ...(input.name != null && { name: input.name }),
  };
};

const serializeAws_json1_1RepositoryTriggerEventList = (
  input: (RepositoryTriggerEventEnum | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1RepositoryTriggersList = (input: RepositoryTrigger[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1RepositoryTrigger(entry, context);
    });
};

const serializeAws_json1_1SetFileModeEntries = (input: SetFileModeEntry[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1SetFileModeEntry(entry, context);
    });
};

const serializeAws_json1_1SetFileModeEntry = (input: SetFileModeEntry, context: __SerdeContext): any => {
  return {
    ...(input.fileMode != null && { fileMode: input.fileMode }),
    ...(input.filePath != null && { filePath: input.filePath }),
  };
};

const serializeAws_json1_1SourceFileSpecifier = (input: SourceFileSpecifier, context: __SerdeContext): any => {
  return {
    ...(input.filePath != null && { filePath: input.filePath }),
    ...(input.isMove != null && { isMove: input.isMove }),
  };
};

const serializeAws_json1_1TagKeysList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1TagResourceInput = (input: TagResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.tags != null && { tags: serializeAws_json1_1TagsMap(input.tags, context) }),
  };
};

const serializeAws_json1_1TagsMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_json1_1Target = (input: Target, context: __SerdeContext): any => {
  return {
    ...(input.destinationReference != null && { destinationReference: input.destinationReference }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
    ...(input.sourceReference != null && { sourceReference: input.sourceReference }),
  };
};

const serializeAws_json1_1TargetList = (input: Target[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Target(entry, context);
    });
};

const serializeAws_json1_1TestRepositoryTriggersInput = (
  input: TestRepositoryTriggersInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
    ...(input.triggers != null && { triggers: serializeAws_json1_1RepositoryTriggersList(input.triggers, context) }),
  };
};

const serializeAws_json1_1UntagResourceInput = (input: UntagResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.tagKeys != null && { tagKeys: serializeAws_json1_1TagKeysList(input.tagKeys, context) }),
  };
};

const serializeAws_json1_1UpdateApprovalRuleTemplateContentInput = (
  input: UpdateApprovalRuleTemplateContentInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.approvalRuleTemplateName != null && { approvalRuleTemplateName: input.approvalRuleTemplateName }),
    ...(input.existingRuleContentSha256 != null && { existingRuleContentSha256: input.existingRuleContentSha256 }),
    ...(input.newRuleContent != null && { newRuleContent: input.newRuleContent }),
  };
};

const serializeAws_json1_1UpdateApprovalRuleTemplateDescriptionInput = (
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

const serializeAws_json1_1UpdateApprovalRuleTemplateNameInput = (
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

const serializeAws_json1_1UpdateCommentInput = (input: UpdateCommentInput, context: __SerdeContext): any => {
  return {
    ...(input.commentId != null && { commentId: input.commentId }),
    ...(input.content != null && { content: input.content }),
  };
};

const serializeAws_json1_1UpdateDefaultBranchInput = (
  input: UpdateDefaultBranchInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.defaultBranchName != null && { defaultBranchName: input.defaultBranchName }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1UpdatePullRequestApprovalRuleContentInput = (
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

const serializeAws_json1_1UpdatePullRequestApprovalStateInput = (
  input: UpdatePullRequestApprovalStateInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.approvalState != null && { approvalState: input.approvalState }),
    ...(input.pullRequestId != null && { pullRequestId: input.pullRequestId }),
    ...(input.revisionId != null && { revisionId: input.revisionId }),
  };
};

const serializeAws_json1_1UpdatePullRequestDescriptionInput = (
  input: UpdatePullRequestDescriptionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.pullRequestId != null && { pullRequestId: input.pullRequestId }),
  };
};

const serializeAws_json1_1UpdatePullRequestStatusInput = (
  input: UpdatePullRequestStatusInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.pullRequestId != null && { pullRequestId: input.pullRequestId }),
    ...(input.pullRequestStatus != null && { pullRequestStatus: input.pullRequestStatus }),
  };
};

const serializeAws_json1_1UpdatePullRequestTitleInput = (
  input: UpdatePullRequestTitleInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.pullRequestId != null && { pullRequestId: input.pullRequestId }),
    ...(input.title != null && { title: input.title }),
  };
};

const serializeAws_json1_1UpdateRepositoryDescriptionInput = (
  input: UpdateRepositoryDescriptionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.repositoryDescription != null && { repositoryDescription: input.repositoryDescription }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1UpdateRepositoryNameInput = (
  input: UpdateRepositoryNameInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.newName != null && { newName: input.newName }),
    ...(input.oldName != null && { oldName: input.oldName }),
  };
};

const deserializeAws_json1_1ActorDoesNotExistException = (
  output: any,
  context: __SerdeContext
): ActorDoesNotExistException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1Approval = (output: any, context: __SerdeContext): Approval => {
  return {
    approvalState: __expectString(output.approvalState),
    userArn: __expectString(output.userArn),
  } as any;
};

const deserializeAws_json1_1ApprovalList = (output: any, context: __SerdeContext): Approval[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Approval(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ApprovalRule = (output: any, context: __SerdeContext): ApprovalRule => {
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
        ? deserializeAws_json1_1OriginApprovalRuleTemplate(output.originApprovalRuleTemplate, context)
        : undefined,
    ruleContentSha256: __expectString(output.ruleContentSha256),
  } as any;
};

const deserializeAws_json1_1ApprovalRuleContentRequiredException = (
  output: any,
  context: __SerdeContext
): ApprovalRuleContentRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ApprovalRuleDoesNotExistException = (
  output: any,
  context: __SerdeContext
): ApprovalRuleDoesNotExistException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ApprovalRuleEventMetadata = (
  output: any,
  context: __SerdeContext
): ApprovalRuleEventMetadata => {
  return {
    approvalRuleContent: __expectString(output.approvalRuleContent),
    approvalRuleId: __expectString(output.approvalRuleId),
    approvalRuleName: __expectString(output.approvalRuleName),
  } as any;
};

const deserializeAws_json1_1ApprovalRuleNameAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): ApprovalRuleNameAlreadyExistsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ApprovalRuleNameRequiredException = (
  output: any,
  context: __SerdeContext
): ApprovalRuleNameRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ApprovalRuleOverriddenEventMetadata = (
  output: any,
  context: __SerdeContext
): ApprovalRuleOverriddenEventMetadata => {
  return {
    overrideStatus: __expectString(output.overrideStatus),
    revisionId: __expectString(output.revisionId),
  } as any;
};

const deserializeAws_json1_1ApprovalRulesList = (output: any, context: __SerdeContext): ApprovalRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ApprovalRule(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ApprovalRulesNotSatisfiedList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1ApprovalRulesSatisfiedList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1ApprovalRuleTemplate = (output: any, context: __SerdeContext): ApprovalRuleTemplate => {
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

const deserializeAws_json1_1ApprovalRuleTemplateContentRequiredException = (
  output: any,
  context: __SerdeContext
): ApprovalRuleTemplateContentRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ApprovalRuleTemplateDoesNotExistException = (
  output: any,
  context: __SerdeContext
): ApprovalRuleTemplateDoesNotExistException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ApprovalRuleTemplateInUseException = (
  output: any,
  context: __SerdeContext
): ApprovalRuleTemplateInUseException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ApprovalRuleTemplateNameAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): ApprovalRuleTemplateNameAlreadyExistsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ApprovalRuleTemplateNameList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1ApprovalRuleTemplateNameRequiredException = (
  output: any,
  context: __SerdeContext
): ApprovalRuleTemplateNameRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ApprovalStateChangedEventMetadata = (
  output: any,
  context: __SerdeContext
): ApprovalStateChangedEventMetadata => {
  return {
    approvalStatus: __expectString(output.approvalStatus),
    revisionId: __expectString(output.revisionId),
  } as any;
};

const deserializeAws_json1_1ApprovalStateRequiredException = (
  output: any,
  context: __SerdeContext
): ApprovalStateRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1AuthorDoesNotExistException = (
  output: any,
  context: __SerdeContext
): AuthorDoesNotExistException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesError = (
  output: any,
  context: __SerdeContext
): BatchAssociateApprovalRuleTemplateWithRepositoriesError => {
  return {
    errorCode: __expectString(output.errorCode),
    errorMessage: __expectString(output.errorMessage),
    repositoryName: __expectString(output.repositoryName),
  } as any;
};

const deserializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesErrorsList = (
  output: any,
  context: __SerdeContext
): BatchAssociateApprovalRuleTemplateWithRepositoriesError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesError(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesOutput = (
  output: any,
  context: __SerdeContext
): BatchAssociateApprovalRuleTemplateWithRepositoriesOutput => {
  return {
    associatedRepositoryNames:
      output.associatedRepositoryNames != null
        ? deserializeAws_json1_1RepositoryNameList(output.associatedRepositoryNames, context)
        : undefined,
    errors:
      output.errors != null
        ? deserializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesErrorsList(output.errors, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchDescribeMergeConflictsError = (
  output: any,
  context: __SerdeContext
): BatchDescribeMergeConflictsError => {
  return {
    exceptionName: __expectString(output.exceptionName),
    filePath: __expectString(output.filePath),
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1BatchDescribeMergeConflictsErrors = (
  output: any,
  context: __SerdeContext
): BatchDescribeMergeConflictsError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BatchDescribeMergeConflictsError(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1BatchDescribeMergeConflictsOutput = (
  output: any,
  context: __SerdeContext
): BatchDescribeMergeConflictsOutput => {
  return {
    baseCommitId: __expectString(output.baseCommitId),
    conflicts: output.conflicts != null ? deserializeAws_json1_1Conflicts(output.conflicts, context) : undefined,
    destinationCommitId: __expectString(output.destinationCommitId),
    errors:
      output.errors != null
        ? deserializeAws_json1_1BatchDescribeMergeConflictsErrors(output.errors, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
    sourceCommitId: __expectString(output.sourceCommitId),
  } as any;
};

const deserializeAws_json1_1BatchDisassociateApprovalRuleTemplateFromRepositoriesError = (
  output: any,
  context: __SerdeContext
): BatchDisassociateApprovalRuleTemplateFromRepositoriesError => {
  return {
    errorCode: __expectString(output.errorCode),
    errorMessage: __expectString(output.errorMessage),
    repositoryName: __expectString(output.repositoryName),
  } as any;
};

const deserializeAws_json1_1BatchDisassociateApprovalRuleTemplateFromRepositoriesErrorsList = (
  output: any,
  context: __SerdeContext
): BatchDisassociateApprovalRuleTemplateFromRepositoriesError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BatchDisassociateApprovalRuleTemplateFromRepositoriesError(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput = (
  output: any,
  context: __SerdeContext
): BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput => {
  return {
    disassociatedRepositoryNames:
      output.disassociatedRepositoryNames != null
        ? deserializeAws_json1_1RepositoryNameList(output.disassociatedRepositoryNames, context)
        : undefined,
    errors:
      output.errors != null
        ? deserializeAws_json1_1BatchDisassociateApprovalRuleTemplateFromRepositoriesErrorsList(output.errors, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchGetCommitsError = (output: any, context: __SerdeContext): BatchGetCommitsError => {
  return {
    commitId: __expectString(output.commitId),
    errorCode: __expectString(output.errorCode),
    errorMessage: __expectString(output.errorMessage),
  } as any;
};

const deserializeAws_json1_1BatchGetCommitsErrorsList = (
  output: any,
  context: __SerdeContext
): BatchGetCommitsError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BatchGetCommitsError(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1BatchGetCommitsOutput = (output: any, context: __SerdeContext): BatchGetCommitsOutput => {
  return {
    commits: output.commits != null ? deserializeAws_json1_1CommitObjectsList(output.commits, context) : undefined,
    errors: output.errors != null ? deserializeAws_json1_1BatchGetCommitsErrorsList(output.errors, context) : undefined,
  } as any;
};

const deserializeAws_json1_1BatchGetRepositoriesOutput = (
  output: any,
  context: __SerdeContext
): BatchGetRepositoriesOutput => {
  return {
    repositories:
      output.repositories != null
        ? deserializeAws_json1_1RepositoryMetadataList(output.repositories, context)
        : undefined,
    repositoriesNotFound:
      output.repositoriesNotFound != null
        ? deserializeAws_json1_1RepositoryNotFoundList(output.repositoriesNotFound, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BeforeCommitIdAndAfterCommitIdAreSameException = (
  output: any,
  context: __SerdeContext
): BeforeCommitIdAndAfterCommitIdAreSameException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1BlobIdDoesNotExistException = (
  output: any,
  context: __SerdeContext
): BlobIdDoesNotExistException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1BlobIdRequiredException = (
  output: any,
  context: __SerdeContext
): BlobIdRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1BlobMetadata = (output: any, context: __SerdeContext): BlobMetadata => {
  return {
    blobId: __expectString(output.blobId),
    mode: __expectString(output.mode),
    path: __expectString(output.path),
  } as any;
};

const deserializeAws_json1_1BranchDoesNotExistException = (
  output: any,
  context: __SerdeContext
): BranchDoesNotExistException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1BranchInfo = (output: any, context: __SerdeContext): BranchInfo => {
  return {
    branchName: __expectString(output.branchName),
    commitId: __expectString(output.commitId),
  } as any;
};

const deserializeAws_json1_1BranchNameExistsException = (
  output: any,
  context: __SerdeContext
): BranchNameExistsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1BranchNameIsTagNameException = (
  output: any,
  context: __SerdeContext
): BranchNameIsTagNameException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1BranchNameList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1BranchNameRequiredException = (
  output: any,
  context: __SerdeContext
): BranchNameRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1CallerReactions = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1CannotDeleteApprovalRuleFromTemplateException = (
  output: any,
  context: __SerdeContext
): CannotDeleteApprovalRuleFromTemplateException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1CannotModifyApprovalRuleFromTemplateException = (
  output: any,
  context: __SerdeContext
): CannotModifyApprovalRuleFromTemplateException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ClientRequestTokenRequiredException = (
  output: any,
  context: __SerdeContext
): ClientRequestTokenRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1Comment = (output: any, context: __SerdeContext): Comment => {
  return {
    authorArn: __expectString(output.authorArn),
    callerReactions:
      output.callerReactions != null
        ? deserializeAws_json1_1CallerReactions(output.callerReactions, context)
        : undefined,
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
    reactionCounts:
      output.reactionCounts != null
        ? deserializeAws_json1_1ReactionCountsMap(output.reactionCounts, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CommentContentRequiredException = (
  output: any,
  context: __SerdeContext
): CommentContentRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1CommentContentSizeLimitExceededException = (
  output: any,
  context: __SerdeContext
): CommentContentSizeLimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1CommentDeletedException = (
  output: any,
  context: __SerdeContext
): CommentDeletedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1CommentDoesNotExistException = (
  output: any,
  context: __SerdeContext
): CommentDoesNotExistException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1CommentIdRequiredException = (
  output: any,
  context: __SerdeContext
): CommentIdRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1CommentNotCreatedByCallerException = (
  output: any,
  context: __SerdeContext
): CommentNotCreatedByCallerException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1Comments = (output: any, context: __SerdeContext): Comment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Comment(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CommentsForComparedCommit = (
  output: any,
  context: __SerdeContext
): CommentsForComparedCommit => {
  return {
    afterBlobId: __expectString(output.afterBlobId),
    afterCommitId: __expectString(output.afterCommitId),
    beforeBlobId: __expectString(output.beforeBlobId),
    beforeCommitId: __expectString(output.beforeCommitId),
    comments: output.comments != null ? deserializeAws_json1_1Comments(output.comments, context) : undefined,
    location: output.location != null ? deserializeAws_json1_1Location(output.location, context) : undefined,
    repositoryName: __expectString(output.repositoryName),
  } as any;
};

const deserializeAws_json1_1CommentsForComparedCommitData = (
  output: any,
  context: __SerdeContext
): CommentsForComparedCommit[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CommentsForComparedCommit(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CommentsForPullRequest = (output: any, context: __SerdeContext): CommentsForPullRequest => {
  return {
    afterBlobId: __expectString(output.afterBlobId),
    afterCommitId: __expectString(output.afterCommitId),
    beforeBlobId: __expectString(output.beforeBlobId),
    beforeCommitId: __expectString(output.beforeCommitId),
    comments: output.comments != null ? deserializeAws_json1_1Comments(output.comments, context) : undefined,
    location: output.location != null ? deserializeAws_json1_1Location(output.location, context) : undefined,
    pullRequestId: __expectString(output.pullRequestId),
    repositoryName: __expectString(output.repositoryName),
  } as any;
};

const deserializeAws_json1_1CommentsForPullRequestData = (
  output: any,
  context: __SerdeContext
): CommentsForPullRequest[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CommentsForPullRequest(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Commit = (output: any, context: __SerdeContext): Commit => {
  return {
    additionalData: __expectString(output.additionalData),
    author: output.author != null ? deserializeAws_json1_1UserInfo(output.author, context) : undefined,
    commitId: __expectString(output.commitId),
    committer: output.committer != null ? deserializeAws_json1_1UserInfo(output.committer, context) : undefined,
    message: __expectString(output.message),
    parents: output.parents != null ? deserializeAws_json1_1ParentList(output.parents, context) : undefined,
    treeId: __expectString(output.treeId),
  } as any;
};

const deserializeAws_json1_1CommitDoesNotExistException = (
  output: any,
  context: __SerdeContext
): CommitDoesNotExistException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1CommitIdDoesNotExistException = (
  output: any,
  context: __SerdeContext
): CommitIdDoesNotExistException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1CommitIdRequiredException = (
  output: any,
  context: __SerdeContext
): CommitIdRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1CommitIdsLimitExceededException = (
  output: any,
  context: __SerdeContext
): CommitIdsLimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1CommitIdsListRequiredException = (
  output: any,
  context: __SerdeContext
): CommitIdsListRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1CommitMessageLengthExceededException = (
  output: any,
  context: __SerdeContext
): CommitMessageLengthExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1CommitObjectsList = (output: any, context: __SerdeContext): Commit[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Commit(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CommitRequiredException = (
  output: any,
  context: __SerdeContext
): CommitRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ConcurrentReferenceUpdateException = (
  output: any,
  context: __SerdeContext
): ConcurrentReferenceUpdateException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1Conflict = (output: any, context: __SerdeContext): Conflict => {
  return {
    conflictMetadata:
      output.conflictMetadata != null
        ? deserializeAws_json1_1ConflictMetadata(output.conflictMetadata, context)
        : undefined,
    mergeHunks: output.mergeHunks != null ? deserializeAws_json1_1MergeHunks(output.mergeHunks, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ConflictMetadata = (output: any, context: __SerdeContext): ConflictMetadata => {
  return {
    contentConflict: __expectBoolean(output.contentConflict),
    fileModeConflict: __expectBoolean(output.fileModeConflict),
    fileModes: output.fileModes != null ? deserializeAws_json1_1FileModes(output.fileModes, context) : undefined,
    filePath: __expectString(output.filePath),
    fileSizes: output.fileSizes != null ? deserializeAws_json1_1FileSizes(output.fileSizes, context) : undefined,
    isBinaryFile:
      output.isBinaryFile != null ? deserializeAws_json1_1IsBinaryFile(output.isBinaryFile, context) : undefined,
    mergeOperations:
      output.mergeOperations != null
        ? deserializeAws_json1_1MergeOperations(output.mergeOperations, context)
        : undefined,
    numberOfConflicts: __expectInt32(output.numberOfConflicts),
    objectTypeConflict: __expectBoolean(output.objectTypeConflict),
    objectTypes:
      output.objectTypes != null ? deserializeAws_json1_1ObjectTypes(output.objectTypes, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ConflictMetadataList = (output: any, context: __SerdeContext): ConflictMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ConflictMetadata(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Conflicts = (output: any, context: __SerdeContext): Conflict[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Conflict(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CreateApprovalRuleTemplateOutput = (
  output: any,
  context: __SerdeContext
): CreateApprovalRuleTemplateOutput => {
  return {
    approvalRuleTemplate:
      output.approvalRuleTemplate != null
        ? deserializeAws_json1_1ApprovalRuleTemplate(output.approvalRuleTemplate, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateCommitOutput = (output: any, context: __SerdeContext): CreateCommitOutput => {
  return {
    commitId: __expectString(output.commitId),
    filesAdded: output.filesAdded != null ? deserializeAws_json1_1FilesMetadata(output.filesAdded, context) : undefined,
    filesDeleted:
      output.filesDeleted != null ? deserializeAws_json1_1FilesMetadata(output.filesDeleted, context) : undefined,
    filesUpdated:
      output.filesUpdated != null ? deserializeAws_json1_1FilesMetadata(output.filesUpdated, context) : undefined,
    treeId: __expectString(output.treeId),
  } as any;
};

const deserializeAws_json1_1CreatePullRequestApprovalRuleOutput = (
  output: any,
  context: __SerdeContext
): CreatePullRequestApprovalRuleOutput => {
  return {
    approvalRule:
      output.approvalRule != null ? deserializeAws_json1_1ApprovalRule(output.approvalRule, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreatePullRequestOutput = (
  output: any,
  context: __SerdeContext
): CreatePullRequestOutput => {
  return {
    pullRequest:
      output.pullRequest != null ? deserializeAws_json1_1PullRequest(output.pullRequest, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateRepositoryOutput = (output: any, context: __SerdeContext): CreateRepositoryOutput => {
  return {
    repositoryMetadata:
      output.repositoryMetadata != null
        ? deserializeAws_json1_1RepositoryMetadata(output.repositoryMetadata, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateUnreferencedMergeCommitOutput = (
  output: any,
  context: __SerdeContext
): CreateUnreferencedMergeCommitOutput => {
  return {
    commitId: __expectString(output.commitId),
    treeId: __expectString(output.treeId),
  } as any;
};

const deserializeAws_json1_1DefaultBranchCannotBeDeletedException = (
  output: any,
  context: __SerdeContext
): DefaultBranchCannotBeDeletedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1DeleteApprovalRuleTemplateOutput = (
  output: any,
  context: __SerdeContext
): DeleteApprovalRuleTemplateOutput => {
  return {
    approvalRuleTemplateId: __expectString(output.approvalRuleTemplateId),
  } as any;
};

const deserializeAws_json1_1DeleteBranchOutput = (output: any, context: __SerdeContext): DeleteBranchOutput => {
  return {
    deletedBranch:
      output.deletedBranch != null ? deserializeAws_json1_1BranchInfo(output.deletedBranch, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteCommentContentOutput = (
  output: any,
  context: __SerdeContext
): DeleteCommentContentOutput => {
  return {
    comment: output.comment != null ? deserializeAws_json1_1Comment(output.comment, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteFileOutput = (output: any, context: __SerdeContext): DeleteFileOutput => {
  return {
    blobId: __expectString(output.blobId),
    commitId: __expectString(output.commitId),
    filePath: __expectString(output.filePath),
    treeId: __expectString(output.treeId),
  } as any;
};

const deserializeAws_json1_1DeletePullRequestApprovalRuleOutput = (
  output: any,
  context: __SerdeContext
): DeletePullRequestApprovalRuleOutput => {
  return {
    approvalRuleId: __expectString(output.approvalRuleId),
  } as any;
};

const deserializeAws_json1_1DeleteRepositoryOutput = (output: any, context: __SerdeContext): DeleteRepositoryOutput => {
  return {
    repositoryId: __expectString(output.repositoryId),
  } as any;
};

const deserializeAws_json1_1DescribeMergeConflictsOutput = (
  output: any,
  context: __SerdeContext
): DescribeMergeConflictsOutput => {
  return {
    baseCommitId: __expectString(output.baseCommitId),
    conflictMetadata:
      output.conflictMetadata != null
        ? deserializeAws_json1_1ConflictMetadata(output.conflictMetadata, context)
        : undefined,
    destinationCommitId: __expectString(output.destinationCommitId),
    mergeHunks: output.mergeHunks != null ? deserializeAws_json1_1MergeHunks(output.mergeHunks, context) : undefined,
    nextToken: __expectString(output.nextToken),
    sourceCommitId: __expectString(output.sourceCommitId),
  } as any;
};

const deserializeAws_json1_1DescribePullRequestEventsOutput = (
  output: any,
  context: __SerdeContext
): DescribePullRequestEventsOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    pullRequestEvents:
      output.pullRequestEvents != null
        ? deserializeAws_json1_1PullRequestEventList(output.pullRequestEvents, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Difference = (output: any, context: __SerdeContext): Difference => {
  return {
    afterBlob: output.afterBlob != null ? deserializeAws_json1_1BlobMetadata(output.afterBlob, context) : undefined,
    beforeBlob: output.beforeBlob != null ? deserializeAws_json1_1BlobMetadata(output.beforeBlob, context) : undefined,
    changeType: __expectString(output.changeType),
  } as any;
};

const deserializeAws_json1_1DifferenceList = (output: any, context: __SerdeContext): Difference[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Difference(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DirectoryNameConflictsWithFileNameException = (
  output: any,
  context: __SerdeContext
): DirectoryNameConflictsWithFileNameException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1EncryptionIntegrityChecksFailedException = (
  output: any,
  context: __SerdeContext
): EncryptionIntegrityChecksFailedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1EncryptionKeyAccessDeniedException = (
  output: any,
  context: __SerdeContext
): EncryptionKeyAccessDeniedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1EncryptionKeyDisabledException = (
  output: any,
  context: __SerdeContext
): EncryptionKeyDisabledException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1EncryptionKeyNotFoundException = (
  output: any,
  context: __SerdeContext
): EncryptionKeyNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1EncryptionKeyUnavailableException = (
  output: any,
  context: __SerdeContext
): EncryptionKeyUnavailableException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1EvaluatePullRequestApprovalRulesOutput = (
  output: any,
  context: __SerdeContext
): EvaluatePullRequestApprovalRulesOutput => {
  return {
    evaluation: output.evaluation != null ? deserializeAws_json1_1Evaluation(output.evaluation, context) : undefined,
  } as any;
};

const deserializeAws_json1_1Evaluation = (output: any, context: __SerdeContext): Evaluation => {
  return {
    approvalRulesNotSatisfied:
      output.approvalRulesNotSatisfied != null
        ? deserializeAws_json1_1ApprovalRulesNotSatisfiedList(output.approvalRulesNotSatisfied, context)
        : undefined,
    approvalRulesSatisfied:
      output.approvalRulesSatisfied != null
        ? deserializeAws_json1_1ApprovalRulesSatisfiedList(output.approvalRulesSatisfied, context)
        : undefined,
    approved: __expectBoolean(output.approved),
    overridden: __expectBoolean(output.overridden),
  } as any;
};

const deserializeAws_json1_1File = (output: any, context: __SerdeContext): File => {
  return {
    absolutePath: __expectString(output.absolutePath),
    blobId: __expectString(output.blobId),
    fileMode: __expectString(output.fileMode),
    relativePath: __expectString(output.relativePath),
  } as any;
};

const deserializeAws_json1_1FileContentAndSourceFileSpecifiedException = (
  output: any,
  context: __SerdeContext
): FileContentAndSourceFileSpecifiedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1FileContentRequiredException = (
  output: any,
  context: __SerdeContext
): FileContentRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1FileContentSizeLimitExceededException = (
  output: any,
  context: __SerdeContext
): FileContentSizeLimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1FileDoesNotExistException = (
  output: any,
  context: __SerdeContext
): FileDoesNotExistException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1FileEntryRequiredException = (
  output: any,
  context: __SerdeContext
): FileEntryRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1FileList = (output: any, context: __SerdeContext): File[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1File(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1FileMetadata = (output: any, context: __SerdeContext): FileMetadata => {
  return {
    absolutePath: __expectString(output.absolutePath),
    blobId: __expectString(output.blobId),
    fileMode: __expectString(output.fileMode),
  } as any;
};

const deserializeAws_json1_1FileModeRequiredException = (
  output: any,
  context: __SerdeContext
): FileModeRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1FileModes = (output: any, context: __SerdeContext): FileModes => {
  return {
    base: __expectString(output.base),
    destination: __expectString(output.destination),
    source: __expectString(output.source),
  } as any;
};

const deserializeAws_json1_1FileNameConflictsWithDirectoryNameException = (
  output: any,
  context: __SerdeContext
): FileNameConflictsWithDirectoryNameException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1FilePathConflictsWithSubmodulePathException = (
  output: any,
  context: __SerdeContext
): FilePathConflictsWithSubmodulePathException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1FileSizes = (output: any, context: __SerdeContext): FileSizes => {
  return {
    base: __expectLong(output.base),
    destination: __expectLong(output.destination),
    source: __expectLong(output.source),
  } as any;
};

const deserializeAws_json1_1FilesMetadata = (output: any, context: __SerdeContext): FileMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1FileMetadata(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1FileTooLargeException = (output: any, context: __SerdeContext): FileTooLargeException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1Folder = (output: any, context: __SerdeContext): Folder => {
  return {
    absolutePath: __expectString(output.absolutePath),
    relativePath: __expectString(output.relativePath),
    treeId: __expectString(output.treeId),
  } as any;
};

const deserializeAws_json1_1FolderContentSizeLimitExceededException = (
  output: any,
  context: __SerdeContext
): FolderContentSizeLimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1FolderDoesNotExistException = (
  output: any,
  context: __SerdeContext
): FolderDoesNotExistException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1FolderList = (output: any, context: __SerdeContext): Folder[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Folder(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1GetApprovalRuleTemplateOutput = (
  output: any,
  context: __SerdeContext
): GetApprovalRuleTemplateOutput => {
  return {
    approvalRuleTemplate:
      output.approvalRuleTemplate != null
        ? deserializeAws_json1_1ApprovalRuleTemplate(output.approvalRuleTemplate, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetBlobOutput = (output: any, context: __SerdeContext): GetBlobOutput => {
  return {
    content: output.content != null ? context.base64Decoder(output.content) : undefined,
  } as any;
};

const deserializeAws_json1_1GetBranchOutput = (output: any, context: __SerdeContext): GetBranchOutput => {
  return {
    branch: output.branch != null ? deserializeAws_json1_1BranchInfo(output.branch, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetCommentOutput = (output: any, context: __SerdeContext): GetCommentOutput => {
  return {
    comment: output.comment != null ? deserializeAws_json1_1Comment(output.comment, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetCommentReactionsOutput = (
  output: any,
  context: __SerdeContext
): GetCommentReactionsOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    reactionsForComment:
      output.reactionsForComment != null
        ? deserializeAws_json1_1ReactionsForCommentList(output.reactionsForComment, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetCommentsForComparedCommitOutput = (
  output: any,
  context: __SerdeContext
): GetCommentsForComparedCommitOutput => {
  return {
    commentsForComparedCommitData:
      output.commentsForComparedCommitData != null
        ? deserializeAws_json1_1CommentsForComparedCommitData(output.commentsForComparedCommitData, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1GetCommentsForPullRequestOutput = (
  output: any,
  context: __SerdeContext
): GetCommentsForPullRequestOutput => {
  return {
    commentsForPullRequestData:
      output.commentsForPullRequestData != null
        ? deserializeAws_json1_1CommentsForPullRequestData(output.commentsForPullRequestData, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1GetCommitOutput = (output: any, context: __SerdeContext): GetCommitOutput => {
  return {
    commit: output.commit != null ? deserializeAws_json1_1Commit(output.commit, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetDifferencesOutput = (output: any, context: __SerdeContext): GetDifferencesOutput => {
  return {
    NextToken: __expectString(output.NextToken),
    differences:
      output.differences != null ? deserializeAws_json1_1DifferenceList(output.differences, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetFileOutput = (output: any, context: __SerdeContext): GetFileOutput => {
  return {
    blobId: __expectString(output.blobId),
    commitId: __expectString(output.commitId),
    fileContent: output.fileContent != null ? context.base64Decoder(output.fileContent) : undefined,
    fileMode: __expectString(output.fileMode),
    filePath: __expectString(output.filePath),
    fileSize: __expectLong(output.fileSize),
  } as any;
};

const deserializeAws_json1_1GetFolderOutput = (output: any, context: __SerdeContext): GetFolderOutput => {
  return {
    commitId: __expectString(output.commitId),
    files: output.files != null ? deserializeAws_json1_1FileList(output.files, context) : undefined,
    folderPath: __expectString(output.folderPath),
    subFolders: output.subFolders != null ? deserializeAws_json1_1FolderList(output.subFolders, context) : undefined,
    subModules: output.subModules != null ? deserializeAws_json1_1SubModuleList(output.subModules, context) : undefined,
    symbolicLinks:
      output.symbolicLinks != null ? deserializeAws_json1_1SymbolicLinkList(output.symbolicLinks, context) : undefined,
    treeId: __expectString(output.treeId),
  } as any;
};

const deserializeAws_json1_1GetMergeCommitOutput = (output: any, context: __SerdeContext): GetMergeCommitOutput => {
  return {
    baseCommitId: __expectString(output.baseCommitId),
    destinationCommitId: __expectString(output.destinationCommitId),
    mergedCommitId: __expectString(output.mergedCommitId),
    sourceCommitId: __expectString(output.sourceCommitId),
  } as any;
};

const deserializeAws_json1_1GetMergeConflictsOutput = (
  output: any,
  context: __SerdeContext
): GetMergeConflictsOutput => {
  return {
    baseCommitId: __expectString(output.baseCommitId),
    conflictMetadataList:
      output.conflictMetadataList != null
        ? deserializeAws_json1_1ConflictMetadataList(output.conflictMetadataList, context)
        : undefined,
    destinationCommitId: __expectString(output.destinationCommitId),
    mergeable: __expectBoolean(output.mergeable),
    nextToken: __expectString(output.nextToken),
    sourceCommitId: __expectString(output.sourceCommitId),
  } as any;
};

const deserializeAws_json1_1GetMergeOptionsOutput = (output: any, context: __SerdeContext): GetMergeOptionsOutput => {
  return {
    baseCommitId: __expectString(output.baseCommitId),
    destinationCommitId: __expectString(output.destinationCommitId),
    mergeOptions:
      output.mergeOptions != null ? deserializeAws_json1_1MergeOptions(output.mergeOptions, context) : undefined,
    sourceCommitId: __expectString(output.sourceCommitId),
  } as any;
};

const deserializeAws_json1_1GetPullRequestApprovalStatesOutput = (
  output: any,
  context: __SerdeContext
): GetPullRequestApprovalStatesOutput => {
  return {
    approvals: output.approvals != null ? deserializeAws_json1_1ApprovalList(output.approvals, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetPullRequestOutput = (output: any, context: __SerdeContext): GetPullRequestOutput => {
  return {
    pullRequest:
      output.pullRequest != null ? deserializeAws_json1_1PullRequest(output.pullRequest, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetPullRequestOverrideStateOutput = (
  output: any,
  context: __SerdeContext
): GetPullRequestOverrideStateOutput => {
  return {
    overridden: __expectBoolean(output.overridden),
    overrider: __expectString(output.overrider),
  } as any;
};

const deserializeAws_json1_1GetRepositoryOutput = (output: any, context: __SerdeContext): GetRepositoryOutput => {
  return {
    repositoryMetadata:
      output.repositoryMetadata != null
        ? deserializeAws_json1_1RepositoryMetadata(output.repositoryMetadata, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetRepositoryTriggersOutput = (
  output: any,
  context: __SerdeContext
): GetRepositoryTriggersOutput => {
  return {
    configurationId: __expectString(output.configurationId),
    triggers:
      output.triggers != null ? deserializeAws_json1_1RepositoryTriggersList(output.triggers, context) : undefined,
  } as any;
};

const deserializeAws_json1_1IdempotencyParameterMismatchException = (
  output: any,
  context: __SerdeContext
): IdempotencyParameterMismatchException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidActorArnException = (
  output: any,
  context: __SerdeContext
): InvalidActorArnException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidApprovalRuleContentException = (
  output: any,
  context: __SerdeContext
): InvalidApprovalRuleContentException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidApprovalRuleNameException = (
  output: any,
  context: __SerdeContext
): InvalidApprovalRuleNameException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidApprovalRuleTemplateContentException = (
  output: any,
  context: __SerdeContext
): InvalidApprovalRuleTemplateContentException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidApprovalRuleTemplateDescriptionException = (
  output: any,
  context: __SerdeContext
): InvalidApprovalRuleTemplateDescriptionException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidApprovalRuleTemplateNameException = (
  output: any,
  context: __SerdeContext
): InvalidApprovalRuleTemplateNameException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidApprovalStateException = (
  output: any,
  context: __SerdeContext
): InvalidApprovalStateException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidAuthorArnException = (
  output: any,
  context: __SerdeContext
): InvalidAuthorArnException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidBlobIdException = (output: any, context: __SerdeContext): InvalidBlobIdException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidBranchNameException = (
  output: any,
  context: __SerdeContext
): InvalidBranchNameException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidClientRequestTokenException = (
  output: any,
  context: __SerdeContext
): InvalidClientRequestTokenException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidCommentIdException = (
  output: any,
  context: __SerdeContext
): InvalidCommentIdException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidCommitException = (output: any, context: __SerdeContext): InvalidCommitException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidCommitIdException = (
  output: any,
  context: __SerdeContext
): InvalidCommitIdException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidConflictDetailLevelException = (
  output: any,
  context: __SerdeContext
): InvalidConflictDetailLevelException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidConflictResolutionException = (
  output: any,
  context: __SerdeContext
): InvalidConflictResolutionException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidConflictResolutionStrategyException = (
  output: any,
  context: __SerdeContext
): InvalidConflictResolutionStrategyException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidContinuationTokenException = (
  output: any,
  context: __SerdeContext
): InvalidContinuationTokenException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidDeletionParameterException = (
  output: any,
  context: __SerdeContext
): InvalidDeletionParameterException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidDescriptionException = (
  output: any,
  context: __SerdeContext
): InvalidDescriptionException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidDestinationCommitSpecifierException = (
  output: any,
  context: __SerdeContext
): InvalidDestinationCommitSpecifierException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidEmailException = (output: any, context: __SerdeContext): InvalidEmailException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidFileLocationException = (
  output: any,
  context: __SerdeContext
): InvalidFileLocationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidFileModeException = (
  output: any,
  context: __SerdeContext
): InvalidFileModeException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidFilePositionException = (
  output: any,
  context: __SerdeContext
): InvalidFilePositionException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidMaxConflictFilesException = (
  output: any,
  context: __SerdeContext
): InvalidMaxConflictFilesException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidMaxMergeHunksException = (
  output: any,
  context: __SerdeContext
): InvalidMaxMergeHunksException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidMaxResultsException = (
  output: any,
  context: __SerdeContext
): InvalidMaxResultsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidMergeOptionException = (
  output: any,
  context: __SerdeContext
): InvalidMergeOptionException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidOrderException = (output: any, context: __SerdeContext): InvalidOrderException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidOverrideStatusException = (
  output: any,
  context: __SerdeContext
): InvalidOverrideStatusException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidParentCommitIdException = (
  output: any,
  context: __SerdeContext
): InvalidParentCommitIdException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidPathException = (output: any, context: __SerdeContext): InvalidPathException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidPullRequestEventTypeException = (
  output: any,
  context: __SerdeContext
): InvalidPullRequestEventTypeException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidPullRequestIdException = (
  output: any,
  context: __SerdeContext
): InvalidPullRequestIdException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidPullRequestStatusException = (
  output: any,
  context: __SerdeContext
): InvalidPullRequestStatusException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidPullRequestStatusUpdateException = (
  output: any,
  context: __SerdeContext
): InvalidPullRequestStatusUpdateException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidReactionUserArnException = (
  output: any,
  context: __SerdeContext
): InvalidReactionUserArnException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidReactionValueException = (
  output: any,
  context: __SerdeContext
): InvalidReactionValueException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidReferenceNameException = (
  output: any,
  context: __SerdeContext
): InvalidReferenceNameException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidRelativeFileVersionEnumException = (
  output: any,
  context: __SerdeContext
): InvalidRelativeFileVersionEnumException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidReplacementContentException = (
  output: any,
  context: __SerdeContext
): InvalidReplacementContentException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidReplacementTypeException = (
  output: any,
  context: __SerdeContext
): InvalidReplacementTypeException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidRepositoryDescriptionException = (
  output: any,
  context: __SerdeContext
): InvalidRepositoryDescriptionException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidRepositoryNameException = (
  output: any,
  context: __SerdeContext
): InvalidRepositoryNameException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidRepositoryTriggerBranchNameException = (
  output: any,
  context: __SerdeContext
): InvalidRepositoryTriggerBranchNameException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidRepositoryTriggerCustomDataException = (
  output: any,
  context: __SerdeContext
): InvalidRepositoryTriggerCustomDataException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidRepositoryTriggerDestinationArnException = (
  output: any,
  context: __SerdeContext
): InvalidRepositoryTriggerDestinationArnException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidRepositoryTriggerEventsException = (
  output: any,
  context: __SerdeContext
): InvalidRepositoryTriggerEventsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidRepositoryTriggerNameException = (
  output: any,
  context: __SerdeContext
): InvalidRepositoryTriggerNameException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidRepositoryTriggerRegionException = (
  output: any,
  context: __SerdeContext
): InvalidRepositoryTriggerRegionException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidResourceArnException = (
  output: any,
  context: __SerdeContext
): InvalidResourceArnException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidRevisionIdException = (
  output: any,
  context: __SerdeContext
): InvalidRevisionIdException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidRuleContentSha256Exception = (
  output: any,
  context: __SerdeContext
): InvalidRuleContentSha256Exception => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidSortByException = (output: any, context: __SerdeContext): InvalidSortByException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidSourceCommitSpecifierException = (
  output: any,
  context: __SerdeContext
): InvalidSourceCommitSpecifierException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidSystemTagUsageException = (
  output: any,
  context: __SerdeContext
): InvalidSystemTagUsageException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidTagKeysListException = (
  output: any,
  context: __SerdeContext
): InvalidTagKeysListException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidTagsMapException = (
  output: any,
  context: __SerdeContext
): InvalidTagsMapException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidTargetBranchException = (
  output: any,
  context: __SerdeContext
): InvalidTargetBranchException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidTargetException = (output: any, context: __SerdeContext): InvalidTargetException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidTargetsException = (
  output: any,
  context: __SerdeContext
): InvalidTargetsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidTitleException = (output: any, context: __SerdeContext): InvalidTitleException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1IsBinaryFile = (output: any, context: __SerdeContext): IsBinaryFile => {
  return {
    base: __expectBoolean(output.base),
    destination: __expectBoolean(output.destination),
    source: __expectBoolean(output.source),
  } as any;
};

const deserializeAws_json1_1ListApprovalRuleTemplatesOutput = (
  output: any,
  context: __SerdeContext
): ListApprovalRuleTemplatesOutput => {
  return {
    approvalRuleTemplateNames:
      output.approvalRuleTemplateNames != null
        ? deserializeAws_json1_1ApprovalRuleTemplateNameList(output.approvalRuleTemplateNames, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1ListAssociatedApprovalRuleTemplatesForRepositoryOutput = (
  output: any,
  context: __SerdeContext
): ListAssociatedApprovalRuleTemplatesForRepositoryOutput => {
  return {
    approvalRuleTemplateNames:
      output.approvalRuleTemplateNames != null
        ? deserializeAws_json1_1ApprovalRuleTemplateNameList(output.approvalRuleTemplateNames, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1ListBranchesOutput = (output: any, context: __SerdeContext): ListBranchesOutput => {
  return {
    branches: output.branches != null ? deserializeAws_json1_1BranchNameList(output.branches, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1ListPullRequestsOutput = (output: any, context: __SerdeContext): ListPullRequestsOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    pullRequestIds:
      output.pullRequestIds != null
        ? deserializeAws_json1_1PullRequestIdList(output.pullRequestIds, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListRepositoriesForApprovalRuleTemplateOutput = (
  output: any,
  context: __SerdeContext
): ListRepositoriesForApprovalRuleTemplateOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    repositoryNames:
      output.repositoryNames != null
        ? deserializeAws_json1_1RepositoryNameList(output.repositoryNames, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListRepositoriesOutput = (output: any, context: __SerdeContext): ListRepositoriesOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    repositories:
      output.repositories != null
        ? deserializeAws_json1_1RepositoryNameIdPairList(output.repositories, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceOutput = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    tags: output.tags != null ? deserializeAws_json1_1TagsMap(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1Location = (output: any, context: __SerdeContext): Location => {
  return {
    filePath: __expectString(output.filePath),
    filePosition: __expectLong(output.filePosition),
    relativeFileVersion: __expectString(output.relativeFileVersion),
  } as any;
};

const deserializeAws_json1_1ManualMergeRequiredException = (
  output: any,
  context: __SerdeContext
): ManualMergeRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1MaximumBranchesExceededException = (
  output: any,
  context: __SerdeContext
): MaximumBranchesExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1MaximumConflictResolutionEntriesExceededException = (
  output: any,
  context: __SerdeContext
): MaximumConflictResolutionEntriesExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1MaximumFileContentToLoadExceededException = (
  output: any,
  context: __SerdeContext
): MaximumFileContentToLoadExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1MaximumFileEntriesExceededException = (
  output: any,
  context: __SerdeContext
): MaximumFileEntriesExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1MaximumItemsToCompareExceededException = (
  output: any,
  context: __SerdeContext
): MaximumItemsToCompareExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1MaximumNumberOfApprovalsExceededException = (
  output: any,
  context: __SerdeContext
): MaximumNumberOfApprovalsExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1MaximumOpenPullRequestsExceededException = (
  output: any,
  context: __SerdeContext
): MaximumOpenPullRequestsExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1MaximumRepositoryNamesExceededException = (
  output: any,
  context: __SerdeContext
): MaximumRepositoryNamesExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1MaximumRepositoryTriggersExceededException = (
  output: any,
  context: __SerdeContext
): MaximumRepositoryTriggersExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1MaximumRuleTemplatesAssociatedWithRepositoryException = (
  output: any,
  context: __SerdeContext
): MaximumRuleTemplatesAssociatedWithRepositoryException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1MergeBranchesByFastForwardOutput = (
  output: any,
  context: __SerdeContext
): MergeBranchesByFastForwardOutput => {
  return {
    commitId: __expectString(output.commitId),
    treeId: __expectString(output.treeId),
  } as any;
};

const deserializeAws_json1_1MergeBranchesBySquashOutput = (
  output: any,
  context: __SerdeContext
): MergeBranchesBySquashOutput => {
  return {
    commitId: __expectString(output.commitId),
    treeId: __expectString(output.treeId),
  } as any;
};

const deserializeAws_json1_1MergeBranchesByThreeWayOutput = (
  output: any,
  context: __SerdeContext
): MergeBranchesByThreeWayOutput => {
  return {
    commitId: __expectString(output.commitId),
    treeId: __expectString(output.treeId),
  } as any;
};

const deserializeAws_json1_1MergeHunk = (output: any, context: __SerdeContext): MergeHunk => {
  return {
    base: output.base != null ? deserializeAws_json1_1MergeHunkDetail(output.base, context) : undefined,
    destination:
      output.destination != null ? deserializeAws_json1_1MergeHunkDetail(output.destination, context) : undefined,
    isConflict: __expectBoolean(output.isConflict),
    source: output.source != null ? deserializeAws_json1_1MergeHunkDetail(output.source, context) : undefined,
  } as any;
};

const deserializeAws_json1_1MergeHunkDetail = (output: any, context: __SerdeContext): MergeHunkDetail => {
  return {
    endLine: __expectInt32(output.endLine),
    hunkContent: __expectString(output.hunkContent),
    startLine: __expectInt32(output.startLine),
  } as any;
};

const deserializeAws_json1_1MergeHunks = (output: any, context: __SerdeContext): MergeHunk[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1MergeHunk(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1MergeMetadata = (output: any, context: __SerdeContext): MergeMetadata => {
  return {
    isMerged: __expectBoolean(output.isMerged),
    mergeCommitId: __expectString(output.mergeCommitId),
    mergeOption: __expectString(output.mergeOption),
    mergedBy: __expectString(output.mergedBy),
  } as any;
};

const deserializeAws_json1_1MergeOperations = (output: any, context: __SerdeContext): MergeOperations => {
  return {
    destination: __expectString(output.destination),
    source: __expectString(output.source),
  } as any;
};

const deserializeAws_json1_1MergeOptionRequiredException = (
  output: any,
  context: __SerdeContext
): MergeOptionRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1MergeOptions = (output: any, context: __SerdeContext): (MergeOptionTypeEnum | string)[] => {
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

const deserializeAws_json1_1MergePullRequestByFastForwardOutput = (
  output: any,
  context: __SerdeContext
): MergePullRequestByFastForwardOutput => {
  return {
    pullRequest:
      output.pullRequest != null ? deserializeAws_json1_1PullRequest(output.pullRequest, context) : undefined,
  } as any;
};

const deserializeAws_json1_1MergePullRequestBySquashOutput = (
  output: any,
  context: __SerdeContext
): MergePullRequestBySquashOutput => {
  return {
    pullRequest:
      output.pullRequest != null ? deserializeAws_json1_1PullRequest(output.pullRequest, context) : undefined,
  } as any;
};

const deserializeAws_json1_1MergePullRequestByThreeWayOutput = (
  output: any,
  context: __SerdeContext
): MergePullRequestByThreeWayOutput => {
  return {
    pullRequest:
      output.pullRequest != null ? deserializeAws_json1_1PullRequest(output.pullRequest, context) : undefined,
  } as any;
};

const deserializeAws_json1_1MultipleConflictResolutionEntriesException = (
  output: any,
  context: __SerdeContext
): MultipleConflictResolutionEntriesException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1MultipleRepositoriesInPullRequestException = (
  output: any,
  context: __SerdeContext
): MultipleRepositoriesInPullRequestException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1NameLengthExceededException = (
  output: any,
  context: __SerdeContext
): NameLengthExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1NoChangeException = (output: any, context: __SerdeContext): NoChangeException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1NumberOfRulesExceededException = (
  output: any,
  context: __SerdeContext
): NumberOfRulesExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1NumberOfRuleTemplatesExceededException = (
  output: any,
  context: __SerdeContext
): NumberOfRuleTemplatesExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ObjectTypes = (output: any, context: __SerdeContext): ObjectTypes => {
  return {
    base: __expectString(output.base),
    destination: __expectString(output.destination),
    source: __expectString(output.source),
  } as any;
};

const deserializeAws_json1_1OriginApprovalRuleTemplate = (
  output: any,
  context: __SerdeContext
): OriginApprovalRuleTemplate => {
  return {
    approvalRuleTemplateId: __expectString(output.approvalRuleTemplateId),
    approvalRuleTemplateName: __expectString(output.approvalRuleTemplateName),
  } as any;
};

const deserializeAws_json1_1OverrideAlreadySetException = (
  output: any,
  context: __SerdeContext
): OverrideAlreadySetException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1OverrideStatusRequiredException = (
  output: any,
  context: __SerdeContext
): OverrideStatusRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ParentCommitDoesNotExistException = (
  output: any,
  context: __SerdeContext
): ParentCommitDoesNotExistException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ParentCommitIdOutdatedException = (
  output: any,
  context: __SerdeContext
): ParentCommitIdOutdatedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ParentCommitIdRequiredException = (
  output: any,
  context: __SerdeContext
): ParentCommitIdRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ParentList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1PathDoesNotExistException = (
  output: any,
  context: __SerdeContext
): PathDoesNotExistException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1PathRequiredException = (output: any, context: __SerdeContext): PathRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1PostCommentForComparedCommitOutput = (
  output: any,
  context: __SerdeContext
): PostCommentForComparedCommitOutput => {
  return {
    afterBlobId: __expectString(output.afterBlobId),
    afterCommitId: __expectString(output.afterCommitId),
    beforeBlobId: __expectString(output.beforeBlobId),
    beforeCommitId: __expectString(output.beforeCommitId),
    comment: output.comment != null ? deserializeAws_json1_1Comment(output.comment, context) : undefined,
    location: output.location != null ? deserializeAws_json1_1Location(output.location, context) : undefined,
    repositoryName: __expectString(output.repositoryName),
  } as any;
};

const deserializeAws_json1_1PostCommentForPullRequestOutput = (
  output: any,
  context: __SerdeContext
): PostCommentForPullRequestOutput => {
  return {
    afterBlobId: __expectString(output.afterBlobId),
    afterCommitId: __expectString(output.afterCommitId),
    beforeBlobId: __expectString(output.beforeBlobId),
    beforeCommitId: __expectString(output.beforeCommitId),
    comment: output.comment != null ? deserializeAws_json1_1Comment(output.comment, context) : undefined,
    location: output.location != null ? deserializeAws_json1_1Location(output.location, context) : undefined,
    pullRequestId: __expectString(output.pullRequestId),
    repositoryName: __expectString(output.repositoryName),
  } as any;
};

const deserializeAws_json1_1PostCommentReplyOutput = (output: any, context: __SerdeContext): PostCommentReplyOutput => {
  return {
    comment: output.comment != null ? deserializeAws_json1_1Comment(output.comment, context) : undefined,
  } as any;
};

const deserializeAws_json1_1PullRequest = (output: any, context: __SerdeContext): PullRequest => {
  return {
    approvalRules:
      output.approvalRules != null ? deserializeAws_json1_1ApprovalRulesList(output.approvalRules, context) : undefined,
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
      output.pullRequestTargets != null
        ? deserializeAws_json1_1PullRequestTargetList(output.pullRequestTargets, context)
        : undefined,
    revisionId: __expectString(output.revisionId),
    title: __expectString(output.title),
  } as any;
};

const deserializeAws_json1_1PullRequestAlreadyClosedException = (
  output: any,
  context: __SerdeContext
): PullRequestAlreadyClosedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1PullRequestApprovalRulesNotSatisfiedException = (
  output: any,
  context: __SerdeContext
): PullRequestApprovalRulesNotSatisfiedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1PullRequestCannotBeApprovedByAuthorException = (
  output: any,
  context: __SerdeContext
): PullRequestCannotBeApprovedByAuthorException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1PullRequestCreatedEventMetadata = (
  output: any,
  context: __SerdeContext
): PullRequestCreatedEventMetadata => {
  return {
    destinationCommitId: __expectString(output.destinationCommitId),
    mergeBase: __expectString(output.mergeBase),
    repositoryName: __expectString(output.repositoryName),
    sourceCommitId: __expectString(output.sourceCommitId),
  } as any;
};

const deserializeAws_json1_1PullRequestDoesNotExistException = (
  output: any,
  context: __SerdeContext
): PullRequestDoesNotExistException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1PullRequestEvent = (output: any, context: __SerdeContext): PullRequestEvent => {
  return {
    actorArn: __expectString(output.actorArn),
    approvalRuleEventMetadata:
      output.approvalRuleEventMetadata != null
        ? deserializeAws_json1_1ApprovalRuleEventMetadata(output.approvalRuleEventMetadata, context)
        : undefined,
    approvalRuleOverriddenEventMetadata:
      output.approvalRuleOverriddenEventMetadata != null
        ? deserializeAws_json1_1ApprovalRuleOverriddenEventMetadata(output.approvalRuleOverriddenEventMetadata, context)
        : undefined,
    approvalStateChangedEventMetadata:
      output.approvalStateChangedEventMetadata != null
        ? deserializeAws_json1_1ApprovalStateChangedEventMetadata(output.approvalStateChangedEventMetadata, context)
        : undefined,
    eventDate:
      output.eventDate != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.eventDate))) : undefined,
    pullRequestCreatedEventMetadata:
      output.pullRequestCreatedEventMetadata != null
        ? deserializeAws_json1_1PullRequestCreatedEventMetadata(output.pullRequestCreatedEventMetadata, context)
        : undefined,
    pullRequestEventType: __expectString(output.pullRequestEventType),
    pullRequestId: __expectString(output.pullRequestId),
    pullRequestMergedStateChangedEventMetadata:
      output.pullRequestMergedStateChangedEventMetadata != null
        ? deserializeAws_json1_1PullRequestMergedStateChangedEventMetadata(
            output.pullRequestMergedStateChangedEventMetadata,
            context
          )
        : undefined,
    pullRequestSourceReferenceUpdatedEventMetadata:
      output.pullRequestSourceReferenceUpdatedEventMetadata != null
        ? deserializeAws_json1_1PullRequestSourceReferenceUpdatedEventMetadata(
            output.pullRequestSourceReferenceUpdatedEventMetadata,
            context
          )
        : undefined,
    pullRequestStatusChangedEventMetadata:
      output.pullRequestStatusChangedEventMetadata != null
        ? deserializeAws_json1_1PullRequestStatusChangedEventMetadata(
            output.pullRequestStatusChangedEventMetadata,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_json1_1PullRequestEventList = (output: any, context: __SerdeContext): PullRequestEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PullRequestEvent(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PullRequestIdList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1PullRequestIdRequiredException = (
  output: any,
  context: __SerdeContext
): PullRequestIdRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1PullRequestMergedStateChangedEventMetadata = (
  output: any,
  context: __SerdeContext
): PullRequestMergedStateChangedEventMetadata => {
  return {
    destinationReference: __expectString(output.destinationReference),
    mergeMetadata:
      output.mergeMetadata != null ? deserializeAws_json1_1MergeMetadata(output.mergeMetadata, context) : undefined,
    repositoryName: __expectString(output.repositoryName),
  } as any;
};

const deserializeAws_json1_1PullRequestSourceReferenceUpdatedEventMetadata = (
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

const deserializeAws_json1_1PullRequestStatusChangedEventMetadata = (
  output: any,
  context: __SerdeContext
): PullRequestStatusChangedEventMetadata => {
  return {
    pullRequestStatus: __expectString(output.pullRequestStatus),
  } as any;
};

const deserializeAws_json1_1PullRequestStatusRequiredException = (
  output: any,
  context: __SerdeContext
): PullRequestStatusRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1PullRequestTarget = (output: any, context: __SerdeContext): PullRequestTarget => {
  return {
    destinationCommit: __expectString(output.destinationCommit),
    destinationReference: __expectString(output.destinationReference),
    mergeBase: __expectString(output.mergeBase),
    mergeMetadata:
      output.mergeMetadata != null ? deserializeAws_json1_1MergeMetadata(output.mergeMetadata, context) : undefined,
    repositoryName: __expectString(output.repositoryName),
    sourceCommit: __expectString(output.sourceCommit),
    sourceReference: __expectString(output.sourceReference),
  } as any;
};

const deserializeAws_json1_1PullRequestTargetList = (output: any, context: __SerdeContext): PullRequestTarget[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PullRequestTarget(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PutFileEntryConflictException = (
  output: any,
  context: __SerdeContext
): PutFileEntryConflictException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1PutFileOutput = (output: any, context: __SerdeContext): PutFileOutput => {
  return {
    blobId: __expectString(output.blobId),
    commitId: __expectString(output.commitId),
    treeId: __expectString(output.treeId),
  } as any;
};

const deserializeAws_json1_1PutRepositoryTriggersOutput = (
  output: any,
  context: __SerdeContext
): PutRepositoryTriggersOutput => {
  return {
    configurationId: __expectString(output.configurationId),
  } as any;
};

const deserializeAws_json1_1ReactionCountsMap = (output: any, context: __SerdeContext): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectInt32(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1ReactionForComment = (output: any, context: __SerdeContext): ReactionForComment => {
  return {
    reaction:
      output.reaction != null ? deserializeAws_json1_1ReactionValueFormats(output.reaction, context) : undefined,
    reactionUsers:
      output.reactionUsers != null ? deserializeAws_json1_1ReactionUsersList(output.reactionUsers, context) : undefined,
    reactionsFromDeletedUsersCount: __expectInt32(output.reactionsFromDeletedUsersCount),
  } as any;
};

const deserializeAws_json1_1ReactionLimitExceededException = (
  output: any,
  context: __SerdeContext
): ReactionLimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ReactionsForCommentList = (output: any, context: __SerdeContext): ReactionForComment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ReactionForComment(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ReactionUsersList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1ReactionValueFormats = (output: any, context: __SerdeContext): ReactionValueFormats => {
  return {
    emoji: __expectString(output.emoji),
    shortCode: __expectString(output.shortCode),
    unicode: __expectString(output.unicode),
  } as any;
};

const deserializeAws_json1_1ReactionValueRequiredException = (
  output: any,
  context: __SerdeContext
): ReactionValueRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ReferenceDoesNotExistException = (
  output: any,
  context: __SerdeContext
): ReferenceDoesNotExistException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ReferenceNameRequiredException = (
  output: any,
  context: __SerdeContext
): ReferenceNameRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ReferenceTypeNotSupportedException = (
  output: any,
  context: __SerdeContext
): ReferenceTypeNotSupportedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ReplacementContentRequiredException = (
  output: any,
  context: __SerdeContext
): ReplacementContentRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ReplacementTypeRequiredException = (
  output: any,
  context: __SerdeContext
): ReplacementTypeRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1RepositoryDoesNotExistException = (
  output: any,
  context: __SerdeContext
): RepositoryDoesNotExistException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1RepositoryLimitExceededException = (
  output: any,
  context: __SerdeContext
): RepositoryLimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1RepositoryMetadata = (output: any, context: __SerdeContext): RepositoryMetadata => {
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

const deserializeAws_json1_1RepositoryMetadataList = (output: any, context: __SerdeContext): RepositoryMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RepositoryMetadata(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1RepositoryNameExistsException = (
  output: any,
  context: __SerdeContext
): RepositoryNameExistsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1RepositoryNameIdPair = (output: any, context: __SerdeContext): RepositoryNameIdPair => {
  return {
    repositoryId: __expectString(output.repositoryId),
    repositoryName: __expectString(output.repositoryName),
  } as any;
};

const deserializeAws_json1_1RepositoryNameIdPairList = (
  output: any,
  context: __SerdeContext
): RepositoryNameIdPair[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RepositoryNameIdPair(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1RepositoryNameList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1RepositoryNameRequiredException = (
  output: any,
  context: __SerdeContext
): RepositoryNameRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1RepositoryNamesRequiredException = (
  output: any,
  context: __SerdeContext
): RepositoryNamesRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1RepositoryNotAssociatedWithPullRequestException = (
  output: any,
  context: __SerdeContext
): RepositoryNotAssociatedWithPullRequestException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1RepositoryNotFoundList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1RepositoryTrigger = (output: any, context: __SerdeContext): RepositoryTrigger => {
  return {
    branches: output.branches != null ? deserializeAws_json1_1BranchNameList(output.branches, context) : undefined,
    customData: __expectString(output.customData),
    destinationArn: __expectString(output.destinationArn),
    events:
      output.events != null ? deserializeAws_json1_1RepositoryTriggerEventList(output.events, context) : undefined,
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_json1_1RepositoryTriggerBranchNameListRequiredException = (
  output: any,
  context: __SerdeContext
): RepositoryTriggerBranchNameListRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1RepositoryTriggerDestinationArnRequiredException = (
  output: any,
  context: __SerdeContext
): RepositoryTriggerDestinationArnRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1RepositoryTriggerEventList = (
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

const deserializeAws_json1_1RepositoryTriggerEventsListRequiredException = (
  output: any,
  context: __SerdeContext
): RepositoryTriggerEventsListRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1RepositoryTriggerExecutionFailure = (
  output: any,
  context: __SerdeContext
): RepositoryTriggerExecutionFailure => {
  return {
    failureMessage: __expectString(output.failureMessage),
    trigger: __expectString(output.trigger),
  } as any;
};

const deserializeAws_json1_1RepositoryTriggerExecutionFailureList = (
  output: any,
  context: __SerdeContext
): RepositoryTriggerExecutionFailure[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RepositoryTriggerExecutionFailure(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1RepositoryTriggerNameList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1RepositoryTriggerNameRequiredException = (
  output: any,
  context: __SerdeContext
): RepositoryTriggerNameRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1RepositoryTriggersList = (output: any, context: __SerdeContext): RepositoryTrigger[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RepositoryTrigger(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1RepositoryTriggersListRequiredException = (
  output: any,
  context: __SerdeContext
): RepositoryTriggersListRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ResourceArnRequiredException = (
  output: any,
  context: __SerdeContext
): ResourceArnRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1RestrictedSourceFileException = (
  output: any,
  context: __SerdeContext
): RestrictedSourceFileException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1RevisionIdRequiredException = (
  output: any,
  context: __SerdeContext
): RevisionIdRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1RevisionNotCurrentException = (
  output: any,
  context: __SerdeContext
): RevisionNotCurrentException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1SameFileContentException = (
  output: any,
  context: __SerdeContext
): SameFileContentException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1SamePathRequestException = (
  output: any,
  context: __SerdeContext
): SamePathRequestException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1SourceAndDestinationAreSameException = (
  output: any,
  context: __SerdeContext
): SourceAndDestinationAreSameException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1SourceFileOrContentRequiredException = (
  output: any,
  context: __SerdeContext
): SourceFileOrContentRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1SubModule = (output: any, context: __SerdeContext): SubModule => {
  return {
    absolutePath: __expectString(output.absolutePath),
    commitId: __expectString(output.commitId),
    relativePath: __expectString(output.relativePath),
  } as any;
};

const deserializeAws_json1_1SubModuleList = (output: any, context: __SerdeContext): SubModule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SubModule(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1SymbolicLink = (output: any, context: __SerdeContext): SymbolicLink => {
  return {
    absolutePath: __expectString(output.absolutePath),
    blobId: __expectString(output.blobId),
    fileMode: __expectString(output.fileMode),
    relativePath: __expectString(output.relativePath),
  } as any;
};

const deserializeAws_json1_1SymbolicLinkList = (output: any, context: __SerdeContext): SymbolicLink[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SymbolicLink(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1TagKeysListRequiredException = (
  output: any,
  context: __SerdeContext
): TagKeysListRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1TagPolicyException = (output: any, context: __SerdeContext): TagPolicyException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1TagsMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1TagsMapRequiredException = (
  output: any,
  context: __SerdeContext
): TagsMapRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1TargetRequiredException = (
  output: any,
  context: __SerdeContext
): TargetRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1TargetsRequiredException = (
  output: any,
  context: __SerdeContext
): TargetsRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1TestRepositoryTriggersOutput = (
  output: any,
  context: __SerdeContext
): TestRepositoryTriggersOutput => {
  return {
    failedExecutions:
      output.failedExecutions != null
        ? deserializeAws_json1_1RepositoryTriggerExecutionFailureList(output.failedExecutions, context)
        : undefined,
    successfulExecutions:
      output.successfulExecutions != null
        ? deserializeAws_json1_1RepositoryTriggerNameList(output.successfulExecutions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1TipOfSourceReferenceIsDifferentException = (
  output: any,
  context: __SerdeContext
): TipOfSourceReferenceIsDifferentException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1TipsDivergenceExceededException = (
  output: any,
  context: __SerdeContext
): TipsDivergenceExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1TitleRequiredException = (output: any, context: __SerdeContext): TitleRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1TooManyTagsException = (output: any, context: __SerdeContext): TooManyTagsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1UpdateApprovalRuleTemplateContentOutput = (
  output: any,
  context: __SerdeContext
): UpdateApprovalRuleTemplateContentOutput => {
  return {
    approvalRuleTemplate:
      output.approvalRuleTemplate != null
        ? deserializeAws_json1_1ApprovalRuleTemplate(output.approvalRuleTemplate, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateApprovalRuleTemplateDescriptionOutput = (
  output: any,
  context: __SerdeContext
): UpdateApprovalRuleTemplateDescriptionOutput => {
  return {
    approvalRuleTemplate:
      output.approvalRuleTemplate != null
        ? deserializeAws_json1_1ApprovalRuleTemplate(output.approvalRuleTemplate, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateApprovalRuleTemplateNameOutput = (
  output: any,
  context: __SerdeContext
): UpdateApprovalRuleTemplateNameOutput => {
  return {
    approvalRuleTemplate:
      output.approvalRuleTemplate != null
        ? deserializeAws_json1_1ApprovalRuleTemplate(output.approvalRuleTemplate, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateCommentOutput = (output: any, context: __SerdeContext): UpdateCommentOutput => {
  return {
    comment: output.comment != null ? deserializeAws_json1_1Comment(output.comment, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UpdatePullRequestApprovalRuleContentOutput = (
  output: any,
  context: __SerdeContext
): UpdatePullRequestApprovalRuleContentOutput => {
  return {
    approvalRule:
      output.approvalRule != null ? deserializeAws_json1_1ApprovalRule(output.approvalRule, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UpdatePullRequestDescriptionOutput = (
  output: any,
  context: __SerdeContext
): UpdatePullRequestDescriptionOutput => {
  return {
    pullRequest:
      output.pullRequest != null ? deserializeAws_json1_1PullRequest(output.pullRequest, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UpdatePullRequestStatusOutput = (
  output: any,
  context: __SerdeContext
): UpdatePullRequestStatusOutput => {
  return {
    pullRequest:
      output.pullRequest != null ? deserializeAws_json1_1PullRequest(output.pullRequest, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UpdatePullRequestTitleOutput = (
  output: any,
  context: __SerdeContext
): UpdatePullRequestTitleOutput => {
  return {
    pullRequest:
      output.pullRequest != null ? deserializeAws_json1_1PullRequest(output.pullRequest, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UserInfo = (output: any, context: __SerdeContext): UserInfo => {
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
