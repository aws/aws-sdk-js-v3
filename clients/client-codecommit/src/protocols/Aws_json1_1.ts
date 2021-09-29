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
  NumberOfRuleTemplatesExceededException,
  NumberOfRulesExceededException,
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
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApprovalRuleTemplateDoesNotExistException":
    case "com.amazonaws.codecommit#ApprovalRuleTemplateDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1ApprovalRuleTemplateDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ApprovalRuleTemplateNameRequiredException":
    case "com.amazonaws.codecommit#ApprovalRuleTemplateNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1ApprovalRuleTemplateNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidApprovalRuleTemplateNameException":
    case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidApprovalRuleTemplateNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MaximumRuleTemplatesAssociatedWithRepositoryException":
    case "com.amazonaws.codecommit#MaximumRuleTemplatesAssociatedWithRepositoryException":
      response = {
        ...(await deserializeAws_json1_1MaximumRuleTemplatesAssociatedWithRepositoryExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApprovalRuleTemplateDoesNotExistException":
    case "com.amazonaws.codecommit#ApprovalRuleTemplateDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1ApprovalRuleTemplateDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ApprovalRuleTemplateNameRequiredException":
    case "com.amazonaws.codecommit#ApprovalRuleTemplateNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1ApprovalRuleTemplateNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidApprovalRuleTemplateNameException":
    case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidApprovalRuleTemplateNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MaximumRepositoryNamesExceededException":
    case "com.amazonaws.codecommit#MaximumRepositoryNamesExceededException":
      response = {
        ...(await deserializeAws_json1_1MaximumRepositoryNamesExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNamesRequiredException":
    case "com.amazonaws.codecommit#RepositoryNamesRequiredException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNamesRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CommitDoesNotExistException":
    case "com.amazonaws.codecommit#CommitDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CommitRequiredException":
    case "com.amazonaws.codecommit#CommitRequiredException":
      response = {
        ...(await deserializeAws_json1_1CommitRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidCommitException":
    case "com.amazonaws.codecommit#InvalidCommitException":
      response = {
        ...(await deserializeAws_json1_1InvalidCommitExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidConflictDetailLevelException":
    case "com.amazonaws.codecommit#InvalidConflictDetailLevelException":
      response = {
        ...(await deserializeAws_json1_1InvalidConflictDetailLevelExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidConflictResolutionStrategyException":
    case "com.amazonaws.codecommit#InvalidConflictResolutionStrategyException":
      response = {
        ...(await deserializeAws_json1_1InvalidConflictResolutionStrategyExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidContinuationTokenException":
    case "com.amazonaws.codecommit#InvalidContinuationTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidContinuationTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidMaxConflictFilesException":
    case "com.amazonaws.codecommit#InvalidMaxConflictFilesException":
      response = {
        ...(await deserializeAws_json1_1InvalidMaxConflictFilesExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidMaxMergeHunksException":
    case "com.amazonaws.codecommit#InvalidMaxMergeHunksException":
      response = {
        ...(await deserializeAws_json1_1InvalidMaxMergeHunksExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidMergeOptionException":
    case "com.amazonaws.codecommit#InvalidMergeOptionException":
      response = {
        ...(await deserializeAws_json1_1InvalidMergeOptionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MaximumFileContentToLoadExceededException":
    case "com.amazonaws.codecommit#MaximumFileContentToLoadExceededException":
      response = {
        ...(await deserializeAws_json1_1MaximumFileContentToLoadExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MaximumItemsToCompareExceededException":
    case "com.amazonaws.codecommit#MaximumItemsToCompareExceededException":
      response = {
        ...(await deserializeAws_json1_1MaximumItemsToCompareExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MergeOptionRequiredException":
    case "com.amazonaws.codecommit#MergeOptionRequiredException":
      response = {
        ...(await deserializeAws_json1_1MergeOptionRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TipsDivergenceExceededException":
    case "com.amazonaws.codecommit#TipsDivergenceExceededException":
      response = {
        ...(await deserializeAws_json1_1TipsDivergenceExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApprovalRuleTemplateDoesNotExistException":
    case "com.amazonaws.codecommit#ApprovalRuleTemplateDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1ApprovalRuleTemplateDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ApprovalRuleTemplateNameRequiredException":
    case "com.amazonaws.codecommit#ApprovalRuleTemplateNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1ApprovalRuleTemplateNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidApprovalRuleTemplateNameException":
    case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidApprovalRuleTemplateNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MaximumRepositoryNamesExceededException":
    case "com.amazonaws.codecommit#MaximumRepositoryNamesExceededException":
      response = {
        ...(await deserializeAws_json1_1MaximumRepositoryNamesExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNamesRequiredException":
    case "com.amazonaws.codecommit#RepositoryNamesRequiredException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNamesRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CommitIdsLimitExceededException":
    case "com.amazonaws.codecommit#CommitIdsLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1CommitIdsLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CommitIdsListRequiredException":
    case "com.amazonaws.codecommit#CommitIdsListRequiredException":
      response = {
        ...(await deserializeAws_json1_1CommitIdsListRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MaximumRepositoryNamesExceededException":
    case "com.amazonaws.codecommit#MaximumRepositoryNamesExceededException":
      response = {
        ...(await deserializeAws_json1_1MaximumRepositoryNamesExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNamesRequiredException":
    case "com.amazonaws.codecommit#RepositoryNamesRequiredException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNamesRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApprovalRuleTemplateContentRequiredException":
    case "com.amazonaws.codecommit#ApprovalRuleTemplateContentRequiredException":
      response = {
        ...(await deserializeAws_json1_1ApprovalRuleTemplateContentRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ApprovalRuleTemplateNameAlreadyExistsException":
    case "com.amazonaws.codecommit#ApprovalRuleTemplateNameAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ApprovalRuleTemplateNameAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ApprovalRuleTemplateNameRequiredException":
    case "com.amazonaws.codecommit#ApprovalRuleTemplateNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1ApprovalRuleTemplateNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidApprovalRuleTemplateContentException":
    case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateContentException":
      response = {
        ...(await deserializeAws_json1_1InvalidApprovalRuleTemplateContentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidApprovalRuleTemplateDescriptionException":
    case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateDescriptionException":
      response = {
        ...(await deserializeAws_json1_1InvalidApprovalRuleTemplateDescriptionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidApprovalRuleTemplateNameException":
    case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidApprovalRuleTemplateNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NumberOfRuleTemplatesExceededException":
    case "com.amazonaws.codecommit#NumberOfRuleTemplatesExceededException":
      response = {
        ...(await deserializeAws_json1_1NumberOfRuleTemplatesExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BranchNameExistsException":
    case "com.amazonaws.codecommit#BranchNameExistsException":
      response = {
        ...(await deserializeAws_json1_1BranchNameExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BranchNameRequiredException":
    case "com.amazonaws.codecommit#BranchNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1BranchNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CommitDoesNotExistException":
    case "com.amazonaws.codecommit#CommitDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CommitIdRequiredException":
    case "com.amazonaws.codecommit#CommitIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1CommitIdRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidBranchNameException":
    case "com.amazonaws.codecommit#InvalidBranchNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidBranchNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidCommitIdException":
    case "com.amazonaws.codecommit#InvalidCommitIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidCommitIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BranchDoesNotExistException":
    case "com.amazonaws.codecommit#BranchDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1BranchDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BranchNameIsTagNameException":
    case "com.amazonaws.codecommit#BranchNameIsTagNameException":
      response = {
        ...(await deserializeAws_json1_1BranchNameIsTagNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BranchNameRequiredException":
    case "com.amazonaws.codecommit#BranchNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1BranchNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CommitMessageLengthExceededException":
    case "com.amazonaws.codecommit#CommitMessageLengthExceededException":
      response = {
        ...(await deserializeAws_json1_1CommitMessageLengthExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryNameConflictsWithFileNameException":
    case "com.amazonaws.codecommit#DirectoryNameConflictsWithFileNameException":
      response = {
        ...(await deserializeAws_json1_1DirectoryNameConflictsWithFileNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FileContentAndSourceFileSpecifiedException":
    case "com.amazonaws.codecommit#FileContentAndSourceFileSpecifiedException":
      response = {
        ...(await deserializeAws_json1_1FileContentAndSourceFileSpecifiedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FileContentSizeLimitExceededException":
    case "com.amazonaws.codecommit#FileContentSizeLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1FileContentSizeLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FileDoesNotExistException":
    case "com.amazonaws.codecommit#FileDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1FileDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FileEntryRequiredException":
    case "com.amazonaws.codecommit#FileEntryRequiredException":
      response = {
        ...(await deserializeAws_json1_1FileEntryRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FileModeRequiredException":
    case "com.amazonaws.codecommit#FileModeRequiredException":
      response = {
        ...(await deserializeAws_json1_1FileModeRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FileNameConflictsWithDirectoryNameException":
    case "com.amazonaws.codecommit#FileNameConflictsWithDirectoryNameException":
      response = {
        ...(await deserializeAws_json1_1FileNameConflictsWithDirectoryNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FilePathConflictsWithSubmodulePathException":
    case "com.amazonaws.codecommit#FilePathConflictsWithSubmodulePathException":
      response = {
        ...(await deserializeAws_json1_1FilePathConflictsWithSubmodulePathExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FolderContentSizeLimitExceededException":
    case "com.amazonaws.codecommit#FolderContentSizeLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1FolderContentSizeLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidBranchNameException":
    case "com.amazonaws.codecommit#InvalidBranchNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidBranchNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidDeletionParameterException":
    case "com.amazonaws.codecommit#InvalidDeletionParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeletionParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidEmailException":
    case "com.amazonaws.codecommit#InvalidEmailException":
      response = {
        ...(await deserializeAws_json1_1InvalidEmailExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidFileModeException":
    case "com.amazonaws.codecommit#InvalidFileModeException":
      response = {
        ...(await deserializeAws_json1_1InvalidFileModeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParentCommitIdException":
    case "com.amazonaws.codecommit#InvalidParentCommitIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidParentCommitIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPathException":
    case "com.amazonaws.codecommit#InvalidPathException":
      response = {
        ...(await deserializeAws_json1_1InvalidPathExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MaximumFileEntriesExceededException":
    case "com.amazonaws.codecommit#MaximumFileEntriesExceededException":
      response = {
        ...(await deserializeAws_json1_1MaximumFileEntriesExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NameLengthExceededException":
    case "com.amazonaws.codecommit#NameLengthExceededException":
      response = {
        ...(await deserializeAws_json1_1NameLengthExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoChangeException":
    case "com.amazonaws.codecommit#NoChangeException":
      response = {
        ...(await deserializeAws_json1_1NoChangeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ParentCommitDoesNotExistException":
    case "com.amazonaws.codecommit#ParentCommitDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1ParentCommitDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ParentCommitIdOutdatedException":
    case "com.amazonaws.codecommit#ParentCommitIdOutdatedException":
      response = {
        ...(await deserializeAws_json1_1ParentCommitIdOutdatedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ParentCommitIdRequiredException":
    case "com.amazonaws.codecommit#ParentCommitIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1ParentCommitIdRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PathRequiredException":
    case "com.amazonaws.codecommit#PathRequiredException":
      response = {
        ...(await deserializeAws_json1_1PathRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PutFileEntryConflictException":
    case "com.amazonaws.codecommit#PutFileEntryConflictException":
      response = {
        ...(await deserializeAws_json1_1PutFileEntryConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RestrictedSourceFileException":
    case "com.amazonaws.codecommit#RestrictedSourceFileException":
      response = {
        ...(await deserializeAws_json1_1RestrictedSourceFileExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "SamePathRequestException":
    case "com.amazonaws.codecommit#SamePathRequestException":
      response = {
        ...(await deserializeAws_json1_1SamePathRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "SourceFileOrContentRequiredException":
    case "com.amazonaws.codecommit#SourceFileOrContentRequiredException":
      response = {
        ...(await deserializeAws_json1_1SourceFileOrContentRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientRequestTokenRequiredException":
    case "com.amazonaws.codecommit#ClientRequestTokenRequiredException":
      response = {
        ...(await deserializeAws_json1_1ClientRequestTokenRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IdempotencyParameterMismatchException":
    case "com.amazonaws.codecommit#IdempotencyParameterMismatchException":
      response = {
        ...(await deserializeAws_json1_1IdempotencyParameterMismatchExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidClientRequestTokenException":
    case "com.amazonaws.codecommit#InvalidClientRequestTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidClientRequestTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidDescriptionException":
    case "com.amazonaws.codecommit#InvalidDescriptionException":
      response = {
        ...(await deserializeAws_json1_1InvalidDescriptionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidReferenceNameException":
    case "com.amazonaws.codecommit#InvalidReferenceNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidReferenceNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTargetException":
    case "com.amazonaws.codecommit#InvalidTargetException":
      response = {
        ...(await deserializeAws_json1_1InvalidTargetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTargetsException":
    case "com.amazonaws.codecommit#InvalidTargetsException":
      response = {
        ...(await deserializeAws_json1_1InvalidTargetsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTitleException":
    case "com.amazonaws.codecommit#InvalidTitleException":
      response = {
        ...(await deserializeAws_json1_1InvalidTitleExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MaximumOpenPullRequestsExceededException":
    case "com.amazonaws.codecommit#MaximumOpenPullRequestsExceededException":
      response = {
        ...(await deserializeAws_json1_1MaximumOpenPullRequestsExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MultipleRepositoriesInPullRequestException":
    case "com.amazonaws.codecommit#MultipleRepositoriesInPullRequestException":
      response = {
        ...(await deserializeAws_json1_1MultipleRepositoriesInPullRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ReferenceDoesNotExistException":
    case "com.amazonaws.codecommit#ReferenceDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1ReferenceDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ReferenceNameRequiredException":
    case "com.amazonaws.codecommit#ReferenceNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1ReferenceNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ReferenceTypeNotSupportedException":
    case "com.amazonaws.codecommit#ReferenceTypeNotSupportedException":
      response = {
        ...(await deserializeAws_json1_1ReferenceTypeNotSupportedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "SourceAndDestinationAreSameException":
    case "com.amazonaws.codecommit#SourceAndDestinationAreSameException":
      response = {
        ...(await deserializeAws_json1_1SourceAndDestinationAreSameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TargetRequiredException":
    case "com.amazonaws.codecommit#TargetRequiredException":
      response = {
        ...(await deserializeAws_json1_1TargetRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TargetsRequiredException":
    case "com.amazonaws.codecommit#TargetsRequiredException":
      response = {
        ...(await deserializeAws_json1_1TargetsRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TitleRequiredException":
    case "com.amazonaws.codecommit#TitleRequiredException":
      response = {
        ...(await deserializeAws_json1_1TitleRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApprovalRuleContentRequiredException":
    case "com.amazonaws.codecommit#ApprovalRuleContentRequiredException":
      response = {
        ...(await deserializeAws_json1_1ApprovalRuleContentRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ApprovalRuleNameAlreadyExistsException":
    case "com.amazonaws.codecommit#ApprovalRuleNameAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ApprovalRuleNameAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ApprovalRuleNameRequiredException":
    case "com.amazonaws.codecommit#ApprovalRuleNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1ApprovalRuleNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidApprovalRuleContentException":
    case "com.amazonaws.codecommit#InvalidApprovalRuleContentException":
      response = {
        ...(await deserializeAws_json1_1InvalidApprovalRuleContentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidApprovalRuleNameException":
    case "com.amazonaws.codecommit#InvalidApprovalRuleNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidApprovalRuleNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPullRequestIdException":
    case "com.amazonaws.codecommit#InvalidPullRequestIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NumberOfRulesExceededException":
    case "com.amazonaws.codecommit#NumberOfRulesExceededException":
      response = {
        ...(await deserializeAws_json1_1NumberOfRulesExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PullRequestAlreadyClosedException":
    case "com.amazonaws.codecommit#PullRequestAlreadyClosedException":
      response = {
        ...(await deserializeAws_json1_1PullRequestAlreadyClosedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PullRequestDoesNotExistException":
    case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PullRequestIdRequiredException":
    case "com.amazonaws.codecommit#PullRequestIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRepositoryDescriptionException":
    case "com.amazonaws.codecommit#InvalidRepositoryDescriptionException":
      response = {
        ...(await deserializeAws_json1_1InvalidRepositoryDescriptionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidSystemTagUsageException":
    case "com.amazonaws.codecommit#InvalidSystemTagUsageException":
      response = {
        ...(await deserializeAws_json1_1InvalidSystemTagUsageExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTagsMapException":
    case "com.amazonaws.codecommit#InvalidTagsMapException":
      response = {
        ...(await deserializeAws_json1_1InvalidTagsMapExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryLimitExceededException":
    case "com.amazonaws.codecommit#RepositoryLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RepositoryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNameExistsException":
    case "com.amazonaws.codecommit#RepositoryNameExistsException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNameExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TagPolicyException":
    case "com.amazonaws.codecommit#TagPolicyException":
      response = {
        ...(await deserializeAws_json1_1TagPolicyExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.codecommit#TooManyTagsException":
      response = {
        ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CommitDoesNotExistException":
    case "com.amazonaws.codecommit#CommitDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CommitMessageLengthExceededException":
    case "com.amazonaws.codecommit#CommitMessageLengthExceededException":
      response = {
        ...(await deserializeAws_json1_1CommitMessageLengthExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CommitRequiredException":
    case "com.amazonaws.codecommit#CommitRequiredException":
      response = {
        ...(await deserializeAws_json1_1CommitRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentReferenceUpdateException":
    case "com.amazonaws.codecommit#ConcurrentReferenceUpdateException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentReferenceUpdateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FileContentSizeLimitExceededException":
    case "com.amazonaws.codecommit#FileContentSizeLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1FileContentSizeLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FileModeRequiredException":
    case "com.amazonaws.codecommit#FileModeRequiredException":
      response = {
        ...(await deserializeAws_json1_1FileModeRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FolderContentSizeLimitExceededException":
    case "com.amazonaws.codecommit#FolderContentSizeLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1FolderContentSizeLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidCommitException":
    case "com.amazonaws.codecommit#InvalidCommitException":
      response = {
        ...(await deserializeAws_json1_1InvalidCommitExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidConflictDetailLevelException":
    case "com.amazonaws.codecommit#InvalidConflictDetailLevelException":
      response = {
        ...(await deserializeAws_json1_1InvalidConflictDetailLevelExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidConflictResolutionException":
    case "com.amazonaws.codecommit#InvalidConflictResolutionException":
      response = {
        ...(await deserializeAws_json1_1InvalidConflictResolutionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidConflictResolutionStrategyException":
    case "com.amazonaws.codecommit#InvalidConflictResolutionStrategyException":
      response = {
        ...(await deserializeAws_json1_1InvalidConflictResolutionStrategyExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidEmailException":
    case "com.amazonaws.codecommit#InvalidEmailException":
      response = {
        ...(await deserializeAws_json1_1InvalidEmailExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidFileModeException":
    case "com.amazonaws.codecommit#InvalidFileModeException":
      response = {
        ...(await deserializeAws_json1_1InvalidFileModeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidMergeOptionException":
    case "com.amazonaws.codecommit#InvalidMergeOptionException":
      response = {
        ...(await deserializeAws_json1_1InvalidMergeOptionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPathException":
    case "com.amazonaws.codecommit#InvalidPathException":
      response = {
        ...(await deserializeAws_json1_1InvalidPathExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidReplacementContentException":
    case "com.amazonaws.codecommit#InvalidReplacementContentException":
      response = {
        ...(await deserializeAws_json1_1InvalidReplacementContentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidReplacementTypeException":
    case "com.amazonaws.codecommit#InvalidReplacementTypeException":
      response = {
        ...(await deserializeAws_json1_1InvalidReplacementTypeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ManualMergeRequiredException":
    case "com.amazonaws.codecommit#ManualMergeRequiredException":
      response = {
        ...(await deserializeAws_json1_1ManualMergeRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MaximumConflictResolutionEntriesExceededException":
    case "com.amazonaws.codecommit#MaximumConflictResolutionEntriesExceededException":
      response = {
        ...(await deserializeAws_json1_1MaximumConflictResolutionEntriesExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MaximumFileContentToLoadExceededException":
    case "com.amazonaws.codecommit#MaximumFileContentToLoadExceededException":
      response = {
        ...(await deserializeAws_json1_1MaximumFileContentToLoadExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MaximumItemsToCompareExceededException":
    case "com.amazonaws.codecommit#MaximumItemsToCompareExceededException":
      response = {
        ...(await deserializeAws_json1_1MaximumItemsToCompareExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MergeOptionRequiredException":
    case "com.amazonaws.codecommit#MergeOptionRequiredException":
      response = {
        ...(await deserializeAws_json1_1MergeOptionRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MultipleConflictResolutionEntriesException":
    case "com.amazonaws.codecommit#MultipleConflictResolutionEntriesException":
      response = {
        ...(await deserializeAws_json1_1MultipleConflictResolutionEntriesExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NameLengthExceededException":
    case "com.amazonaws.codecommit#NameLengthExceededException":
      response = {
        ...(await deserializeAws_json1_1NameLengthExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PathRequiredException":
    case "com.amazonaws.codecommit#PathRequiredException":
      response = {
        ...(await deserializeAws_json1_1PathRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ReplacementContentRequiredException":
    case "com.amazonaws.codecommit#ReplacementContentRequiredException":
      response = {
        ...(await deserializeAws_json1_1ReplacementContentRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ReplacementTypeRequiredException":
    case "com.amazonaws.codecommit#ReplacementTypeRequiredException":
      response = {
        ...(await deserializeAws_json1_1ReplacementTypeRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TipsDivergenceExceededException":
    case "com.amazonaws.codecommit#TipsDivergenceExceededException":
      response = {
        ...(await deserializeAws_json1_1TipsDivergenceExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApprovalRuleTemplateInUseException":
    case "com.amazonaws.codecommit#ApprovalRuleTemplateInUseException":
      response = {
        ...(await deserializeAws_json1_1ApprovalRuleTemplateInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ApprovalRuleTemplateNameRequiredException":
    case "com.amazonaws.codecommit#ApprovalRuleTemplateNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1ApprovalRuleTemplateNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidApprovalRuleTemplateNameException":
    case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidApprovalRuleTemplateNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BranchNameRequiredException":
    case "com.amazonaws.codecommit#BranchNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1BranchNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DefaultBranchCannotBeDeletedException":
    case "com.amazonaws.codecommit#DefaultBranchCannotBeDeletedException":
      response = {
        ...(await deserializeAws_json1_1DefaultBranchCannotBeDeletedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidBranchNameException":
    case "com.amazonaws.codecommit#InvalidBranchNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidBranchNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CommentDeletedException":
    case "com.amazonaws.codecommit#CommentDeletedException":
      response = {
        ...(await deserializeAws_json1_1CommentDeletedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CommentDoesNotExistException":
    case "com.amazonaws.codecommit#CommentDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1CommentDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CommentIdRequiredException":
    case "com.amazonaws.codecommit#CommentIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1CommentIdRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidCommentIdException":
    case "com.amazonaws.codecommit#InvalidCommentIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidCommentIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BranchDoesNotExistException":
    case "com.amazonaws.codecommit#BranchDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1BranchDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BranchNameIsTagNameException":
    case "com.amazonaws.codecommit#BranchNameIsTagNameException":
      response = {
        ...(await deserializeAws_json1_1BranchNameIsTagNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BranchNameRequiredException":
    case "com.amazonaws.codecommit#BranchNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1BranchNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CommitMessageLengthExceededException":
    case "com.amazonaws.codecommit#CommitMessageLengthExceededException":
      response = {
        ...(await deserializeAws_json1_1CommitMessageLengthExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FileDoesNotExistException":
    case "com.amazonaws.codecommit#FileDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1FileDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidBranchNameException":
    case "com.amazonaws.codecommit#InvalidBranchNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidBranchNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidEmailException":
    case "com.amazonaws.codecommit#InvalidEmailException":
      response = {
        ...(await deserializeAws_json1_1InvalidEmailExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParentCommitIdException":
    case "com.amazonaws.codecommit#InvalidParentCommitIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidParentCommitIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPathException":
    case "com.amazonaws.codecommit#InvalidPathException":
      response = {
        ...(await deserializeAws_json1_1InvalidPathExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NameLengthExceededException":
    case "com.amazonaws.codecommit#NameLengthExceededException":
      response = {
        ...(await deserializeAws_json1_1NameLengthExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ParentCommitDoesNotExistException":
    case "com.amazonaws.codecommit#ParentCommitDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1ParentCommitDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ParentCommitIdOutdatedException":
    case "com.amazonaws.codecommit#ParentCommitIdOutdatedException":
      response = {
        ...(await deserializeAws_json1_1ParentCommitIdOutdatedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ParentCommitIdRequiredException":
    case "com.amazonaws.codecommit#ParentCommitIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1ParentCommitIdRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PathRequiredException":
    case "com.amazonaws.codecommit#PathRequiredException":
      response = {
        ...(await deserializeAws_json1_1PathRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApprovalRuleNameRequiredException":
    case "com.amazonaws.codecommit#ApprovalRuleNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1ApprovalRuleNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CannotDeleteApprovalRuleFromTemplateException":
    case "com.amazonaws.codecommit#CannotDeleteApprovalRuleFromTemplateException":
      response = {
        ...(await deserializeAws_json1_1CannotDeleteApprovalRuleFromTemplateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidApprovalRuleNameException":
    case "com.amazonaws.codecommit#InvalidApprovalRuleNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidApprovalRuleNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPullRequestIdException":
    case "com.amazonaws.codecommit#InvalidPullRequestIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PullRequestAlreadyClosedException":
    case "com.amazonaws.codecommit#PullRequestAlreadyClosedException":
      response = {
        ...(await deserializeAws_json1_1PullRequestAlreadyClosedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PullRequestDoesNotExistException":
    case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PullRequestIdRequiredException":
    case "com.amazonaws.codecommit#PullRequestIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CommitDoesNotExistException":
    case "com.amazonaws.codecommit#CommitDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CommitRequiredException":
    case "com.amazonaws.codecommit#CommitRequiredException":
      response = {
        ...(await deserializeAws_json1_1CommitRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FileDoesNotExistException":
    case "com.amazonaws.codecommit#FileDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1FileDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidCommitException":
    case "com.amazonaws.codecommit#InvalidCommitException":
      response = {
        ...(await deserializeAws_json1_1InvalidCommitExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidConflictDetailLevelException":
    case "com.amazonaws.codecommit#InvalidConflictDetailLevelException":
      response = {
        ...(await deserializeAws_json1_1InvalidConflictDetailLevelExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidConflictResolutionStrategyException":
    case "com.amazonaws.codecommit#InvalidConflictResolutionStrategyException":
      response = {
        ...(await deserializeAws_json1_1InvalidConflictResolutionStrategyExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidContinuationTokenException":
    case "com.amazonaws.codecommit#InvalidContinuationTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidContinuationTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidMaxMergeHunksException":
    case "com.amazonaws.codecommit#InvalidMaxMergeHunksException":
      response = {
        ...(await deserializeAws_json1_1InvalidMaxMergeHunksExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidMergeOptionException":
    case "com.amazonaws.codecommit#InvalidMergeOptionException":
      response = {
        ...(await deserializeAws_json1_1InvalidMergeOptionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPathException":
    case "com.amazonaws.codecommit#InvalidPathException":
      response = {
        ...(await deserializeAws_json1_1InvalidPathExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MaximumFileContentToLoadExceededException":
    case "com.amazonaws.codecommit#MaximumFileContentToLoadExceededException":
      response = {
        ...(await deserializeAws_json1_1MaximumFileContentToLoadExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MaximumItemsToCompareExceededException":
    case "com.amazonaws.codecommit#MaximumItemsToCompareExceededException":
      response = {
        ...(await deserializeAws_json1_1MaximumItemsToCompareExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MergeOptionRequiredException":
    case "com.amazonaws.codecommit#MergeOptionRequiredException":
      response = {
        ...(await deserializeAws_json1_1MergeOptionRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PathRequiredException":
    case "com.amazonaws.codecommit#PathRequiredException":
      response = {
        ...(await deserializeAws_json1_1PathRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TipsDivergenceExceededException":
    case "com.amazonaws.codecommit#TipsDivergenceExceededException":
      response = {
        ...(await deserializeAws_json1_1TipsDivergenceExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ActorDoesNotExistException":
    case "com.amazonaws.codecommit#ActorDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1ActorDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidActorArnException":
    case "com.amazonaws.codecommit#InvalidActorArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidActorArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidContinuationTokenException":
    case "com.amazonaws.codecommit#InvalidContinuationTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidContinuationTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidMaxResultsException":
    case "com.amazonaws.codecommit#InvalidMaxResultsException":
      response = {
        ...(await deserializeAws_json1_1InvalidMaxResultsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPullRequestEventTypeException":
    case "com.amazonaws.codecommit#InvalidPullRequestEventTypeException":
      response = {
        ...(await deserializeAws_json1_1InvalidPullRequestEventTypeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPullRequestIdException":
    case "com.amazonaws.codecommit#InvalidPullRequestIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PullRequestDoesNotExistException":
    case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PullRequestIdRequiredException":
    case "com.amazonaws.codecommit#PullRequestIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApprovalRuleTemplateDoesNotExistException":
    case "com.amazonaws.codecommit#ApprovalRuleTemplateDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1ApprovalRuleTemplateDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ApprovalRuleTemplateNameRequiredException":
    case "com.amazonaws.codecommit#ApprovalRuleTemplateNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1ApprovalRuleTemplateNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidApprovalRuleTemplateNameException":
    case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidApprovalRuleTemplateNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPullRequestIdException":
    case "com.amazonaws.codecommit#InvalidPullRequestIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRevisionIdException":
    case "com.amazonaws.codecommit#InvalidRevisionIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidRevisionIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PullRequestDoesNotExistException":
    case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PullRequestIdRequiredException":
    case "com.amazonaws.codecommit#PullRequestIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RevisionIdRequiredException":
    case "com.amazonaws.codecommit#RevisionIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1RevisionIdRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RevisionNotCurrentException":
    case "com.amazonaws.codecommit#RevisionNotCurrentException":
      response = {
        ...(await deserializeAws_json1_1RevisionNotCurrentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApprovalRuleTemplateDoesNotExistException":
    case "com.amazonaws.codecommit#ApprovalRuleTemplateDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1ApprovalRuleTemplateDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ApprovalRuleTemplateNameRequiredException":
    case "com.amazonaws.codecommit#ApprovalRuleTemplateNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1ApprovalRuleTemplateNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidApprovalRuleTemplateNameException":
    case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidApprovalRuleTemplateNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BlobIdDoesNotExistException":
    case "com.amazonaws.codecommit#BlobIdDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1BlobIdDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BlobIdRequiredException":
    case "com.amazonaws.codecommit#BlobIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1BlobIdRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FileTooLargeException":
    case "com.amazonaws.codecommit#FileTooLargeException":
      response = {
        ...(await deserializeAws_json1_1FileTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidBlobIdException":
    case "com.amazonaws.codecommit#InvalidBlobIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidBlobIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BranchDoesNotExistException":
    case "com.amazonaws.codecommit#BranchDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1BranchDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BranchNameRequiredException":
    case "com.amazonaws.codecommit#BranchNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1BranchNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidBranchNameException":
    case "com.amazonaws.codecommit#InvalidBranchNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidBranchNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CommentDeletedException":
    case "com.amazonaws.codecommit#CommentDeletedException":
      response = {
        ...(await deserializeAws_json1_1CommentDeletedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CommentDoesNotExistException":
    case "com.amazonaws.codecommit#CommentDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1CommentDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CommentIdRequiredException":
    case "com.amazonaws.codecommit#CommentIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1CommentIdRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidCommentIdException":
    case "com.amazonaws.codecommit#InvalidCommentIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidCommentIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CommentDeletedException":
    case "com.amazonaws.codecommit#CommentDeletedException":
      response = {
        ...(await deserializeAws_json1_1CommentDeletedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CommentDoesNotExistException":
    case "com.amazonaws.codecommit#CommentDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1CommentDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CommentIdRequiredException":
    case "com.amazonaws.codecommit#CommentIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1CommentIdRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidCommentIdException":
    case "com.amazonaws.codecommit#InvalidCommentIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidCommentIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidContinuationTokenException":
    case "com.amazonaws.codecommit#InvalidContinuationTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidContinuationTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidMaxResultsException":
    case "com.amazonaws.codecommit#InvalidMaxResultsException":
      response = {
        ...(await deserializeAws_json1_1InvalidMaxResultsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidReactionUserArnException":
    case "com.amazonaws.codecommit#InvalidReactionUserArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidReactionUserArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CommitDoesNotExistException":
    case "com.amazonaws.codecommit#CommitDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CommitIdRequiredException":
    case "com.amazonaws.codecommit#CommitIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1CommitIdRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidCommitIdException":
    case "com.amazonaws.codecommit#InvalidCommitIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidCommitIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidContinuationTokenException":
    case "com.amazonaws.codecommit#InvalidContinuationTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidContinuationTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidMaxResultsException":
    case "com.amazonaws.codecommit#InvalidMaxResultsException":
      response = {
        ...(await deserializeAws_json1_1InvalidMaxResultsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CommitDoesNotExistException":
    case "com.amazonaws.codecommit#CommitDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CommitIdRequiredException":
    case "com.amazonaws.codecommit#CommitIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1CommitIdRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidCommitIdException":
    case "com.amazonaws.codecommit#InvalidCommitIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidCommitIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidContinuationTokenException":
    case "com.amazonaws.codecommit#InvalidContinuationTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidContinuationTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidMaxResultsException":
    case "com.amazonaws.codecommit#InvalidMaxResultsException":
      response = {
        ...(await deserializeAws_json1_1InvalidMaxResultsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPullRequestIdException":
    case "com.amazonaws.codecommit#InvalidPullRequestIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PullRequestDoesNotExistException":
    case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PullRequestIdRequiredException":
    case "com.amazonaws.codecommit#PullRequestIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNotAssociatedWithPullRequestException":
    case "com.amazonaws.codecommit#RepositoryNotAssociatedWithPullRequestException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotAssociatedWithPullRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CommitIdDoesNotExistException":
    case "com.amazonaws.codecommit#CommitIdDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1CommitIdDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CommitIdRequiredException":
    case "com.amazonaws.codecommit#CommitIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1CommitIdRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidCommitIdException":
    case "com.amazonaws.codecommit#InvalidCommitIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidCommitIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CommitDoesNotExistException":
    case "com.amazonaws.codecommit#CommitDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CommitRequiredException":
    case "com.amazonaws.codecommit#CommitRequiredException":
      response = {
        ...(await deserializeAws_json1_1CommitRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidCommitException":
    case "com.amazonaws.codecommit#InvalidCommitException":
      response = {
        ...(await deserializeAws_json1_1InvalidCommitExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidCommitIdException":
    case "com.amazonaws.codecommit#InvalidCommitIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidCommitIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidContinuationTokenException":
    case "com.amazonaws.codecommit#InvalidContinuationTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidContinuationTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidMaxResultsException":
    case "com.amazonaws.codecommit#InvalidMaxResultsException":
      response = {
        ...(await deserializeAws_json1_1InvalidMaxResultsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPathException":
    case "com.amazonaws.codecommit#InvalidPathException":
      response = {
        ...(await deserializeAws_json1_1InvalidPathExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PathDoesNotExistException":
    case "com.amazonaws.codecommit#PathDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1PathDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CommitDoesNotExistException":
    case "com.amazonaws.codecommit#CommitDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FileDoesNotExistException":
    case "com.amazonaws.codecommit#FileDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1FileDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FileTooLargeException":
    case "com.amazonaws.codecommit#FileTooLargeException":
      response = {
        ...(await deserializeAws_json1_1FileTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidCommitException":
    case "com.amazonaws.codecommit#InvalidCommitException":
      response = {
        ...(await deserializeAws_json1_1InvalidCommitExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPathException":
    case "com.amazonaws.codecommit#InvalidPathException":
      response = {
        ...(await deserializeAws_json1_1InvalidPathExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PathRequiredException":
    case "com.amazonaws.codecommit#PathRequiredException":
      response = {
        ...(await deserializeAws_json1_1PathRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CommitDoesNotExistException":
    case "com.amazonaws.codecommit#CommitDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FolderDoesNotExistException":
    case "com.amazonaws.codecommit#FolderDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1FolderDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidCommitException":
    case "com.amazonaws.codecommit#InvalidCommitException":
      response = {
        ...(await deserializeAws_json1_1InvalidCommitExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPathException":
    case "com.amazonaws.codecommit#InvalidPathException":
      response = {
        ...(await deserializeAws_json1_1InvalidPathExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PathRequiredException":
    case "com.amazonaws.codecommit#PathRequiredException":
      response = {
        ...(await deserializeAws_json1_1PathRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CommitDoesNotExistException":
    case "com.amazonaws.codecommit#CommitDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CommitRequiredException":
    case "com.amazonaws.codecommit#CommitRequiredException":
      response = {
        ...(await deserializeAws_json1_1CommitRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidCommitException":
    case "com.amazonaws.codecommit#InvalidCommitException":
      response = {
        ...(await deserializeAws_json1_1InvalidCommitExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidConflictDetailLevelException":
    case "com.amazonaws.codecommit#InvalidConflictDetailLevelException":
      response = {
        ...(await deserializeAws_json1_1InvalidConflictDetailLevelExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidConflictResolutionStrategyException":
    case "com.amazonaws.codecommit#InvalidConflictResolutionStrategyException":
      response = {
        ...(await deserializeAws_json1_1InvalidConflictResolutionStrategyExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CommitDoesNotExistException":
    case "com.amazonaws.codecommit#CommitDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CommitRequiredException":
    case "com.amazonaws.codecommit#CommitRequiredException":
      response = {
        ...(await deserializeAws_json1_1CommitRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidCommitException":
    case "com.amazonaws.codecommit#InvalidCommitException":
      response = {
        ...(await deserializeAws_json1_1InvalidCommitExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidConflictDetailLevelException":
    case "com.amazonaws.codecommit#InvalidConflictDetailLevelException":
      response = {
        ...(await deserializeAws_json1_1InvalidConflictDetailLevelExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidConflictResolutionStrategyException":
    case "com.amazonaws.codecommit#InvalidConflictResolutionStrategyException":
      response = {
        ...(await deserializeAws_json1_1InvalidConflictResolutionStrategyExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidContinuationTokenException":
    case "com.amazonaws.codecommit#InvalidContinuationTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidContinuationTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidDestinationCommitSpecifierException":
    case "com.amazonaws.codecommit#InvalidDestinationCommitSpecifierException":
      response = {
        ...(await deserializeAws_json1_1InvalidDestinationCommitSpecifierExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidMaxConflictFilesException":
    case "com.amazonaws.codecommit#InvalidMaxConflictFilesException":
      response = {
        ...(await deserializeAws_json1_1InvalidMaxConflictFilesExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidMergeOptionException":
    case "com.amazonaws.codecommit#InvalidMergeOptionException":
      response = {
        ...(await deserializeAws_json1_1InvalidMergeOptionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidSourceCommitSpecifierException":
    case "com.amazonaws.codecommit#InvalidSourceCommitSpecifierException":
      response = {
        ...(await deserializeAws_json1_1InvalidSourceCommitSpecifierExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MaximumFileContentToLoadExceededException":
    case "com.amazonaws.codecommit#MaximumFileContentToLoadExceededException":
      response = {
        ...(await deserializeAws_json1_1MaximumFileContentToLoadExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MaximumItemsToCompareExceededException":
    case "com.amazonaws.codecommit#MaximumItemsToCompareExceededException":
      response = {
        ...(await deserializeAws_json1_1MaximumItemsToCompareExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MergeOptionRequiredException":
    case "com.amazonaws.codecommit#MergeOptionRequiredException":
      response = {
        ...(await deserializeAws_json1_1MergeOptionRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TipsDivergenceExceededException":
    case "com.amazonaws.codecommit#TipsDivergenceExceededException":
      response = {
        ...(await deserializeAws_json1_1TipsDivergenceExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CommitDoesNotExistException":
    case "com.amazonaws.codecommit#CommitDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CommitRequiredException":
    case "com.amazonaws.codecommit#CommitRequiredException":
      response = {
        ...(await deserializeAws_json1_1CommitRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidCommitException":
    case "com.amazonaws.codecommit#InvalidCommitException":
      response = {
        ...(await deserializeAws_json1_1InvalidCommitExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidConflictDetailLevelException":
    case "com.amazonaws.codecommit#InvalidConflictDetailLevelException":
      response = {
        ...(await deserializeAws_json1_1InvalidConflictDetailLevelExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidConflictResolutionStrategyException":
    case "com.amazonaws.codecommit#InvalidConflictResolutionStrategyException":
      response = {
        ...(await deserializeAws_json1_1InvalidConflictResolutionStrategyExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MaximumFileContentToLoadExceededException":
    case "com.amazonaws.codecommit#MaximumFileContentToLoadExceededException":
      response = {
        ...(await deserializeAws_json1_1MaximumFileContentToLoadExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MaximumItemsToCompareExceededException":
    case "com.amazonaws.codecommit#MaximumItemsToCompareExceededException":
      response = {
        ...(await deserializeAws_json1_1MaximumItemsToCompareExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TipsDivergenceExceededException":
    case "com.amazonaws.codecommit#TipsDivergenceExceededException":
      response = {
        ...(await deserializeAws_json1_1TipsDivergenceExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPullRequestIdException":
    case "com.amazonaws.codecommit#InvalidPullRequestIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PullRequestDoesNotExistException":
    case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PullRequestIdRequiredException":
    case "com.amazonaws.codecommit#PullRequestIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPullRequestIdException":
    case "com.amazonaws.codecommit#InvalidPullRequestIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRevisionIdException":
    case "com.amazonaws.codecommit#InvalidRevisionIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidRevisionIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PullRequestDoesNotExistException":
    case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PullRequestIdRequiredException":
    case "com.amazonaws.codecommit#PullRequestIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RevisionIdRequiredException":
    case "com.amazonaws.codecommit#RevisionIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1RevisionIdRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPullRequestIdException":
    case "com.amazonaws.codecommit#InvalidPullRequestIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRevisionIdException":
    case "com.amazonaws.codecommit#InvalidRevisionIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidRevisionIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PullRequestDoesNotExistException":
    case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PullRequestIdRequiredException":
    case "com.amazonaws.codecommit#PullRequestIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RevisionIdRequiredException":
    case "com.amazonaws.codecommit#RevisionIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1RevisionIdRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidContinuationTokenException":
    case "com.amazonaws.codecommit#InvalidContinuationTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidContinuationTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidMaxResultsException":
    case "com.amazonaws.codecommit#InvalidMaxResultsException":
      response = {
        ...(await deserializeAws_json1_1InvalidMaxResultsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidContinuationTokenException":
    case "com.amazonaws.codecommit#InvalidContinuationTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidContinuationTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidMaxResultsException":
    case "com.amazonaws.codecommit#InvalidMaxResultsException":
      response = {
        ...(await deserializeAws_json1_1InvalidMaxResultsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidContinuationTokenException":
    case "com.amazonaws.codecommit#InvalidContinuationTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidContinuationTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorDoesNotExistException":
    case "com.amazonaws.codecommit#AuthorDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1AuthorDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAuthorArnException":
    case "com.amazonaws.codecommit#InvalidAuthorArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidAuthorArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidContinuationTokenException":
    case "com.amazonaws.codecommit#InvalidContinuationTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidContinuationTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidMaxResultsException":
    case "com.amazonaws.codecommit#InvalidMaxResultsException":
      response = {
        ...(await deserializeAws_json1_1InvalidMaxResultsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPullRequestStatusException":
    case "com.amazonaws.codecommit#InvalidPullRequestStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidPullRequestStatusExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidContinuationTokenException":
    case "com.amazonaws.codecommit#InvalidContinuationTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidContinuationTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidOrderException":
    case "com.amazonaws.codecommit#InvalidOrderException":
      response = {
        ...(await deserializeAws_json1_1InvalidOrderExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidSortByException":
    case "com.amazonaws.codecommit#InvalidSortByException":
      response = {
        ...(await deserializeAws_json1_1InvalidSortByExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApprovalRuleTemplateDoesNotExistException":
    case "com.amazonaws.codecommit#ApprovalRuleTemplateDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1ApprovalRuleTemplateDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ApprovalRuleTemplateNameRequiredException":
    case "com.amazonaws.codecommit#ApprovalRuleTemplateNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1ApprovalRuleTemplateNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidApprovalRuleTemplateNameException":
    case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidApprovalRuleTemplateNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidContinuationTokenException":
    case "com.amazonaws.codecommit#InvalidContinuationTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidContinuationTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidMaxResultsException":
    case "com.amazonaws.codecommit#InvalidMaxResultsException":
      response = {
        ...(await deserializeAws_json1_1InvalidMaxResultsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidResourceArnException":
    case "com.amazonaws.codecommit#InvalidResourceArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceArnRequiredException":
    case "com.amazonaws.codecommit#ResourceArnRequiredException":
      response = {
        ...(await deserializeAws_json1_1ResourceArnRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BranchDoesNotExistException":
    case "com.amazonaws.codecommit#BranchDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1BranchDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BranchNameIsTagNameException":
    case "com.amazonaws.codecommit#BranchNameIsTagNameException":
      response = {
        ...(await deserializeAws_json1_1BranchNameIsTagNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BranchNameRequiredException":
    case "com.amazonaws.codecommit#BranchNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1BranchNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CommitDoesNotExistException":
    case "com.amazonaws.codecommit#CommitDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CommitRequiredException":
    case "com.amazonaws.codecommit#CommitRequiredException":
      response = {
        ...(await deserializeAws_json1_1CommitRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentReferenceUpdateException":
    case "com.amazonaws.codecommit#ConcurrentReferenceUpdateException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentReferenceUpdateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidBranchNameException":
    case "com.amazonaws.codecommit#InvalidBranchNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidBranchNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidCommitException":
    case "com.amazonaws.codecommit#InvalidCommitException":
      response = {
        ...(await deserializeAws_json1_1InvalidCommitExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTargetBranchException":
    case "com.amazonaws.codecommit#InvalidTargetBranchException":
      response = {
        ...(await deserializeAws_json1_1InvalidTargetBranchExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ManualMergeRequiredException":
    case "com.amazonaws.codecommit#ManualMergeRequiredException":
      response = {
        ...(await deserializeAws_json1_1ManualMergeRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TipsDivergenceExceededException":
    case "com.amazonaws.codecommit#TipsDivergenceExceededException":
      response = {
        ...(await deserializeAws_json1_1TipsDivergenceExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BranchDoesNotExistException":
    case "com.amazonaws.codecommit#BranchDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1BranchDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BranchNameIsTagNameException":
    case "com.amazonaws.codecommit#BranchNameIsTagNameException":
      response = {
        ...(await deserializeAws_json1_1BranchNameIsTagNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BranchNameRequiredException":
    case "com.amazonaws.codecommit#BranchNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1BranchNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CommitDoesNotExistException":
    case "com.amazonaws.codecommit#CommitDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CommitMessageLengthExceededException":
    case "com.amazonaws.codecommit#CommitMessageLengthExceededException":
      response = {
        ...(await deserializeAws_json1_1CommitMessageLengthExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CommitRequiredException":
    case "com.amazonaws.codecommit#CommitRequiredException":
      response = {
        ...(await deserializeAws_json1_1CommitRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentReferenceUpdateException":
    case "com.amazonaws.codecommit#ConcurrentReferenceUpdateException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentReferenceUpdateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FileContentSizeLimitExceededException":
    case "com.amazonaws.codecommit#FileContentSizeLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1FileContentSizeLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FileModeRequiredException":
    case "com.amazonaws.codecommit#FileModeRequiredException":
      response = {
        ...(await deserializeAws_json1_1FileModeRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FolderContentSizeLimitExceededException":
    case "com.amazonaws.codecommit#FolderContentSizeLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1FolderContentSizeLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidBranchNameException":
    case "com.amazonaws.codecommit#InvalidBranchNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidBranchNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidCommitException":
    case "com.amazonaws.codecommit#InvalidCommitException":
      response = {
        ...(await deserializeAws_json1_1InvalidCommitExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidConflictDetailLevelException":
    case "com.amazonaws.codecommit#InvalidConflictDetailLevelException":
      response = {
        ...(await deserializeAws_json1_1InvalidConflictDetailLevelExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidConflictResolutionException":
    case "com.amazonaws.codecommit#InvalidConflictResolutionException":
      response = {
        ...(await deserializeAws_json1_1InvalidConflictResolutionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidConflictResolutionStrategyException":
    case "com.amazonaws.codecommit#InvalidConflictResolutionStrategyException":
      response = {
        ...(await deserializeAws_json1_1InvalidConflictResolutionStrategyExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidEmailException":
    case "com.amazonaws.codecommit#InvalidEmailException":
      response = {
        ...(await deserializeAws_json1_1InvalidEmailExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidFileModeException":
    case "com.amazonaws.codecommit#InvalidFileModeException":
      response = {
        ...(await deserializeAws_json1_1InvalidFileModeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPathException":
    case "com.amazonaws.codecommit#InvalidPathException":
      response = {
        ...(await deserializeAws_json1_1InvalidPathExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidReplacementContentException":
    case "com.amazonaws.codecommit#InvalidReplacementContentException":
      response = {
        ...(await deserializeAws_json1_1InvalidReplacementContentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidReplacementTypeException":
    case "com.amazonaws.codecommit#InvalidReplacementTypeException":
      response = {
        ...(await deserializeAws_json1_1InvalidReplacementTypeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTargetBranchException":
    case "com.amazonaws.codecommit#InvalidTargetBranchException":
      response = {
        ...(await deserializeAws_json1_1InvalidTargetBranchExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ManualMergeRequiredException":
    case "com.amazonaws.codecommit#ManualMergeRequiredException":
      response = {
        ...(await deserializeAws_json1_1ManualMergeRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MaximumConflictResolutionEntriesExceededException":
    case "com.amazonaws.codecommit#MaximumConflictResolutionEntriesExceededException":
      response = {
        ...(await deserializeAws_json1_1MaximumConflictResolutionEntriesExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MaximumFileContentToLoadExceededException":
    case "com.amazonaws.codecommit#MaximumFileContentToLoadExceededException":
      response = {
        ...(await deserializeAws_json1_1MaximumFileContentToLoadExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MaximumItemsToCompareExceededException":
    case "com.amazonaws.codecommit#MaximumItemsToCompareExceededException":
      response = {
        ...(await deserializeAws_json1_1MaximumItemsToCompareExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MultipleConflictResolutionEntriesException":
    case "com.amazonaws.codecommit#MultipleConflictResolutionEntriesException":
      response = {
        ...(await deserializeAws_json1_1MultipleConflictResolutionEntriesExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NameLengthExceededException":
    case "com.amazonaws.codecommit#NameLengthExceededException":
      response = {
        ...(await deserializeAws_json1_1NameLengthExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PathRequiredException":
    case "com.amazonaws.codecommit#PathRequiredException":
      response = {
        ...(await deserializeAws_json1_1PathRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ReplacementContentRequiredException":
    case "com.amazonaws.codecommit#ReplacementContentRequiredException":
      response = {
        ...(await deserializeAws_json1_1ReplacementContentRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ReplacementTypeRequiredException":
    case "com.amazonaws.codecommit#ReplacementTypeRequiredException":
      response = {
        ...(await deserializeAws_json1_1ReplacementTypeRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TipsDivergenceExceededException":
    case "com.amazonaws.codecommit#TipsDivergenceExceededException":
      response = {
        ...(await deserializeAws_json1_1TipsDivergenceExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BranchDoesNotExistException":
    case "com.amazonaws.codecommit#BranchDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1BranchDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BranchNameIsTagNameException":
    case "com.amazonaws.codecommit#BranchNameIsTagNameException":
      response = {
        ...(await deserializeAws_json1_1BranchNameIsTagNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BranchNameRequiredException":
    case "com.amazonaws.codecommit#BranchNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1BranchNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CommitDoesNotExistException":
    case "com.amazonaws.codecommit#CommitDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CommitMessageLengthExceededException":
    case "com.amazonaws.codecommit#CommitMessageLengthExceededException":
      response = {
        ...(await deserializeAws_json1_1CommitMessageLengthExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CommitRequiredException":
    case "com.amazonaws.codecommit#CommitRequiredException":
      response = {
        ...(await deserializeAws_json1_1CommitRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentReferenceUpdateException":
    case "com.amazonaws.codecommit#ConcurrentReferenceUpdateException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentReferenceUpdateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FileContentSizeLimitExceededException":
    case "com.amazonaws.codecommit#FileContentSizeLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1FileContentSizeLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FileModeRequiredException":
    case "com.amazonaws.codecommit#FileModeRequiredException":
      response = {
        ...(await deserializeAws_json1_1FileModeRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FolderContentSizeLimitExceededException":
    case "com.amazonaws.codecommit#FolderContentSizeLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1FolderContentSizeLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidBranchNameException":
    case "com.amazonaws.codecommit#InvalidBranchNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidBranchNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidCommitException":
    case "com.amazonaws.codecommit#InvalidCommitException":
      response = {
        ...(await deserializeAws_json1_1InvalidCommitExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidConflictDetailLevelException":
    case "com.amazonaws.codecommit#InvalidConflictDetailLevelException":
      response = {
        ...(await deserializeAws_json1_1InvalidConflictDetailLevelExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidConflictResolutionException":
    case "com.amazonaws.codecommit#InvalidConflictResolutionException":
      response = {
        ...(await deserializeAws_json1_1InvalidConflictResolutionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidConflictResolutionStrategyException":
    case "com.amazonaws.codecommit#InvalidConflictResolutionStrategyException":
      response = {
        ...(await deserializeAws_json1_1InvalidConflictResolutionStrategyExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidEmailException":
    case "com.amazonaws.codecommit#InvalidEmailException":
      response = {
        ...(await deserializeAws_json1_1InvalidEmailExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidFileModeException":
    case "com.amazonaws.codecommit#InvalidFileModeException":
      response = {
        ...(await deserializeAws_json1_1InvalidFileModeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPathException":
    case "com.amazonaws.codecommit#InvalidPathException":
      response = {
        ...(await deserializeAws_json1_1InvalidPathExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidReplacementContentException":
    case "com.amazonaws.codecommit#InvalidReplacementContentException":
      response = {
        ...(await deserializeAws_json1_1InvalidReplacementContentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidReplacementTypeException":
    case "com.amazonaws.codecommit#InvalidReplacementTypeException":
      response = {
        ...(await deserializeAws_json1_1InvalidReplacementTypeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTargetBranchException":
    case "com.amazonaws.codecommit#InvalidTargetBranchException":
      response = {
        ...(await deserializeAws_json1_1InvalidTargetBranchExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ManualMergeRequiredException":
    case "com.amazonaws.codecommit#ManualMergeRequiredException":
      response = {
        ...(await deserializeAws_json1_1ManualMergeRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MaximumConflictResolutionEntriesExceededException":
    case "com.amazonaws.codecommit#MaximumConflictResolutionEntriesExceededException":
      response = {
        ...(await deserializeAws_json1_1MaximumConflictResolutionEntriesExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MaximumFileContentToLoadExceededException":
    case "com.amazonaws.codecommit#MaximumFileContentToLoadExceededException":
      response = {
        ...(await deserializeAws_json1_1MaximumFileContentToLoadExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MaximumItemsToCompareExceededException":
    case "com.amazonaws.codecommit#MaximumItemsToCompareExceededException":
      response = {
        ...(await deserializeAws_json1_1MaximumItemsToCompareExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MultipleConflictResolutionEntriesException":
    case "com.amazonaws.codecommit#MultipleConflictResolutionEntriesException":
      response = {
        ...(await deserializeAws_json1_1MultipleConflictResolutionEntriesExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NameLengthExceededException":
    case "com.amazonaws.codecommit#NameLengthExceededException":
      response = {
        ...(await deserializeAws_json1_1NameLengthExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PathRequiredException":
    case "com.amazonaws.codecommit#PathRequiredException":
      response = {
        ...(await deserializeAws_json1_1PathRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ReplacementContentRequiredException":
    case "com.amazonaws.codecommit#ReplacementContentRequiredException":
      response = {
        ...(await deserializeAws_json1_1ReplacementContentRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ReplacementTypeRequiredException":
    case "com.amazonaws.codecommit#ReplacementTypeRequiredException":
      response = {
        ...(await deserializeAws_json1_1ReplacementTypeRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TipsDivergenceExceededException":
    case "com.amazonaws.codecommit#TipsDivergenceExceededException":
      response = {
        ...(await deserializeAws_json1_1TipsDivergenceExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentReferenceUpdateException":
    case "com.amazonaws.codecommit#ConcurrentReferenceUpdateException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentReferenceUpdateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidCommitIdException":
    case "com.amazonaws.codecommit#InvalidCommitIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidCommitIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPullRequestIdException":
    case "com.amazonaws.codecommit#InvalidPullRequestIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ManualMergeRequiredException":
    case "com.amazonaws.codecommit#ManualMergeRequiredException":
      response = {
        ...(await deserializeAws_json1_1ManualMergeRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PullRequestAlreadyClosedException":
    case "com.amazonaws.codecommit#PullRequestAlreadyClosedException":
      response = {
        ...(await deserializeAws_json1_1PullRequestAlreadyClosedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PullRequestApprovalRulesNotSatisfiedException":
    case "com.amazonaws.codecommit#PullRequestApprovalRulesNotSatisfiedException":
      response = {
        ...(await deserializeAws_json1_1PullRequestApprovalRulesNotSatisfiedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PullRequestDoesNotExistException":
    case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PullRequestIdRequiredException":
    case "com.amazonaws.codecommit#PullRequestIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ReferenceDoesNotExistException":
    case "com.amazonaws.codecommit#ReferenceDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1ReferenceDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNotAssociatedWithPullRequestException":
    case "com.amazonaws.codecommit#RepositoryNotAssociatedWithPullRequestException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotAssociatedWithPullRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TipOfSourceReferenceIsDifferentException":
    case "com.amazonaws.codecommit#TipOfSourceReferenceIsDifferentException":
      response = {
        ...(await deserializeAws_json1_1TipOfSourceReferenceIsDifferentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CommitMessageLengthExceededException":
    case "com.amazonaws.codecommit#CommitMessageLengthExceededException":
      response = {
        ...(await deserializeAws_json1_1CommitMessageLengthExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentReferenceUpdateException":
    case "com.amazonaws.codecommit#ConcurrentReferenceUpdateException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentReferenceUpdateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FileContentSizeLimitExceededException":
    case "com.amazonaws.codecommit#FileContentSizeLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1FileContentSizeLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FolderContentSizeLimitExceededException":
    case "com.amazonaws.codecommit#FolderContentSizeLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1FolderContentSizeLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidCommitIdException":
    case "com.amazonaws.codecommit#InvalidCommitIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidCommitIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidConflictDetailLevelException":
    case "com.amazonaws.codecommit#InvalidConflictDetailLevelException":
      response = {
        ...(await deserializeAws_json1_1InvalidConflictDetailLevelExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidConflictResolutionException":
    case "com.amazonaws.codecommit#InvalidConflictResolutionException":
      response = {
        ...(await deserializeAws_json1_1InvalidConflictResolutionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidConflictResolutionStrategyException":
    case "com.amazonaws.codecommit#InvalidConflictResolutionStrategyException":
      response = {
        ...(await deserializeAws_json1_1InvalidConflictResolutionStrategyExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidEmailException":
    case "com.amazonaws.codecommit#InvalidEmailException":
      response = {
        ...(await deserializeAws_json1_1InvalidEmailExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidFileModeException":
    case "com.amazonaws.codecommit#InvalidFileModeException":
      response = {
        ...(await deserializeAws_json1_1InvalidFileModeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPathException":
    case "com.amazonaws.codecommit#InvalidPathException":
      response = {
        ...(await deserializeAws_json1_1InvalidPathExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPullRequestIdException":
    case "com.amazonaws.codecommit#InvalidPullRequestIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidReplacementContentException":
    case "com.amazonaws.codecommit#InvalidReplacementContentException":
      response = {
        ...(await deserializeAws_json1_1InvalidReplacementContentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidReplacementTypeException":
    case "com.amazonaws.codecommit#InvalidReplacementTypeException":
      response = {
        ...(await deserializeAws_json1_1InvalidReplacementTypeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ManualMergeRequiredException":
    case "com.amazonaws.codecommit#ManualMergeRequiredException":
      response = {
        ...(await deserializeAws_json1_1ManualMergeRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MaximumConflictResolutionEntriesExceededException":
    case "com.amazonaws.codecommit#MaximumConflictResolutionEntriesExceededException":
      response = {
        ...(await deserializeAws_json1_1MaximumConflictResolutionEntriesExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MaximumFileContentToLoadExceededException":
    case "com.amazonaws.codecommit#MaximumFileContentToLoadExceededException":
      response = {
        ...(await deserializeAws_json1_1MaximumFileContentToLoadExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MaximumItemsToCompareExceededException":
    case "com.amazonaws.codecommit#MaximumItemsToCompareExceededException":
      response = {
        ...(await deserializeAws_json1_1MaximumItemsToCompareExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MultipleConflictResolutionEntriesException":
    case "com.amazonaws.codecommit#MultipleConflictResolutionEntriesException":
      response = {
        ...(await deserializeAws_json1_1MultipleConflictResolutionEntriesExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NameLengthExceededException":
    case "com.amazonaws.codecommit#NameLengthExceededException":
      response = {
        ...(await deserializeAws_json1_1NameLengthExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PathRequiredException":
    case "com.amazonaws.codecommit#PathRequiredException":
      response = {
        ...(await deserializeAws_json1_1PathRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PullRequestAlreadyClosedException":
    case "com.amazonaws.codecommit#PullRequestAlreadyClosedException":
      response = {
        ...(await deserializeAws_json1_1PullRequestAlreadyClosedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PullRequestApprovalRulesNotSatisfiedException":
    case "com.amazonaws.codecommit#PullRequestApprovalRulesNotSatisfiedException":
      response = {
        ...(await deserializeAws_json1_1PullRequestApprovalRulesNotSatisfiedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PullRequestDoesNotExistException":
    case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PullRequestIdRequiredException":
    case "com.amazonaws.codecommit#PullRequestIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ReplacementContentRequiredException":
    case "com.amazonaws.codecommit#ReplacementContentRequiredException":
      response = {
        ...(await deserializeAws_json1_1ReplacementContentRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ReplacementTypeRequiredException":
    case "com.amazonaws.codecommit#ReplacementTypeRequiredException":
      response = {
        ...(await deserializeAws_json1_1ReplacementTypeRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNotAssociatedWithPullRequestException":
    case "com.amazonaws.codecommit#RepositoryNotAssociatedWithPullRequestException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotAssociatedWithPullRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TipOfSourceReferenceIsDifferentException":
    case "com.amazonaws.codecommit#TipOfSourceReferenceIsDifferentException":
      response = {
        ...(await deserializeAws_json1_1TipOfSourceReferenceIsDifferentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TipsDivergenceExceededException":
    case "com.amazonaws.codecommit#TipsDivergenceExceededException":
      response = {
        ...(await deserializeAws_json1_1TipsDivergenceExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CommitMessageLengthExceededException":
    case "com.amazonaws.codecommit#CommitMessageLengthExceededException":
      response = {
        ...(await deserializeAws_json1_1CommitMessageLengthExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentReferenceUpdateException":
    case "com.amazonaws.codecommit#ConcurrentReferenceUpdateException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentReferenceUpdateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FileContentSizeLimitExceededException":
    case "com.amazonaws.codecommit#FileContentSizeLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1FileContentSizeLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FolderContentSizeLimitExceededException":
    case "com.amazonaws.codecommit#FolderContentSizeLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1FolderContentSizeLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidCommitIdException":
    case "com.amazonaws.codecommit#InvalidCommitIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidCommitIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidConflictDetailLevelException":
    case "com.amazonaws.codecommit#InvalidConflictDetailLevelException":
      response = {
        ...(await deserializeAws_json1_1InvalidConflictDetailLevelExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidConflictResolutionException":
    case "com.amazonaws.codecommit#InvalidConflictResolutionException":
      response = {
        ...(await deserializeAws_json1_1InvalidConflictResolutionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidConflictResolutionStrategyException":
    case "com.amazonaws.codecommit#InvalidConflictResolutionStrategyException":
      response = {
        ...(await deserializeAws_json1_1InvalidConflictResolutionStrategyExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidEmailException":
    case "com.amazonaws.codecommit#InvalidEmailException":
      response = {
        ...(await deserializeAws_json1_1InvalidEmailExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidFileModeException":
    case "com.amazonaws.codecommit#InvalidFileModeException":
      response = {
        ...(await deserializeAws_json1_1InvalidFileModeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPathException":
    case "com.amazonaws.codecommit#InvalidPathException":
      response = {
        ...(await deserializeAws_json1_1InvalidPathExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPullRequestIdException":
    case "com.amazonaws.codecommit#InvalidPullRequestIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidReplacementContentException":
    case "com.amazonaws.codecommit#InvalidReplacementContentException":
      response = {
        ...(await deserializeAws_json1_1InvalidReplacementContentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidReplacementTypeException":
    case "com.amazonaws.codecommit#InvalidReplacementTypeException":
      response = {
        ...(await deserializeAws_json1_1InvalidReplacementTypeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ManualMergeRequiredException":
    case "com.amazonaws.codecommit#ManualMergeRequiredException":
      response = {
        ...(await deserializeAws_json1_1ManualMergeRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MaximumConflictResolutionEntriesExceededException":
    case "com.amazonaws.codecommit#MaximumConflictResolutionEntriesExceededException":
      response = {
        ...(await deserializeAws_json1_1MaximumConflictResolutionEntriesExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MaximumFileContentToLoadExceededException":
    case "com.amazonaws.codecommit#MaximumFileContentToLoadExceededException":
      response = {
        ...(await deserializeAws_json1_1MaximumFileContentToLoadExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MaximumItemsToCompareExceededException":
    case "com.amazonaws.codecommit#MaximumItemsToCompareExceededException":
      response = {
        ...(await deserializeAws_json1_1MaximumItemsToCompareExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MultipleConflictResolutionEntriesException":
    case "com.amazonaws.codecommit#MultipleConflictResolutionEntriesException":
      response = {
        ...(await deserializeAws_json1_1MultipleConflictResolutionEntriesExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NameLengthExceededException":
    case "com.amazonaws.codecommit#NameLengthExceededException":
      response = {
        ...(await deserializeAws_json1_1NameLengthExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PathRequiredException":
    case "com.amazonaws.codecommit#PathRequiredException":
      response = {
        ...(await deserializeAws_json1_1PathRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PullRequestAlreadyClosedException":
    case "com.amazonaws.codecommit#PullRequestAlreadyClosedException":
      response = {
        ...(await deserializeAws_json1_1PullRequestAlreadyClosedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PullRequestApprovalRulesNotSatisfiedException":
    case "com.amazonaws.codecommit#PullRequestApprovalRulesNotSatisfiedException":
      response = {
        ...(await deserializeAws_json1_1PullRequestApprovalRulesNotSatisfiedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PullRequestDoesNotExistException":
    case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PullRequestIdRequiredException":
    case "com.amazonaws.codecommit#PullRequestIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ReplacementContentRequiredException":
    case "com.amazonaws.codecommit#ReplacementContentRequiredException":
      response = {
        ...(await deserializeAws_json1_1ReplacementContentRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ReplacementTypeRequiredException":
    case "com.amazonaws.codecommit#ReplacementTypeRequiredException":
      response = {
        ...(await deserializeAws_json1_1ReplacementTypeRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNotAssociatedWithPullRequestException":
    case "com.amazonaws.codecommit#RepositoryNotAssociatedWithPullRequestException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotAssociatedWithPullRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TipOfSourceReferenceIsDifferentException":
    case "com.amazonaws.codecommit#TipOfSourceReferenceIsDifferentException":
      response = {
        ...(await deserializeAws_json1_1TipOfSourceReferenceIsDifferentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TipsDivergenceExceededException":
    case "com.amazonaws.codecommit#TipsDivergenceExceededException":
      response = {
        ...(await deserializeAws_json1_1TipsDivergenceExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidOverrideStatusException":
    case "com.amazonaws.codecommit#InvalidOverrideStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidOverrideStatusExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPullRequestIdException":
    case "com.amazonaws.codecommit#InvalidPullRequestIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRevisionIdException":
    case "com.amazonaws.codecommit#InvalidRevisionIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidRevisionIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OverrideAlreadySetException":
    case "com.amazonaws.codecommit#OverrideAlreadySetException":
      response = {
        ...(await deserializeAws_json1_1OverrideAlreadySetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OverrideStatusRequiredException":
    case "com.amazonaws.codecommit#OverrideStatusRequiredException":
      response = {
        ...(await deserializeAws_json1_1OverrideStatusRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PullRequestAlreadyClosedException":
    case "com.amazonaws.codecommit#PullRequestAlreadyClosedException":
      response = {
        ...(await deserializeAws_json1_1PullRequestAlreadyClosedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PullRequestDoesNotExistException":
    case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PullRequestIdRequiredException":
    case "com.amazonaws.codecommit#PullRequestIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RevisionIdRequiredException":
    case "com.amazonaws.codecommit#RevisionIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1RevisionIdRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RevisionNotCurrentException":
    case "com.amazonaws.codecommit#RevisionNotCurrentException":
      response = {
        ...(await deserializeAws_json1_1RevisionNotCurrentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BeforeCommitIdAndAfterCommitIdAreSameException":
    case "com.amazonaws.codecommit#BeforeCommitIdAndAfterCommitIdAreSameException":
      response = {
        ...(await deserializeAws_json1_1BeforeCommitIdAndAfterCommitIdAreSameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClientRequestTokenRequiredException":
    case "com.amazonaws.codecommit#ClientRequestTokenRequiredException":
      response = {
        ...(await deserializeAws_json1_1ClientRequestTokenRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CommentContentRequiredException":
    case "com.amazonaws.codecommit#CommentContentRequiredException":
      response = {
        ...(await deserializeAws_json1_1CommentContentRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CommentContentSizeLimitExceededException":
    case "com.amazonaws.codecommit#CommentContentSizeLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1CommentContentSizeLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CommitDoesNotExistException":
    case "com.amazonaws.codecommit#CommitDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CommitIdRequiredException":
    case "com.amazonaws.codecommit#CommitIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1CommitIdRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IdempotencyParameterMismatchException":
    case "com.amazonaws.codecommit#IdempotencyParameterMismatchException":
      response = {
        ...(await deserializeAws_json1_1IdempotencyParameterMismatchExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidClientRequestTokenException":
    case "com.amazonaws.codecommit#InvalidClientRequestTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidClientRequestTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidCommitIdException":
    case "com.amazonaws.codecommit#InvalidCommitIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidCommitIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidFileLocationException":
    case "com.amazonaws.codecommit#InvalidFileLocationException":
      response = {
        ...(await deserializeAws_json1_1InvalidFileLocationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidFilePositionException":
    case "com.amazonaws.codecommit#InvalidFilePositionException":
      response = {
        ...(await deserializeAws_json1_1InvalidFilePositionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPathException":
    case "com.amazonaws.codecommit#InvalidPathException":
      response = {
        ...(await deserializeAws_json1_1InvalidPathExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRelativeFileVersionEnumException":
    case "com.amazonaws.codecommit#InvalidRelativeFileVersionEnumException":
      response = {
        ...(await deserializeAws_json1_1InvalidRelativeFileVersionEnumExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PathDoesNotExistException":
    case "com.amazonaws.codecommit#PathDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1PathDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PathRequiredException":
    case "com.amazonaws.codecommit#PathRequiredException":
      response = {
        ...(await deserializeAws_json1_1PathRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BeforeCommitIdAndAfterCommitIdAreSameException":
    case "com.amazonaws.codecommit#BeforeCommitIdAndAfterCommitIdAreSameException":
      response = {
        ...(await deserializeAws_json1_1BeforeCommitIdAndAfterCommitIdAreSameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClientRequestTokenRequiredException":
    case "com.amazonaws.codecommit#ClientRequestTokenRequiredException":
      response = {
        ...(await deserializeAws_json1_1ClientRequestTokenRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CommentContentRequiredException":
    case "com.amazonaws.codecommit#CommentContentRequiredException":
      response = {
        ...(await deserializeAws_json1_1CommentContentRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CommentContentSizeLimitExceededException":
    case "com.amazonaws.codecommit#CommentContentSizeLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1CommentContentSizeLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CommitDoesNotExistException":
    case "com.amazonaws.codecommit#CommitDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CommitIdRequiredException":
    case "com.amazonaws.codecommit#CommitIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1CommitIdRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IdempotencyParameterMismatchException":
    case "com.amazonaws.codecommit#IdempotencyParameterMismatchException":
      response = {
        ...(await deserializeAws_json1_1IdempotencyParameterMismatchExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidClientRequestTokenException":
    case "com.amazonaws.codecommit#InvalidClientRequestTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidClientRequestTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidCommitIdException":
    case "com.amazonaws.codecommit#InvalidCommitIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidCommitIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidFileLocationException":
    case "com.amazonaws.codecommit#InvalidFileLocationException":
      response = {
        ...(await deserializeAws_json1_1InvalidFileLocationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidFilePositionException":
    case "com.amazonaws.codecommit#InvalidFilePositionException":
      response = {
        ...(await deserializeAws_json1_1InvalidFilePositionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPathException":
    case "com.amazonaws.codecommit#InvalidPathException":
      response = {
        ...(await deserializeAws_json1_1InvalidPathExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPullRequestIdException":
    case "com.amazonaws.codecommit#InvalidPullRequestIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRelativeFileVersionEnumException":
    case "com.amazonaws.codecommit#InvalidRelativeFileVersionEnumException":
      response = {
        ...(await deserializeAws_json1_1InvalidRelativeFileVersionEnumExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PathDoesNotExistException":
    case "com.amazonaws.codecommit#PathDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1PathDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PathRequiredException":
    case "com.amazonaws.codecommit#PathRequiredException":
      response = {
        ...(await deserializeAws_json1_1PathRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PullRequestDoesNotExistException":
    case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PullRequestIdRequiredException":
    case "com.amazonaws.codecommit#PullRequestIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNotAssociatedWithPullRequestException":
    case "com.amazonaws.codecommit#RepositoryNotAssociatedWithPullRequestException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotAssociatedWithPullRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientRequestTokenRequiredException":
    case "com.amazonaws.codecommit#ClientRequestTokenRequiredException":
      response = {
        ...(await deserializeAws_json1_1ClientRequestTokenRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CommentContentRequiredException":
    case "com.amazonaws.codecommit#CommentContentRequiredException":
      response = {
        ...(await deserializeAws_json1_1CommentContentRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CommentContentSizeLimitExceededException":
    case "com.amazonaws.codecommit#CommentContentSizeLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1CommentContentSizeLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CommentDoesNotExistException":
    case "com.amazonaws.codecommit#CommentDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1CommentDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CommentIdRequiredException":
    case "com.amazonaws.codecommit#CommentIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1CommentIdRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IdempotencyParameterMismatchException":
    case "com.amazonaws.codecommit#IdempotencyParameterMismatchException":
      response = {
        ...(await deserializeAws_json1_1IdempotencyParameterMismatchExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidClientRequestTokenException":
    case "com.amazonaws.codecommit#InvalidClientRequestTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidClientRequestTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidCommentIdException":
    case "com.amazonaws.codecommit#InvalidCommentIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidCommentIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CommentDeletedException":
    case "com.amazonaws.codecommit#CommentDeletedException":
      response = {
        ...(await deserializeAws_json1_1CommentDeletedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CommentDoesNotExistException":
    case "com.amazonaws.codecommit#CommentDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1CommentDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CommentIdRequiredException":
    case "com.amazonaws.codecommit#CommentIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1CommentIdRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidCommentIdException":
    case "com.amazonaws.codecommit#InvalidCommentIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidCommentIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidReactionValueException":
    case "com.amazonaws.codecommit#InvalidReactionValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidReactionValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ReactionLimitExceededException":
    case "com.amazonaws.codecommit#ReactionLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ReactionLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ReactionValueRequiredException":
    case "com.amazonaws.codecommit#ReactionValueRequiredException":
      response = {
        ...(await deserializeAws_json1_1ReactionValueRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BranchDoesNotExistException":
    case "com.amazonaws.codecommit#BranchDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1BranchDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BranchNameIsTagNameException":
    case "com.amazonaws.codecommit#BranchNameIsTagNameException":
      response = {
        ...(await deserializeAws_json1_1BranchNameIsTagNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BranchNameRequiredException":
    case "com.amazonaws.codecommit#BranchNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1BranchNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CommitMessageLengthExceededException":
    case "com.amazonaws.codecommit#CommitMessageLengthExceededException":
      response = {
        ...(await deserializeAws_json1_1CommitMessageLengthExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryNameConflictsWithFileNameException":
    case "com.amazonaws.codecommit#DirectoryNameConflictsWithFileNameException":
      response = {
        ...(await deserializeAws_json1_1DirectoryNameConflictsWithFileNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FileContentRequiredException":
    case "com.amazonaws.codecommit#FileContentRequiredException":
      response = {
        ...(await deserializeAws_json1_1FileContentRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FileContentSizeLimitExceededException":
    case "com.amazonaws.codecommit#FileContentSizeLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1FileContentSizeLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FileNameConflictsWithDirectoryNameException":
    case "com.amazonaws.codecommit#FileNameConflictsWithDirectoryNameException":
      response = {
        ...(await deserializeAws_json1_1FileNameConflictsWithDirectoryNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FilePathConflictsWithSubmodulePathException":
    case "com.amazonaws.codecommit#FilePathConflictsWithSubmodulePathException":
      response = {
        ...(await deserializeAws_json1_1FilePathConflictsWithSubmodulePathExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FolderContentSizeLimitExceededException":
    case "com.amazonaws.codecommit#FolderContentSizeLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1FolderContentSizeLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidBranchNameException":
    case "com.amazonaws.codecommit#InvalidBranchNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidBranchNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidDeletionParameterException":
    case "com.amazonaws.codecommit#InvalidDeletionParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeletionParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidEmailException":
    case "com.amazonaws.codecommit#InvalidEmailException":
      response = {
        ...(await deserializeAws_json1_1InvalidEmailExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidFileModeException":
    case "com.amazonaws.codecommit#InvalidFileModeException":
      response = {
        ...(await deserializeAws_json1_1InvalidFileModeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParentCommitIdException":
    case "com.amazonaws.codecommit#InvalidParentCommitIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidParentCommitIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPathException":
    case "com.amazonaws.codecommit#InvalidPathException":
      response = {
        ...(await deserializeAws_json1_1InvalidPathExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NameLengthExceededException":
    case "com.amazonaws.codecommit#NameLengthExceededException":
      response = {
        ...(await deserializeAws_json1_1NameLengthExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ParentCommitDoesNotExistException":
    case "com.amazonaws.codecommit#ParentCommitDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1ParentCommitDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ParentCommitIdOutdatedException":
    case "com.amazonaws.codecommit#ParentCommitIdOutdatedException":
      response = {
        ...(await deserializeAws_json1_1ParentCommitIdOutdatedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ParentCommitIdRequiredException":
    case "com.amazonaws.codecommit#ParentCommitIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1ParentCommitIdRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PathRequiredException":
    case "com.amazonaws.codecommit#PathRequiredException":
      response = {
        ...(await deserializeAws_json1_1PathRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "SameFileContentException":
    case "com.amazonaws.codecommit#SameFileContentException":
      response = {
        ...(await deserializeAws_json1_1SameFileContentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRepositoryTriggerBranchNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryTriggerBranchNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidRepositoryTriggerBranchNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRepositoryTriggerCustomDataException":
    case "com.amazonaws.codecommit#InvalidRepositoryTriggerCustomDataException":
      response = {
        ...(await deserializeAws_json1_1InvalidRepositoryTriggerCustomDataExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRepositoryTriggerDestinationArnException":
    case "com.amazonaws.codecommit#InvalidRepositoryTriggerDestinationArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidRepositoryTriggerDestinationArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRepositoryTriggerEventsException":
    case "com.amazonaws.codecommit#InvalidRepositoryTriggerEventsException":
      response = {
        ...(await deserializeAws_json1_1InvalidRepositoryTriggerEventsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRepositoryTriggerNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryTriggerNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidRepositoryTriggerNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRepositoryTriggerRegionException":
    case "com.amazonaws.codecommit#InvalidRepositoryTriggerRegionException":
      response = {
        ...(await deserializeAws_json1_1InvalidRepositoryTriggerRegionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MaximumBranchesExceededException":
    case "com.amazonaws.codecommit#MaximumBranchesExceededException":
      response = {
        ...(await deserializeAws_json1_1MaximumBranchesExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MaximumRepositoryTriggersExceededException":
    case "com.amazonaws.codecommit#MaximumRepositoryTriggersExceededException":
      response = {
        ...(await deserializeAws_json1_1MaximumRepositoryTriggersExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryTriggerBranchNameListRequiredException":
    case "com.amazonaws.codecommit#RepositoryTriggerBranchNameListRequiredException":
      response = {
        ...(await deserializeAws_json1_1RepositoryTriggerBranchNameListRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryTriggerDestinationArnRequiredException":
    case "com.amazonaws.codecommit#RepositoryTriggerDestinationArnRequiredException":
      response = {
        ...(await deserializeAws_json1_1RepositoryTriggerDestinationArnRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryTriggerEventsListRequiredException":
    case "com.amazonaws.codecommit#RepositoryTriggerEventsListRequiredException":
      response = {
        ...(await deserializeAws_json1_1RepositoryTriggerEventsListRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryTriggerNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryTriggerNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1RepositoryTriggerNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryTriggersListRequiredException":
    case "com.amazonaws.codecommit#RepositoryTriggersListRequiredException":
      response = {
        ...(await deserializeAws_json1_1RepositoryTriggersListRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidResourceArnException":
    case "com.amazonaws.codecommit#InvalidResourceArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidSystemTagUsageException":
    case "com.amazonaws.codecommit#InvalidSystemTagUsageException":
      response = {
        ...(await deserializeAws_json1_1InvalidSystemTagUsageExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTagsMapException":
    case "com.amazonaws.codecommit#InvalidTagsMapException":
      response = {
        ...(await deserializeAws_json1_1InvalidTagsMapExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceArnRequiredException":
    case "com.amazonaws.codecommit#ResourceArnRequiredException":
      response = {
        ...(await deserializeAws_json1_1ResourceArnRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TagPolicyException":
    case "com.amazonaws.codecommit#TagPolicyException":
      response = {
        ...(await deserializeAws_json1_1TagPolicyExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TagsMapRequiredException":
    case "com.amazonaws.codecommit#TagsMapRequiredException":
      response = {
        ...(await deserializeAws_json1_1TagsMapRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.codecommit#TooManyTagsException":
      response = {
        ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRepositoryTriggerBranchNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryTriggerBranchNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidRepositoryTriggerBranchNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRepositoryTriggerCustomDataException":
    case "com.amazonaws.codecommit#InvalidRepositoryTriggerCustomDataException":
      response = {
        ...(await deserializeAws_json1_1InvalidRepositoryTriggerCustomDataExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRepositoryTriggerDestinationArnException":
    case "com.amazonaws.codecommit#InvalidRepositoryTriggerDestinationArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidRepositoryTriggerDestinationArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRepositoryTriggerEventsException":
    case "com.amazonaws.codecommit#InvalidRepositoryTriggerEventsException":
      response = {
        ...(await deserializeAws_json1_1InvalidRepositoryTriggerEventsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRepositoryTriggerNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryTriggerNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidRepositoryTriggerNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRepositoryTriggerRegionException":
    case "com.amazonaws.codecommit#InvalidRepositoryTriggerRegionException":
      response = {
        ...(await deserializeAws_json1_1InvalidRepositoryTriggerRegionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MaximumBranchesExceededException":
    case "com.amazonaws.codecommit#MaximumBranchesExceededException":
      response = {
        ...(await deserializeAws_json1_1MaximumBranchesExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MaximumRepositoryTriggersExceededException":
    case "com.amazonaws.codecommit#MaximumRepositoryTriggersExceededException":
      response = {
        ...(await deserializeAws_json1_1MaximumRepositoryTriggersExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryTriggerBranchNameListRequiredException":
    case "com.amazonaws.codecommit#RepositoryTriggerBranchNameListRequiredException":
      response = {
        ...(await deserializeAws_json1_1RepositoryTriggerBranchNameListRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryTriggerDestinationArnRequiredException":
    case "com.amazonaws.codecommit#RepositoryTriggerDestinationArnRequiredException":
      response = {
        ...(await deserializeAws_json1_1RepositoryTriggerDestinationArnRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryTriggerEventsListRequiredException":
    case "com.amazonaws.codecommit#RepositoryTriggerEventsListRequiredException":
      response = {
        ...(await deserializeAws_json1_1RepositoryTriggerEventsListRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryTriggerNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryTriggerNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1RepositoryTriggerNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryTriggersListRequiredException":
    case "com.amazonaws.codecommit#RepositoryTriggersListRequiredException":
      response = {
        ...(await deserializeAws_json1_1RepositoryTriggersListRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidResourceArnException":
    case "com.amazonaws.codecommit#InvalidResourceArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidSystemTagUsageException":
    case "com.amazonaws.codecommit#InvalidSystemTagUsageException":
      response = {
        ...(await deserializeAws_json1_1InvalidSystemTagUsageExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTagKeysListException":
    case "com.amazonaws.codecommit#InvalidTagKeysListException":
      response = {
        ...(await deserializeAws_json1_1InvalidTagKeysListExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceArnRequiredException":
    case "com.amazonaws.codecommit#ResourceArnRequiredException":
      response = {
        ...(await deserializeAws_json1_1ResourceArnRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TagKeysListRequiredException":
    case "com.amazonaws.codecommit#TagKeysListRequiredException":
      response = {
        ...(await deserializeAws_json1_1TagKeysListRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TagPolicyException":
    case "com.amazonaws.codecommit#TagPolicyException":
      response = {
        ...(await deserializeAws_json1_1TagPolicyExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.codecommit#TooManyTagsException":
      response = {
        ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApprovalRuleTemplateContentRequiredException":
    case "com.amazonaws.codecommit#ApprovalRuleTemplateContentRequiredException":
      response = {
        ...(await deserializeAws_json1_1ApprovalRuleTemplateContentRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ApprovalRuleTemplateDoesNotExistException":
    case "com.amazonaws.codecommit#ApprovalRuleTemplateDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1ApprovalRuleTemplateDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ApprovalRuleTemplateNameRequiredException":
    case "com.amazonaws.codecommit#ApprovalRuleTemplateNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1ApprovalRuleTemplateNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidApprovalRuleTemplateContentException":
    case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateContentException":
      response = {
        ...(await deserializeAws_json1_1InvalidApprovalRuleTemplateContentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidApprovalRuleTemplateNameException":
    case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidApprovalRuleTemplateNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRuleContentSha256Exception":
    case "com.amazonaws.codecommit#InvalidRuleContentSha256Exception":
      response = {
        ...(await deserializeAws_json1_1InvalidRuleContentSha256ExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApprovalRuleTemplateDoesNotExistException":
    case "com.amazonaws.codecommit#ApprovalRuleTemplateDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1ApprovalRuleTemplateDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ApprovalRuleTemplateNameRequiredException":
    case "com.amazonaws.codecommit#ApprovalRuleTemplateNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1ApprovalRuleTemplateNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidApprovalRuleTemplateDescriptionException":
    case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateDescriptionException":
      response = {
        ...(await deserializeAws_json1_1InvalidApprovalRuleTemplateDescriptionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidApprovalRuleTemplateNameException":
    case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidApprovalRuleTemplateNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApprovalRuleTemplateDoesNotExistException":
    case "com.amazonaws.codecommit#ApprovalRuleTemplateDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1ApprovalRuleTemplateDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ApprovalRuleTemplateNameAlreadyExistsException":
    case "com.amazonaws.codecommit#ApprovalRuleTemplateNameAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ApprovalRuleTemplateNameAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ApprovalRuleTemplateNameRequiredException":
    case "com.amazonaws.codecommit#ApprovalRuleTemplateNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1ApprovalRuleTemplateNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidApprovalRuleTemplateNameException":
    case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidApprovalRuleTemplateNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CommentContentRequiredException":
    case "com.amazonaws.codecommit#CommentContentRequiredException":
      response = {
        ...(await deserializeAws_json1_1CommentContentRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CommentContentSizeLimitExceededException":
    case "com.amazonaws.codecommit#CommentContentSizeLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1CommentContentSizeLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CommentDeletedException":
    case "com.amazonaws.codecommit#CommentDeletedException":
      response = {
        ...(await deserializeAws_json1_1CommentDeletedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CommentDoesNotExistException":
    case "com.amazonaws.codecommit#CommentDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1CommentDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CommentIdRequiredException":
    case "com.amazonaws.codecommit#CommentIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1CommentIdRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CommentNotCreatedByCallerException":
    case "com.amazonaws.codecommit#CommentNotCreatedByCallerException":
      response = {
        ...(await deserializeAws_json1_1CommentNotCreatedByCallerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidCommentIdException":
    case "com.amazonaws.codecommit#InvalidCommentIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidCommentIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BranchDoesNotExistException":
    case "com.amazonaws.codecommit#BranchDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1BranchDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BranchNameRequiredException":
    case "com.amazonaws.codecommit#BranchNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1BranchNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidBranchNameException":
    case "com.amazonaws.codecommit#InvalidBranchNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidBranchNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApprovalRuleContentRequiredException":
    case "com.amazonaws.codecommit#ApprovalRuleContentRequiredException":
      response = {
        ...(await deserializeAws_json1_1ApprovalRuleContentRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ApprovalRuleDoesNotExistException":
    case "com.amazonaws.codecommit#ApprovalRuleDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1ApprovalRuleDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ApprovalRuleNameRequiredException":
    case "com.amazonaws.codecommit#ApprovalRuleNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1ApprovalRuleNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CannotModifyApprovalRuleFromTemplateException":
    case "com.amazonaws.codecommit#CannotModifyApprovalRuleFromTemplateException":
      response = {
        ...(await deserializeAws_json1_1CannotModifyApprovalRuleFromTemplateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidApprovalRuleContentException":
    case "com.amazonaws.codecommit#InvalidApprovalRuleContentException":
      response = {
        ...(await deserializeAws_json1_1InvalidApprovalRuleContentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidApprovalRuleNameException":
    case "com.amazonaws.codecommit#InvalidApprovalRuleNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidApprovalRuleNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPullRequestIdException":
    case "com.amazonaws.codecommit#InvalidPullRequestIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRuleContentSha256Exception":
    case "com.amazonaws.codecommit#InvalidRuleContentSha256Exception":
      response = {
        ...(await deserializeAws_json1_1InvalidRuleContentSha256ExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PullRequestAlreadyClosedException":
    case "com.amazonaws.codecommit#PullRequestAlreadyClosedException":
      response = {
        ...(await deserializeAws_json1_1PullRequestAlreadyClosedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PullRequestDoesNotExistException":
    case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PullRequestIdRequiredException":
    case "com.amazonaws.codecommit#PullRequestIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApprovalStateRequiredException":
    case "com.amazonaws.codecommit#ApprovalStateRequiredException":
      response = {
        ...(await deserializeAws_json1_1ApprovalStateRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidApprovalStateException":
    case "com.amazonaws.codecommit#InvalidApprovalStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidApprovalStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPullRequestIdException":
    case "com.amazonaws.codecommit#InvalidPullRequestIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRevisionIdException":
    case "com.amazonaws.codecommit#InvalidRevisionIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidRevisionIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MaximumNumberOfApprovalsExceededException":
    case "com.amazonaws.codecommit#MaximumNumberOfApprovalsExceededException":
      response = {
        ...(await deserializeAws_json1_1MaximumNumberOfApprovalsExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PullRequestAlreadyClosedException":
    case "com.amazonaws.codecommit#PullRequestAlreadyClosedException":
      response = {
        ...(await deserializeAws_json1_1PullRequestAlreadyClosedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PullRequestCannotBeApprovedByAuthorException":
    case "com.amazonaws.codecommit#PullRequestCannotBeApprovedByAuthorException":
      response = {
        ...(await deserializeAws_json1_1PullRequestCannotBeApprovedByAuthorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PullRequestDoesNotExistException":
    case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PullRequestIdRequiredException":
    case "com.amazonaws.codecommit#PullRequestIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RevisionIdRequiredException":
    case "com.amazonaws.codecommit#RevisionIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1RevisionIdRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RevisionNotCurrentException":
    case "com.amazonaws.codecommit#RevisionNotCurrentException":
      response = {
        ...(await deserializeAws_json1_1RevisionNotCurrentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidDescriptionException":
    case "com.amazonaws.codecommit#InvalidDescriptionException":
      response = {
        ...(await deserializeAws_json1_1InvalidDescriptionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPullRequestIdException":
    case "com.amazonaws.codecommit#InvalidPullRequestIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PullRequestAlreadyClosedException":
    case "com.amazonaws.codecommit#PullRequestAlreadyClosedException":
      response = {
        ...(await deserializeAws_json1_1PullRequestAlreadyClosedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PullRequestDoesNotExistException":
    case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PullRequestIdRequiredException":
    case "com.amazonaws.codecommit#PullRequestIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPullRequestIdException":
    case "com.amazonaws.codecommit#InvalidPullRequestIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPullRequestStatusException":
    case "com.amazonaws.codecommit#InvalidPullRequestStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidPullRequestStatusExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPullRequestStatusUpdateException":
    case "com.amazonaws.codecommit#InvalidPullRequestStatusUpdateException":
      response = {
        ...(await deserializeAws_json1_1InvalidPullRequestStatusUpdateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PullRequestDoesNotExistException":
    case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PullRequestIdRequiredException":
    case "com.amazonaws.codecommit#PullRequestIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PullRequestStatusRequiredException":
    case "com.amazonaws.codecommit#PullRequestStatusRequiredException":
      response = {
        ...(await deserializeAws_json1_1PullRequestStatusRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidPullRequestIdException":
    case "com.amazonaws.codecommit#InvalidPullRequestIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTitleException":
    case "com.amazonaws.codecommit#InvalidTitleException":
      response = {
        ...(await deserializeAws_json1_1InvalidTitleExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PullRequestAlreadyClosedException":
    case "com.amazonaws.codecommit#PullRequestAlreadyClosedException":
      response = {
        ...(await deserializeAws_json1_1PullRequestAlreadyClosedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PullRequestDoesNotExistException":
    case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PullRequestIdRequiredException":
    case "com.amazonaws.codecommit#PullRequestIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TitleRequiredException":
    case "com.amazonaws.codecommit#TitleRequiredException":
      response = {
        ...(await deserializeAws_json1_1TitleRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRepositoryDescriptionException":
    case "com.amazonaws.codecommit#InvalidRepositoryDescriptionException":
      response = {
        ...(await deserializeAws_json1_1InvalidRepositoryDescriptionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNameExistsException":
    case "com.amazonaws.codecommit#RepositoryNameExistsException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNameExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_json1_1ActorDoesNotExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ActorDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ActorDoesNotExistException(body, context);
  const contents: ActorDoesNotExistException = {
    name: "ActorDoesNotExistException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ApprovalRuleContentRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ApprovalRuleContentRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ApprovalRuleContentRequiredException(body, context);
  const contents: ApprovalRuleContentRequiredException = {
    name: "ApprovalRuleContentRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ApprovalRuleDoesNotExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ApprovalRuleDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ApprovalRuleDoesNotExistException(body, context);
  const contents: ApprovalRuleDoesNotExistException = {
    name: "ApprovalRuleDoesNotExistException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ApprovalRuleNameAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ApprovalRuleNameAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ApprovalRuleNameAlreadyExistsException(body, context);
  const contents: ApprovalRuleNameAlreadyExistsException = {
    name: "ApprovalRuleNameAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ApprovalRuleNameRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ApprovalRuleNameRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ApprovalRuleNameRequiredException(body, context);
  const contents: ApprovalRuleNameRequiredException = {
    name: "ApprovalRuleNameRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ApprovalRuleTemplateContentRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ApprovalRuleTemplateContentRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ApprovalRuleTemplateContentRequiredException(body, context);
  const contents: ApprovalRuleTemplateContentRequiredException = {
    name: "ApprovalRuleTemplateContentRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ApprovalRuleTemplateDoesNotExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ApprovalRuleTemplateDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ApprovalRuleTemplateDoesNotExistException(body, context);
  const contents: ApprovalRuleTemplateDoesNotExistException = {
    name: "ApprovalRuleTemplateDoesNotExistException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ApprovalRuleTemplateInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ApprovalRuleTemplateInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ApprovalRuleTemplateInUseException(body, context);
  const contents: ApprovalRuleTemplateInUseException = {
    name: "ApprovalRuleTemplateInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ApprovalRuleTemplateNameAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ApprovalRuleTemplateNameAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ApprovalRuleTemplateNameAlreadyExistsException(body, context);
  const contents: ApprovalRuleTemplateNameAlreadyExistsException = {
    name: "ApprovalRuleTemplateNameAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ApprovalRuleTemplateNameRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ApprovalRuleTemplateNameRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ApprovalRuleTemplateNameRequiredException(body, context);
  const contents: ApprovalRuleTemplateNameRequiredException = {
    name: "ApprovalRuleTemplateNameRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ApprovalStateRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ApprovalStateRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ApprovalStateRequiredException(body, context);
  const contents: ApprovalStateRequiredException = {
    name: "ApprovalStateRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1AuthorDoesNotExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AuthorDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AuthorDoesNotExistException(body, context);
  const contents: AuthorDoesNotExistException = {
    name: "AuthorDoesNotExistException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1BeforeCommitIdAndAfterCommitIdAreSameExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BeforeCommitIdAndAfterCommitIdAreSameException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1BeforeCommitIdAndAfterCommitIdAreSameException(body, context);
  const contents: BeforeCommitIdAndAfterCommitIdAreSameException = {
    name: "BeforeCommitIdAndAfterCommitIdAreSameException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1BlobIdDoesNotExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BlobIdDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1BlobIdDoesNotExistException(body, context);
  const contents: BlobIdDoesNotExistException = {
    name: "BlobIdDoesNotExistException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1BlobIdRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BlobIdRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1BlobIdRequiredException(body, context);
  const contents: BlobIdRequiredException = {
    name: "BlobIdRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1BranchDoesNotExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BranchDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1BranchDoesNotExistException(body, context);
  const contents: BranchDoesNotExistException = {
    name: "BranchDoesNotExistException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1BranchNameExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BranchNameExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1BranchNameExistsException(body, context);
  const contents: BranchNameExistsException = {
    name: "BranchNameExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1BranchNameIsTagNameExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BranchNameIsTagNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1BranchNameIsTagNameException(body, context);
  const contents: BranchNameIsTagNameException = {
    name: "BranchNameIsTagNameException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1BranchNameRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BranchNameRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1BranchNameRequiredException(body, context);
  const contents: BranchNameRequiredException = {
    name: "BranchNameRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1CannotDeleteApprovalRuleFromTemplateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CannotDeleteApprovalRuleFromTemplateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CannotDeleteApprovalRuleFromTemplateException(body, context);
  const contents: CannotDeleteApprovalRuleFromTemplateException = {
    name: "CannotDeleteApprovalRuleFromTemplateException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1CannotModifyApprovalRuleFromTemplateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CannotModifyApprovalRuleFromTemplateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CannotModifyApprovalRuleFromTemplateException(body, context);
  const contents: CannotModifyApprovalRuleFromTemplateException = {
    name: "CannotModifyApprovalRuleFromTemplateException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ClientRequestTokenRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClientRequestTokenRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ClientRequestTokenRequiredException(body, context);
  const contents: ClientRequestTokenRequiredException = {
    name: "ClientRequestTokenRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1CommentContentRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CommentContentRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CommentContentRequiredException(body, context);
  const contents: CommentContentRequiredException = {
    name: "CommentContentRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1CommentContentSizeLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CommentContentSizeLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CommentContentSizeLimitExceededException(body, context);
  const contents: CommentContentSizeLimitExceededException = {
    name: "CommentContentSizeLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1CommentDeletedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CommentDeletedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CommentDeletedException(body, context);
  const contents: CommentDeletedException = {
    name: "CommentDeletedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1CommentDoesNotExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CommentDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CommentDoesNotExistException(body, context);
  const contents: CommentDoesNotExistException = {
    name: "CommentDoesNotExistException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1CommentIdRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CommentIdRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CommentIdRequiredException(body, context);
  const contents: CommentIdRequiredException = {
    name: "CommentIdRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1CommentNotCreatedByCallerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CommentNotCreatedByCallerException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CommentNotCreatedByCallerException(body, context);
  const contents: CommentNotCreatedByCallerException = {
    name: "CommentNotCreatedByCallerException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1CommitDoesNotExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CommitDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CommitDoesNotExistException(body, context);
  const contents: CommitDoesNotExistException = {
    name: "CommitDoesNotExistException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1CommitIdDoesNotExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CommitIdDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CommitIdDoesNotExistException(body, context);
  const contents: CommitIdDoesNotExistException = {
    name: "CommitIdDoesNotExistException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1CommitIdRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CommitIdRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CommitIdRequiredException(body, context);
  const contents: CommitIdRequiredException = {
    name: "CommitIdRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1CommitIdsLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CommitIdsLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CommitIdsLimitExceededException(body, context);
  const contents: CommitIdsLimitExceededException = {
    name: "CommitIdsLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1CommitIdsListRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CommitIdsListRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CommitIdsListRequiredException(body, context);
  const contents: CommitIdsListRequiredException = {
    name: "CommitIdsListRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1CommitMessageLengthExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CommitMessageLengthExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CommitMessageLengthExceededException(body, context);
  const contents: CommitMessageLengthExceededException = {
    name: "CommitMessageLengthExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1CommitRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CommitRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CommitRequiredException(body, context);
  const contents: CommitRequiredException = {
    name: "CommitRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ConcurrentReferenceUpdateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentReferenceUpdateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConcurrentReferenceUpdateException(body, context);
  const contents: ConcurrentReferenceUpdateException = {
    name: "ConcurrentReferenceUpdateException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1DefaultBranchCannotBeDeletedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DefaultBranchCannotBeDeletedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DefaultBranchCannotBeDeletedException(body, context);
  const contents: DefaultBranchCannotBeDeletedException = {
    name: "DefaultBranchCannotBeDeletedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1DirectoryNameConflictsWithFileNameExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DirectoryNameConflictsWithFileNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DirectoryNameConflictsWithFileNameException(body, context);
  const contents: DirectoryNameConflictsWithFileNameException = {
    name: "DirectoryNameConflictsWithFileNameException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EncryptionIntegrityChecksFailedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1EncryptionIntegrityChecksFailedException(body, context);
  const contents: EncryptionIntegrityChecksFailedException = {
    name: "EncryptionIntegrityChecksFailedException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EncryptionKeyAccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1EncryptionKeyAccessDeniedException(body, context);
  const contents: EncryptionKeyAccessDeniedException = {
    name: "EncryptionKeyAccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EncryptionKeyDisabledException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1EncryptionKeyDisabledException(body, context);
  const contents: EncryptionKeyDisabledException = {
    name: "EncryptionKeyDisabledException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EncryptionKeyNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1EncryptionKeyNotFoundException(body, context);
  const contents: EncryptionKeyNotFoundException = {
    name: "EncryptionKeyNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EncryptionKeyUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1EncryptionKeyUnavailableException(body, context);
  const contents: EncryptionKeyUnavailableException = {
    name: "EncryptionKeyUnavailableException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1FileContentAndSourceFileSpecifiedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FileContentAndSourceFileSpecifiedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1FileContentAndSourceFileSpecifiedException(body, context);
  const contents: FileContentAndSourceFileSpecifiedException = {
    name: "FileContentAndSourceFileSpecifiedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1FileContentRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FileContentRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1FileContentRequiredException(body, context);
  const contents: FileContentRequiredException = {
    name: "FileContentRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1FileContentSizeLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FileContentSizeLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1FileContentSizeLimitExceededException(body, context);
  const contents: FileContentSizeLimitExceededException = {
    name: "FileContentSizeLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1FileDoesNotExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FileDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1FileDoesNotExistException(body, context);
  const contents: FileDoesNotExistException = {
    name: "FileDoesNotExistException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1FileEntryRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FileEntryRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1FileEntryRequiredException(body, context);
  const contents: FileEntryRequiredException = {
    name: "FileEntryRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1FileModeRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FileModeRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1FileModeRequiredException(body, context);
  const contents: FileModeRequiredException = {
    name: "FileModeRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1FileNameConflictsWithDirectoryNameExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FileNameConflictsWithDirectoryNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1FileNameConflictsWithDirectoryNameException(body, context);
  const contents: FileNameConflictsWithDirectoryNameException = {
    name: "FileNameConflictsWithDirectoryNameException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1FilePathConflictsWithSubmodulePathExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FilePathConflictsWithSubmodulePathException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1FilePathConflictsWithSubmodulePathException(body, context);
  const contents: FilePathConflictsWithSubmodulePathException = {
    name: "FilePathConflictsWithSubmodulePathException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1FileTooLargeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FileTooLargeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1FileTooLargeException(body, context);
  const contents: FileTooLargeException = {
    name: "FileTooLargeException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1FolderContentSizeLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FolderContentSizeLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1FolderContentSizeLimitExceededException(body, context);
  const contents: FolderContentSizeLimitExceededException = {
    name: "FolderContentSizeLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1FolderDoesNotExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FolderDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1FolderDoesNotExistException(body, context);
  const contents: FolderDoesNotExistException = {
    name: "FolderDoesNotExistException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1IdempotencyParameterMismatchExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IdempotencyParameterMismatchException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1IdempotencyParameterMismatchException(body, context);
  const contents: IdempotencyParameterMismatchException = {
    name: "IdempotencyParameterMismatchException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidActorArnExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidActorArnException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidActorArnException(body, context);
  const contents: InvalidActorArnException = {
    name: "InvalidActorArnException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidApprovalRuleContentExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidApprovalRuleContentException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidApprovalRuleContentException(body, context);
  const contents: InvalidApprovalRuleContentException = {
    name: "InvalidApprovalRuleContentException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidApprovalRuleNameExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidApprovalRuleNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidApprovalRuleNameException(body, context);
  const contents: InvalidApprovalRuleNameException = {
    name: "InvalidApprovalRuleNameException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidApprovalRuleTemplateContentExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidApprovalRuleTemplateContentException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidApprovalRuleTemplateContentException(body, context);
  const contents: InvalidApprovalRuleTemplateContentException = {
    name: "InvalidApprovalRuleTemplateContentException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidApprovalRuleTemplateDescriptionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidApprovalRuleTemplateDescriptionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidApprovalRuleTemplateDescriptionException(body, context);
  const contents: InvalidApprovalRuleTemplateDescriptionException = {
    name: "InvalidApprovalRuleTemplateDescriptionException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidApprovalRuleTemplateNameExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidApprovalRuleTemplateNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidApprovalRuleTemplateNameException(body, context);
  const contents: InvalidApprovalRuleTemplateNameException = {
    name: "InvalidApprovalRuleTemplateNameException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidApprovalStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidApprovalStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidApprovalStateException(body, context);
  const contents: InvalidApprovalStateException = {
    name: "InvalidApprovalStateException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidAuthorArnExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidAuthorArnException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidAuthorArnException(body, context);
  const contents: InvalidAuthorArnException = {
    name: "InvalidAuthorArnException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidBlobIdExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidBlobIdException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidBlobIdException(body, context);
  const contents: InvalidBlobIdException = {
    name: "InvalidBlobIdException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidBranchNameExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidBranchNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidBranchNameException(body, context);
  const contents: InvalidBranchNameException = {
    name: "InvalidBranchNameException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidClientRequestTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidClientRequestTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidClientRequestTokenException(body, context);
  const contents: InvalidClientRequestTokenException = {
    name: "InvalidClientRequestTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidCommentIdExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCommentIdException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidCommentIdException(body, context);
  const contents: InvalidCommentIdException = {
    name: "InvalidCommentIdException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidCommitExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCommitException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidCommitException(body, context);
  const contents: InvalidCommitException = {
    name: "InvalidCommitException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidCommitIdExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCommitIdException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidCommitIdException(body, context);
  const contents: InvalidCommitIdException = {
    name: "InvalidCommitIdException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidConflictDetailLevelExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidConflictDetailLevelException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidConflictDetailLevelException(body, context);
  const contents: InvalidConflictDetailLevelException = {
    name: "InvalidConflictDetailLevelException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidConflictResolutionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidConflictResolutionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidConflictResolutionException(body, context);
  const contents: InvalidConflictResolutionException = {
    name: "InvalidConflictResolutionException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidConflictResolutionStrategyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidConflictResolutionStrategyException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidConflictResolutionStrategyException(body, context);
  const contents: InvalidConflictResolutionStrategyException = {
    name: "InvalidConflictResolutionStrategyException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidContinuationTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidContinuationTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidContinuationTokenException(body, context);
  const contents: InvalidContinuationTokenException = {
    name: "InvalidContinuationTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidDeletionParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDeletionParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidDeletionParameterException(body, context);
  const contents: InvalidDeletionParameterException = {
    name: "InvalidDeletionParameterException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidDescriptionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDescriptionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidDescriptionException(body, context);
  const contents: InvalidDescriptionException = {
    name: "InvalidDescriptionException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidDestinationCommitSpecifierExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDestinationCommitSpecifierException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidDestinationCommitSpecifierException(body, context);
  const contents: InvalidDestinationCommitSpecifierException = {
    name: "InvalidDestinationCommitSpecifierException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidEmailExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidEmailException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidEmailException(body, context);
  const contents: InvalidEmailException = {
    name: "InvalidEmailException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidFileLocationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidFileLocationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidFileLocationException(body, context);
  const contents: InvalidFileLocationException = {
    name: "InvalidFileLocationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidFileModeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidFileModeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidFileModeException(body, context);
  const contents: InvalidFileModeException = {
    name: "InvalidFileModeException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidFilePositionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidFilePositionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidFilePositionException(body, context);
  const contents: InvalidFilePositionException = {
    name: "InvalidFilePositionException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidMaxConflictFilesExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidMaxConflictFilesException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidMaxConflictFilesException(body, context);
  const contents: InvalidMaxConflictFilesException = {
    name: "InvalidMaxConflictFilesException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidMaxMergeHunksExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidMaxMergeHunksException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidMaxMergeHunksException(body, context);
  const contents: InvalidMaxMergeHunksException = {
    name: "InvalidMaxMergeHunksException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidMaxResultsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidMaxResultsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidMaxResultsException(body, context);
  const contents: InvalidMaxResultsException = {
    name: "InvalidMaxResultsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidMergeOptionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidMergeOptionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidMergeOptionException(body, context);
  const contents: InvalidMergeOptionException = {
    name: "InvalidMergeOptionException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidOrderExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidOrderException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidOrderException(body, context);
  const contents: InvalidOrderException = {
    name: "InvalidOrderException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidOverrideStatusExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidOverrideStatusException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidOverrideStatusException(body, context);
  const contents: InvalidOverrideStatusException = {
    name: "InvalidOverrideStatusException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidParentCommitIdExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParentCommitIdException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParentCommitIdException(body, context);
  const contents: InvalidParentCommitIdException = {
    name: "InvalidParentCommitIdException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidPathExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPathException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidPathException(body, context);
  const contents: InvalidPathException = {
    name: "InvalidPathException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidPullRequestEventTypeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPullRequestEventTypeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidPullRequestEventTypeException(body, context);
  const contents: InvalidPullRequestEventTypeException = {
    name: "InvalidPullRequestEventTypeException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidPullRequestIdExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPullRequestIdException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidPullRequestIdException(body, context);
  const contents: InvalidPullRequestIdException = {
    name: "InvalidPullRequestIdException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidPullRequestStatusExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPullRequestStatusException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidPullRequestStatusException(body, context);
  const contents: InvalidPullRequestStatusException = {
    name: "InvalidPullRequestStatusException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidPullRequestStatusUpdateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPullRequestStatusUpdateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidPullRequestStatusUpdateException(body, context);
  const contents: InvalidPullRequestStatusUpdateException = {
    name: "InvalidPullRequestStatusUpdateException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidReactionUserArnExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidReactionUserArnException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidReactionUserArnException(body, context);
  const contents: InvalidReactionUserArnException = {
    name: "InvalidReactionUserArnException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidReactionValueExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidReactionValueException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidReactionValueException(body, context);
  const contents: InvalidReactionValueException = {
    name: "InvalidReactionValueException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidReferenceNameExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidReferenceNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidReferenceNameException(body, context);
  const contents: InvalidReferenceNameException = {
    name: "InvalidReferenceNameException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidRelativeFileVersionEnumExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRelativeFileVersionEnumException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRelativeFileVersionEnumException(body, context);
  const contents: InvalidRelativeFileVersionEnumException = {
    name: "InvalidRelativeFileVersionEnumException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidReplacementContentExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidReplacementContentException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidReplacementContentException(body, context);
  const contents: InvalidReplacementContentException = {
    name: "InvalidReplacementContentException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidReplacementTypeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidReplacementTypeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidReplacementTypeException(body, context);
  const contents: InvalidReplacementTypeException = {
    name: "InvalidReplacementTypeException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidRepositoryDescriptionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRepositoryDescriptionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRepositoryDescriptionException(body, context);
  const contents: InvalidRepositoryDescriptionException = {
    name: "InvalidRepositoryDescriptionException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidRepositoryNameExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRepositoryNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRepositoryNameException(body, context);
  const contents: InvalidRepositoryNameException = {
    name: "InvalidRepositoryNameException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidRepositoryTriggerBranchNameExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRepositoryTriggerBranchNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRepositoryTriggerBranchNameException(body, context);
  const contents: InvalidRepositoryTriggerBranchNameException = {
    name: "InvalidRepositoryTriggerBranchNameException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidRepositoryTriggerCustomDataExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRepositoryTriggerCustomDataException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRepositoryTriggerCustomDataException(body, context);
  const contents: InvalidRepositoryTriggerCustomDataException = {
    name: "InvalidRepositoryTriggerCustomDataException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidRepositoryTriggerDestinationArnExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRepositoryTriggerDestinationArnException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRepositoryTriggerDestinationArnException(body, context);
  const contents: InvalidRepositoryTriggerDestinationArnException = {
    name: "InvalidRepositoryTriggerDestinationArnException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidRepositoryTriggerEventsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRepositoryTriggerEventsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRepositoryTriggerEventsException(body, context);
  const contents: InvalidRepositoryTriggerEventsException = {
    name: "InvalidRepositoryTriggerEventsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidRepositoryTriggerNameExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRepositoryTriggerNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRepositoryTriggerNameException(body, context);
  const contents: InvalidRepositoryTriggerNameException = {
    name: "InvalidRepositoryTriggerNameException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidRepositoryTriggerRegionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRepositoryTriggerRegionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRepositoryTriggerRegionException(body, context);
  const contents: InvalidRepositoryTriggerRegionException = {
    name: "InvalidRepositoryTriggerRegionException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidResourceArnExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidResourceArnException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidResourceArnException(body, context);
  const contents: InvalidResourceArnException = {
    name: "InvalidResourceArnException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidRevisionIdExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRevisionIdException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRevisionIdException(body, context);
  const contents: InvalidRevisionIdException = {
    name: "InvalidRevisionIdException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidRuleContentSha256ExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRuleContentSha256Exception> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRuleContentSha256Exception(body, context);
  const contents: InvalidRuleContentSha256Exception = {
    name: "InvalidRuleContentSha256Exception",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidSortByExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSortByException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidSortByException(body, context);
  const contents: InvalidSortByException = {
    name: "InvalidSortByException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidSourceCommitSpecifierExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSourceCommitSpecifierException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidSourceCommitSpecifierException(body, context);
  const contents: InvalidSourceCommitSpecifierException = {
    name: "InvalidSourceCommitSpecifierException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidSystemTagUsageExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSystemTagUsageException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidSystemTagUsageException(body, context);
  const contents: InvalidSystemTagUsageException = {
    name: "InvalidSystemTagUsageException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidTagKeysListExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTagKeysListException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidTagKeysListException(body, context);
  const contents: InvalidTagKeysListException = {
    name: "InvalidTagKeysListException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidTagsMapExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTagsMapException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidTagsMapException(body, context);
  const contents: InvalidTagsMapException = {
    name: "InvalidTagsMapException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidTargetBranchExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTargetBranchException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidTargetBranchException(body, context);
  const contents: InvalidTargetBranchException = {
    name: "InvalidTargetBranchException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidTargetExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTargetException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidTargetException(body, context);
  const contents: InvalidTargetException = {
    name: "InvalidTargetException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidTargetsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTargetsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidTargetsException(body, context);
  const contents: InvalidTargetsException = {
    name: "InvalidTargetsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidTitleExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTitleException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidTitleException(body, context);
  const contents: InvalidTitleException = {
    name: "InvalidTitleException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ManualMergeRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ManualMergeRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ManualMergeRequiredException(body, context);
  const contents: ManualMergeRequiredException = {
    name: "ManualMergeRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1MaximumBranchesExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MaximumBranchesExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MaximumBranchesExceededException(body, context);
  const contents: MaximumBranchesExceededException = {
    name: "MaximumBranchesExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1MaximumConflictResolutionEntriesExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MaximumConflictResolutionEntriesExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MaximumConflictResolutionEntriesExceededException(body, context);
  const contents: MaximumConflictResolutionEntriesExceededException = {
    name: "MaximumConflictResolutionEntriesExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1MaximumFileContentToLoadExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MaximumFileContentToLoadExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MaximumFileContentToLoadExceededException(body, context);
  const contents: MaximumFileContentToLoadExceededException = {
    name: "MaximumFileContentToLoadExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1MaximumFileEntriesExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MaximumFileEntriesExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MaximumFileEntriesExceededException(body, context);
  const contents: MaximumFileEntriesExceededException = {
    name: "MaximumFileEntriesExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1MaximumItemsToCompareExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MaximumItemsToCompareExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MaximumItemsToCompareExceededException(body, context);
  const contents: MaximumItemsToCompareExceededException = {
    name: "MaximumItemsToCompareExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1MaximumNumberOfApprovalsExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MaximumNumberOfApprovalsExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MaximumNumberOfApprovalsExceededException(body, context);
  const contents: MaximumNumberOfApprovalsExceededException = {
    name: "MaximumNumberOfApprovalsExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1MaximumOpenPullRequestsExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MaximumOpenPullRequestsExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MaximumOpenPullRequestsExceededException(body, context);
  const contents: MaximumOpenPullRequestsExceededException = {
    name: "MaximumOpenPullRequestsExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1MaximumRepositoryNamesExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MaximumRepositoryNamesExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MaximumRepositoryNamesExceededException(body, context);
  const contents: MaximumRepositoryNamesExceededException = {
    name: "MaximumRepositoryNamesExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1MaximumRepositoryTriggersExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MaximumRepositoryTriggersExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MaximumRepositoryTriggersExceededException(body, context);
  const contents: MaximumRepositoryTriggersExceededException = {
    name: "MaximumRepositoryTriggersExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1MaximumRuleTemplatesAssociatedWithRepositoryExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MaximumRuleTemplatesAssociatedWithRepositoryException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MaximumRuleTemplatesAssociatedWithRepositoryException(body, context);
  const contents: MaximumRuleTemplatesAssociatedWithRepositoryException = {
    name: "MaximumRuleTemplatesAssociatedWithRepositoryException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1MergeOptionRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MergeOptionRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MergeOptionRequiredException(body, context);
  const contents: MergeOptionRequiredException = {
    name: "MergeOptionRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1MultipleConflictResolutionEntriesExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MultipleConflictResolutionEntriesException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MultipleConflictResolutionEntriesException(body, context);
  const contents: MultipleConflictResolutionEntriesException = {
    name: "MultipleConflictResolutionEntriesException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1MultipleRepositoriesInPullRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MultipleRepositoriesInPullRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MultipleRepositoriesInPullRequestException(body, context);
  const contents: MultipleRepositoriesInPullRequestException = {
    name: "MultipleRepositoriesInPullRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1NameLengthExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NameLengthExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NameLengthExceededException(body, context);
  const contents: NameLengthExceededException = {
    name: "NameLengthExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1NoChangeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoChangeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NoChangeException(body, context);
  const contents: NoChangeException = {
    name: "NoChangeException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1NumberOfRulesExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NumberOfRulesExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NumberOfRulesExceededException(body, context);
  const contents: NumberOfRulesExceededException = {
    name: "NumberOfRulesExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1NumberOfRuleTemplatesExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NumberOfRuleTemplatesExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NumberOfRuleTemplatesExceededException(body, context);
  const contents: NumberOfRuleTemplatesExceededException = {
    name: "NumberOfRuleTemplatesExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1OverrideAlreadySetExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OverrideAlreadySetException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OverrideAlreadySetException(body, context);
  const contents: OverrideAlreadySetException = {
    name: "OverrideAlreadySetException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1OverrideStatusRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OverrideStatusRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OverrideStatusRequiredException(body, context);
  const contents: OverrideStatusRequiredException = {
    name: "OverrideStatusRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ParentCommitDoesNotExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ParentCommitDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ParentCommitDoesNotExistException(body, context);
  const contents: ParentCommitDoesNotExistException = {
    name: "ParentCommitDoesNotExistException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ParentCommitIdOutdatedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ParentCommitIdOutdatedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ParentCommitIdOutdatedException(body, context);
  const contents: ParentCommitIdOutdatedException = {
    name: "ParentCommitIdOutdatedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ParentCommitIdRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ParentCommitIdRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ParentCommitIdRequiredException(body, context);
  const contents: ParentCommitIdRequiredException = {
    name: "ParentCommitIdRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1PathDoesNotExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PathDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PathDoesNotExistException(body, context);
  const contents: PathDoesNotExistException = {
    name: "PathDoesNotExistException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1PathRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PathRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PathRequiredException(body, context);
  const contents: PathRequiredException = {
    name: "PathRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1PullRequestAlreadyClosedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PullRequestAlreadyClosedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PullRequestAlreadyClosedException(body, context);
  const contents: PullRequestAlreadyClosedException = {
    name: "PullRequestAlreadyClosedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1PullRequestApprovalRulesNotSatisfiedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PullRequestApprovalRulesNotSatisfiedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PullRequestApprovalRulesNotSatisfiedException(body, context);
  const contents: PullRequestApprovalRulesNotSatisfiedException = {
    name: "PullRequestApprovalRulesNotSatisfiedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1PullRequestCannotBeApprovedByAuthorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PullRequestCannotBeApprovedByAuthorException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PullRequestCannotBeApprovedByAuthorException(body, context);
  const contents: PullRequestCannotBeApprovedByAuthorException = {
    name: "PullRequestCannotBeApprovedByAuthorException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PullRequestDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PullRequestDoesNotExistException(body, context);
  const contents: PullRequestDoesNotExistException = {
    name: "PullRequestDoesNotExistException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1PullRequestIdRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PullRequestIdRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PullRequestIdRequiredException(body, context);
  const contents: PullRequestIdRequiredException = {
    name: "PullRequestIdRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1PullRequestStatusRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PullRequestStatusRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PullRequestStatusRequiredException(body, context);
  const contents: PullRequestStatusRequiredException = {
    name: "PullRequestStatusRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1PutFileEntryConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PutFileEntryConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PutFileEntryConflictException(body, context);
  const contents: PutFileEntryConflictException = {
    name: "PutFileEntryConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ReactionLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReactionLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ReactionLimitExceededException(body, context);
  const contents: ReactionLimitExceededException = {
    name: "ReactionLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ReactionValueRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReactionValueRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ReactionValueRequiredException(body, context);
  const contents: ReactionValueRequiredException = {
    name: "ReactionValueRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ReferenceDoesNotExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReferenceDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ReferenceDoesNotExistException(body, context);
  const contents: ReferenceDoesNotExistException = {
    name: "ReferenceDoesNotExistException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ReferenceNameRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReferenceNameRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ReferenceNameRequiredException(body, context);
  const contents: ReferenceNameRequiredException = {
    name: "ReferenceNameRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ReferenceTypeNotSupportedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReferenceTypeNotSupportedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ReferenceTypeNotSupportedException(body, context);
  const contents: ReferenceTypeNotSupportedException = {
    name: "ReferenceTypeNotSupportedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ReplacementContentRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReplacementContentRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ReplacementContentRequiredException(body, context);
  const contents: ReplacementContentRequiredException = {
    name: "ReplacementContentRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ReplacementTypeRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReplacementTypeRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ReplacementTypeRequiredException(body, context);
  const contents: ReplacementTypeRequiredException = {
    name: "ReplacementTypeRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RepositoryDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RepositoryDoesNotExistException(body, context);
  const contents: RepositoryDoesNotExistException = {
    name: "RepositoryDoesNotExistException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1RepositoryLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RepositoryLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RepositoryLimitExceededException(body, context);
  const contents: RepositoryLimitExceededException = {
    name: "RepositoryLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1RepositoryNameExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RepositoryNameExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RepositoryNameExistsException(body, context);
  const contents: RepositoryNameExistsException = {
    name: "RepositoryNameExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1RepositoryNameRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RepositoryNameRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RepositoryNameRequiredException(body, context);
  const contents: RepositoryNameRequiredException = {
    name: "RepositoryNameRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1RepositoryNamesRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RepositoryNamesRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RepositoryNamesRequiredException(body, context);
  const contents: RepositoryNamesRequiredException = {
    name: "RepositoryNamesRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1RepositoryNotAssociatedWithPullRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RepositoryNotAssociatedWithPullRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RepositoryNotAssociatedWithPullRequestException(body, context);
  const contents: RepositoryNotAssociatedWithPullRequestException = {
    name: "RepositoryNotAssociatedWithPullRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1RepositoryTriggerBranchNameListRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RepositoryTriggerBranchNameListRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RepositoryTriggerBranchNameListRequiredException(body, context);
  const contents: RepositoryTriggerBranchNameListRequiredException = {
    name: "RepositoryTriggerBranchNameListRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1RepositoryTriggerDestinationArnRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RepositoryTriggerDestinationArnRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RepositoryTriggerDestinationArnRequiredException(body, context);
  const contents: RepositoryTriggerDestinationArnRequiredException = {
    name: "RepositoryTriggerDestinationArnRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1RepositoryTriggerEventsListRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RepositoryTriggerEventsListRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RepositoryTriggerEventsListRequiredException(body, context);
  const contents: RepositoryTriggerEventsListRequiredException = {
    name: "RepositoryTriggerEventsListRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1RepositoryTriggerNameRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RepositoryTriggerNameRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RepositoryTriggerNameRequiredException(body, context);
  const contents: RepositoryTriggerNameRequiredException = {
    name: "RepositoryTriggerNameRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1RepositoryTriggersListRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RepositoryTriggersListRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RepositoryTriggersListRequiredException(body, context);
  const contents: RepositoryTriggersListRequiredException = {
    name: "RepositoryTriggersListRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceArnRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceArnRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceArnRequiredException(body, context);
  const contents: ResourceArnRequiredException = {
    name: "ResourceArnRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1RestrictedSourceFileExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RestrictedSourceFileException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RestrictedSourceFileException(body, context);
  const contents: RestrictedSourceFileException = {
    name: "RestrictedSourceFileException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1RevisionIdRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RevisionIdRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RevisionIdRequiredException(body, context);
  const contents: RevisionIdRequiredException = {
    name: "RevisionIdRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1RevisionNotCurrentExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RevisionNotCurrentException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RevisionNotCurrentException(body, context);
  const contents: RevisionNotCurrentException = {
    name: "RevisionNotCurrentException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1SameFileContentExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SameFileContentException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1SameFileContentException(body, context);
  const contents: SameFileContentException = {
    name: "SameFileContentException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1SamePathRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SamePathRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1SamePathRequestException(body, context);
  const contents: SamePathRequestException = {
    name: "SamePathRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1SourceAndDestinationAreSameExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SourceAndDestinationAreSameException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1SourceAndDestinationAreSameException(body, context);
  const contents: SourceAndDestinationAreSameException = {
    name: "SourceAndDestinationAreSameException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1SourceFileOrContentRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SourceFileOrContentRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1SourceFileOrContentRequiredException(body, context);
  const contents: SourceFileOrContentRequiredException = {
    name: "SourceFileOrContentRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1TagKeysListRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagKeysListRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TagKeysListRequiredException(body, context);
  const contents: TagKeysListRequiredException = {
    name: "TagKeysListRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1TagPolicyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagPolicyException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TagPolicyException(body, context);
  const contents: TagPolicyException = {
    name: "TagPolicyException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1TagsMapRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagsMapRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TagsMapRequiredException(body, context);
  const contents: TagsMapRequiredException = {
    name: "TagsMapRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1TargetRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TargetRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TargetRequiredException(body, context);
  const contents: TargetRequiredException = {
    name: "TargetRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1TargetsRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TargetsRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TargetsRequiredException(body, context);
  const contents: TargetsRequiredException = {
    name: "TargetsRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1TipOfSourceReferenceIsDifferentExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TipOfSourceReferenceIsDifferentException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TipOfSourceReferenceIsDifferentException(body, context);
  const contents: TipOfSourceReferenceIsDifferentException = {
    name: "TipOfSourceReferenceIsDifferentException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1TipsDivergenceExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TipsDivergenceExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TipsDivergenceExceededException(body, context);
  const contents: TipsDivergenceExceededException = {
    name: "TipsDivergenceExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1TitleRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TitleRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TitleRequiredException(body, context);
  const contents: TitleRequiredException = {
    name: "TitleRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1TooManyTagsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TooManyTagsException(body, context);
  const contents: TooManyTagsException = {
    name: "TooManyTagsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1AssociateApprovalRuleTemplateWithRepositoryInput = (
  input: AssociateApprovalRuleTemplateWithRepositoryInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.approvalRuleTemplateName !== undefined &&
      input.approvalRuleTemplateName !== null && { approvalRuleTemplateName: input.approvalRuleTemplateName }),
    ...(input.repositoryName !== undefined &&
      input.repositoryName !== null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesInput = (
  input: BatchAssociateApprovalRuleTemplateWithRepositoriesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.approvalRuleTemplateName !== undefined &&
      input.approvalRuleTemplateName !== null && { approvalRuleTemplateName: input.approvalRuleTemplateName }),
    ...(input.repositoryNames !== undefined &&
      input.repositoryNames !== null && {
        repositoryNames: serializeAws_json1_1RepositoryNameList(input.repositoryNames, context),
      }),
  };
};

const serializeAws_json1_1BatchDescribeMergeConflictsInput = (
  input: BatchDescribeMergeConflictsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.conflictDetailLevel !== undefined &&
      input.conflictDetailLevel !== null && { conflictDetailLevel: input.conflictDetailLevel }),
    ...(input.conflictResolutionStrategy !== undefined &&
      input.conflictResolutionStrategy !== null && { conflictResolutionStrategy: input.conflictResolutionStrategy }),
    ...(input.destinationCommitSpecifier !== undefined &&
      input.destinationCommitSpecifier !== null && { destinationCommitSpecifier: input.destinationCommitSpecifier }),
    ...(input.filePaths !== undefined &&
      input.filePaths !== null && { filePaths: serializeAws_json1_1FilePaths(input.filePaths, context) }),
    ...(input.maxConflictFiles !== undefined &&
      input.maxConflictFiles !== null && { maxConflictFiles: input.maxConflictFiles }),
    ...(input.maxMergeHunks !== undefined && input.maxMergeHunks !== null && { maxMergeHunks: input.maxMergeHunks }),
    ...(input.mergeOption !== undefined && input.mergeOption !== null && { mergeOption: input.mergeOption }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.repositoryName !== undefined &&
      input.repositoryName !== null && { repositoryName: input.repositoryName }),
    ...(input.sourceCommitSpecifier !== undefined &&
      input.sourceCommitSpecifier !== null && { sourceCommitSpecifier: input.sourceCommitSpecifier }),
  };
};

const serializeAws_json1_1BatchDisassociateApprovalRuleTemplateFromRepositoriesInput = (
  input: BatchDisassociateApprovalRuleTemplateFromRepositoriesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.approvalRuleTemplateName !== undefined &&
      input.approvalRuleTemplateName !== null && { approvalRuleTemplateName: input.approvalRuleTemplateName }),
    ...(input.repositoryNames !== undefined &&
      input.repositoryNames !== null && {
        repositoryNames: serializeAws_json1_1RepositoryNameList(input.repositoryNames, context),
      }),
  };
};

const serializeAws_json1_1BatchGetCommitsInput = (input: BatchGetCommitsInput, context: __SerdeContext): any => {
  return {
    ...(input.commitIds !== undefined &&
      input.commitIds !== null && { commitIds: serializeAws_json1_1CommitIdsInputList(input.commitIds, context) }),
    ...(input.repositoryName !== undefined &&
      input.repositoryName !== null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1BatchGetRepositoriesInput = (
  input: BatchGetRepositoriesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.repositoryNames !== undefined &&
      input.repositoryNames !== null && {
        repositoryNames: serializeAws_json1_1RepositoryNameList(input.repositoryNames, context),
      }),
  };
};

const serializeAws_json1_1BranchNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1CommitIdsInputList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1ConflictResolution = (input: ConflictResolution, context: __SerdeContext): any => {
  return {
    ...(input.deleteFiles !== undefined &&
      input.deleteFiles !== null && { deleteFiles: serializeAws_json1_1DeleteFileEntries(input.deleteFiles, context) }),
    ...(input.replaceContents !== undefined &&
      input.replaceContents !== null && {
        replaceContents: serializeAws_json1_1ReplaceContentEntries(input.replaceContents, context),
      }),
    ...(input.setFileModes !== undefined &&
      input.setFileModes !== null && {
        setFileModes: serializeAws_json1_1SetFileModeEntries(input.setFileModes, context),
      }),
  };
};

const serializeAws_json1_1CreateApprovalRuleTemplateInput = (
  input: CreateApprovalRuleTemplateInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.approvalRuleTemplateContent !== undefined &&
      input.approvalRuleTemplateContent !== null && { approvalRuleTemplateContent: input.approvalRuleTemplateContent }),
    ...(input.approvalRuleTemplateDescription !== undefined &&
      input.approvalRuleTemplateDescription !== null && {
        approvalRuleTemplateDescription: input.approvalRuleTemplateDescription,
      }),
    ...(input.approvalRuleTemplateName !== undefined &&
      input.approvalRuleTemplateName !== null && { approvalRuleTemplateName: input.approvalRuleTemplateName }),
  };
};

const serializeAws_json1_1CreateBranchInput = (input: CreateBranchInput, context: __SerdeContext): any => {
  return {
    ...(input.branchName !== undefined && input.branchName !== null && { branchName: input.branchName }),
    ...(input.commitId !== undefined && input.commitId !== null && { commitId: input.commitId }),
    ...(input.repositoryName !== undefined &&
      input.repositoryName !== null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1CreateCommitInput = (input: CreateCommitInput, context: __SerdeContext): any => {
  return {
    ...(input.authorName !== undefined && input.authorName !== null && { authorName: input.authorName }),
    ...(input.branchName !== undefined && input.branchName !== null && { branchName: input.branchName }),
    ...(input.commitMessage !== undefined && input.commitMessage !== null && { commitMessage: input.commitMessage }),
    ...(input.deleteFiles !== undefined &&
      input.deleteFiles !== null && { deleteFiles: serializeAws_json1_1DeleteFileEntries(input.deleteFiles, context) }),
    ...(input.email !== undefined && input.email !== null && { email: input.email }),
    ...(input.keepEmptyFolders !== undefined &&
      input.keepEmptyFolders !== null && { keepEmptyFolders: input.keepEmptyFolders }),
    ...(input.parentCommitId !== undefined &&
      input.parentCommitId !== null && { parentCommitId: input.parentCommitId }),
    ...(input.putFiles !== undefined &&
      input.putFiles !== null && { putFiles: serializeAws_json1_1PutFileEntries(input.putFiles, context) }),
    ...(input.repositoryName !== undefined &&
      input.repositoryName !== null && { repositoryName: input.repositoryName }),
    ...(input.setFileModes !== undefined &&
      input.setFileModes !== null && {
        setFileModes: serializeAws_json1_1SetFileModeEntries(input.setFileModes, context),
      }),
  };
};

const serializeAws_json1_1CreatePullRequestApprovalRuleInput = (
  input: CreatePullRequestApprovalRuleInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.approvalRuleContent !== undefined &&
      input.approvalRuleContent !== null && { approvalRuleContent: input.approvalRuleContent }),
    ...(input.approvalRuleName !== undefined &&
      input.approvalRuleName !== null && { approvalRuleName: input.approvalRuleName }),
    ...(input.pullRequestId !== undefined && input.pullRequestId !== null && { pullRequestId: input.pullRequestId }),
  };
};

const serializeAws_json1_1CreatePullRequestInput = (input: CreatePullRequestInput, context: __SerdeContext): any => {
  return {
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.targets !== undefined &&
      input.targets !== null && { targets: serializeAws_json1_1TargetList(input.targets, context) }),
    ...(input.title !== undefined && input.title !== null && { title: input.title }),
  };
};

const serializeAws_json1_1CreateRepositoryInput = (input: CreateRepositoryInput, context: __SerdeContext): any => {
  return {
    ...(input.repositoryDescription !== undefined &&
      input.repositoryDescription !== null && { repositoryDescription: input.repositoryDescription }),
    ...(input.repositoryName !== undefined &&
      input.repositoryName !== null && { repositoryName: input.repositoryName }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagsMap(input.tags, context) }),
  };
};

const serializeAws_json1_1CreateUnreferencedMergeCommitInput = (
  input: CreateUnreferencedMergeCommitInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.authorName !== undefined && input.authorName !== null && { authorName: input.authorName }),
    ...(input.commitMessage !== undefined && input.commitMessage !== null && { commitMessage: input.commitMessage }),
    ...(input.conflictDetailLevel !== undefined &&
      input.conflictDetailLevel !== null && { conflictDetailLevel: input.conflictDetailLevel }),
    ...(input.conflictResolution !== undefined &&
      input.conflictResolution !== null && {
        conflictResolution: serializeAws_json1_1ConflictResolution(input.conflictResolution, context),
      }),
    ...(input.conflictResolutionStrategy !== undefined &&
      input.conflictResolutionStrategy !== null && { conflictResolutionStrategy: input.conflictResolutionStrategy }),
    ...(input.destinationCommitSpecifier !== undefined &&
      input.destinationCommitSpecifier !== null && { destinationCommitSpecifier: input.destinationCommitSpecifier }),
    ...(input.email !== undefined && input.email !== null && { email: input.email }),
    ...(input.keepEmptyFolders !== undefined &&
      input.keepEmptyFolders !== null && { keepEmptyFolders: input.keepEmptyFolders }),
    ...(input.mergeOption !== undefined && input.mergeOption !== null && { mergeOption: input.mergeOption }),
    ...(input.repositoryName !== undefined &&
      input.repositoryName !== null && { repositoryName: input.repositoryName }),
    ...(input.sourceCommitSpecifier !== undefined &&
      input.sourceCommitSpecifier !== null && { sourceCommitSpecifier: input.sourceCommitSpecifier }),
  };
};

const serializeAws_json1_1DeleteApprovalRuleTemplateInput = (
  input: DeleteApprovalRuleTemplateInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.approvalRuleTemplateName !== undefined &&
      input.approvalRuleTemplateName !== null && { approvalRuleTemplateName: input.approvalRuleTemplateName }),
  };
};

const serializeAws_json1_1DeleteBranchInput = (input: DeleteBranchInput, context: __SerdeContext): any => {
  return {
    ...(input.branchName !== undefined && input.branchName !== null && { branchName: input.branchName }),
    ...(input.repositoryName !== undefined &&
      input.repositoryName !== null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1DeleteCommentContentInput = (
  input: DeleteCommentContentInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.commentId !== undefined && input.commentId !== null && { commentId: input.commentId }),
  };
};

const serializeAws_json1_1DeleteFileEntries = (input: DeleteFileEntry[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1DeleteFileEntry(entry, context);
    });
};

const serializeAws_json1_1DeleteFileEntry = (input: DeleteFileEntry, context: __SerdeContext): any => {
  return {
    ...(input.filePath !== undefined && input.filePath !== null && { filePath: input.filePath }),
  };
};

const serializeAws_json1_1DeleteFileInput = (input: DeleteFileInput, context: __SerdeContext): any => {
  return {
    ...(input.branchName !== undefined && input.branchName !== null && { branchName: input.branchName }),
    ...(input.commitMessage !== undefined && input.commitMessage !== null && { commitMessage: input.commitMessage }),
    ...(input.email !== undefined && input.email !== null && { email: input.email }),
    ...(input.filePath !== undefined && input.filePath !== null && { filePath: input.filePath }),
    ...(input.keepEmptyFolders !== undefined &&
      input.keepEmptyFolders !== null && { keepEmptyFolders: input.keepEmptyFolders }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.parentCommitId !== undefined &&
      input.parentCommitId !== null && { parentCommitId: input.parentCommitId }),
    ...(input.repositoryName !== undefined &&
      input.repositoryName !== null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1DeletePullRequestApprovalRuleInput = (
  input: DeletePullRequestApprovalRuleInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.approvalRuleName !== undefined &&
      input.approvalRuleName !== null && { approvalRuleName: input.approvalRuleName }),
    ...(input.pullRequestId !== undefined && input.pullRequestId !== null && { pullRequestId: input.pullRequestId }),
  };
};

const serializeAws_json1_1DeleteRepositoryInput = (input: DeleteRepositoryInput, context: __SerdeContext): any => {
  return {
    ...(input.repositoryName !== undefined &&
      input.repositoryName !== null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1DescribeMergeConflictsInput = (
  input: DescribeMergeConflictsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.conflictDetailLevel !== undefined &&
      input.conflictDetailLevel !== null && { conflictDetailLevel: input.conflictDetailLevel }),
    ...(input.conflictResolutionStrategy !== undefined &&
      input.conflictResolutionStrategy !== null && { conflictResolutionStrategy: input.conflictResolutionStrategy }),
    ...(input.destinationCommitSpecifier !== undefined &&
      input.destinationCommitSpecifier !== null && { destinationCommitSpecifier: input.destinationCommitSpecifier }),
    ...(input.filePath !== undefined && input.filePath !== null && { filePath: input.filePath }),
    ...(input.maxMergeHunks !== undefined && input.maxMergeHunks !== null && { maxMergeHunks: input.maxMergeHunks }),
    ...(input.mergeOption !== undefined && input.mergeOption !== null && { mergeOption: input.mergeOption }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.repositoryName !== undefined &&
      input.repositoryName !== null && { repositoryName: input.repositoryName }),
    ...(input.sourceCommitSpecifier !== undefined &&
      input.sourceCommitSpecifier !== null && { sourceCommitSpecifier: input.sourceCommitSpecifier }),
  };
};

const serializeAws_json1_1DescribePullRequestEventsInput = (
  input: DescribePullRequestEventsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.actorArn !== undefined && input.actorArn !== null && { actorArn: input.actorArn }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.pullRequestEventType !== undefined &&
      input.pullRequestEventType !== null && { pullRequestEventType: input.pullRequestEventType }),
    ...(input.pullRequestId !== undefined && input.pullRequestId !== null && { pullRequestId: input.pullRequestId }),
  };
};

const serializeAws_json1_1DisassociateApprovalRuleTemplateFromRepositoryInput = (
  input: DisassociateApprovalRuleTemplateFromRepositoryInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.approvalRuleTemplateName !== undefined &&
      input.approvalRuleTemplateName !== null && { approvalRuleTemplateName: input.approvalRuleTemplateName }),
    ...(input.repositoryName !== undefined &&
      input.repositoryName !== null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1EvaluatePullRequestApprovalRulesInput = (
  input: EvaluatePullRequestApprovalRulesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.pullRequestId !== undefined && input.pullRequestId !== null && { pullRequestId: input.pullRequestId }),
    ...(input.revisionId !== undefined && input.revisionId !== null && { revisionId: input.revisionId }),
  };
};

const serializeAws_json1_1FilePaths = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1GetApprovalRuleTemplateInput = (
  input: GetApprovalRuleTemplateInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.approvalRuleTemplateName !== undefined &&
      input.approvalRuleTemplateName !== null && { approvalRuleTemplateName: input.approvalRuleTemplateName }),
  };
};

const serializeAws_json1_1GetBlobInput = (input: GetBlobInput, context: __SerdeContext): any => {
  return {
    ...(input.blobId !== undefined && input.blobId !== null && { blobId: input.blobId }),
    ...(input.repositoryName !== undefined &&
      input.repositoryName !== null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1GetBranchInput = (input: GetBranchInput, context: __SerdeContext): any => {
  return {
    ...(input.branchName !== undefined && input.branchName !== null && { branchName: input.branchName }),
    ...(input.repositoryName !== undefined &&
      input.repositoryName !== null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1GetCommentInput = (input: GetCommentInput, context: __SerdeContext): any => {
  return {
    ...(input.commentId !== undefined && input.commentId !== null && { commentId: input.commentId }),
  };
};

const serializeAws_json1_1GetCommentReactionsInput = (
  input: GetCommentReactionsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.commentId !== undefined && input.commentId !== null && { commentId: input.commentId }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.reactionUserArn !== undefined &&
      input.reactionUserArn !== null && { reactionUserArn: input.reactionUserArn }),
  };
};

const serializeAws_json1_1GetCommentsForComparedCommitInput = (
  input: GetCommentsForComparedCommitInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.afterCommitId !== undefined && input.afterCommitId !== null && { afterCommitId: input.afterCommitId }),
    ...(input.beforeCommitId !== undefined &&
      input.beforeCommitId !== null && { beforeCommitId: input.beforeCommitId }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.repositoryName !== undefined &&
      input.repositoryName !== null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1GetCommentsForPullRequestInput = (
  input: GetCommentsForPullRequestInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.afterCommitId !== undefined && input.afterCommitId !== null && { afterCommitId: input.afterCommitId }),
    ...(input.beforeCommitId !== undefined &&
      input.beforeCommitId !== null && { beforeCommitId: input.beforeCommitId }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.pullRequestId !== undefined && input.pullRequestId !== null && { pullRequestId: input.pullRequestId }),
    ...(input.repositoryName !== undefined &&
      input.repositoryName !== null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1GetCommitInput = (input: GetCommitInput, context: __SerdeContext): any => {
  return {
    ...(input.commitId !== undefined && input.commitId !== null && { commitId: input.commitId }),
    ...(input.repositoryName !== undefined &&
      input.repositoryName !== null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1GetDifferencesInput = (input: GetDifferencesInput, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.afterCommitSpecifier !== undefined &&
      input.afterCommitSpecifier !== null && { afterCommitSpecifier: input.afterCommitSpecifier }),
    ...(input.afterPath !== undefined && input.afterPath !== null && { afterPath: input.afterPath }),
    ...(input.beforeCommitSpecifier !== undefined &&
      input.beforeCommitSpecifier !== null && { beforeCommitSpecifier: input.beforeCommitSpecifier }),
    ...(input.beforePath !== undefined && input.beforePath !== null && { beforePath: input.beforePath }),
    ...(input.repositoryName !== undefined &&
      input.repositoryName !== null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1GetFileInput = (input: GetFileInput, context: __SerdeContext): any => {
  return {
    ...(input.commitSpecifier !== undefined &&
      input.commitSpecifier !== null && { commitSpecifier: input.commitSpecifier }),
    ...(input.filePath !== undefined && input.filePath !== null && { filePath: input.filePath }),
    ...(input.repositoryName !== undefined &&
      input.repositoryName !== null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1GetFolderInput = (input: GetFolderInput, context: __SerdeContext): any => {
  return {
    ...(input.commitSpecifier !== undefined &&
      input.commitSpecifier !== null && { commitSpecifier: input.commitSpecifier }),
    ...(input.folderPath !== undefined && input.folderPath !== null && { folderPath: input.folderPath }),
    ...(input.repositoryName !== undefined &&
      input.repositoryName !== null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1GetMergeCommitInput = (input: GetMergeCommitInput, context: __SerdeContext): any => {
  return {
    ...(input.conflictDetailLevel !== undefined &&
      input.conflictDetailLevel !== null && { conflictDetailLevel: input.conflictDetailLevel }),
    ...(input.conflictResolutionStrategy !== undefined &&
      input.conflictResolutionStrategy !== null && { conflictResolutionStrategy: input.conflictResolutionStrategy }),
    ...(input.destinationCommitSpecifier !== undefined &&
      input.destinationCommitSpecifier !== null && { destinationCommitSpecifier: input.destinationCommitSpecifier }),
    ...(input.repositoryName !== undefined &&
      input.repositoryName !== null && { repositoryName: input.repositoryName }),
    ...(input.sourceCommitSpecifier !== undefined &&
      input.sourceCommitSpecifier !== null && { sourceCommitSpecifier: input.sourceCommitSpecifier }),
  };
};

const serializeAws_json1_1GetMergeConflictsInput = (input: GetMergeConflictsInput, context: __SerdeContext): any => {
  return {
    ...(input.conflictDetailLevel !== undefined &&
      input.conflictDetailLevel !== null && { conflictDetailLevel: input.conflictDetailLevel }),
    ...(input.conflictResolutionStrategy !== undefined &&
      input.conflictResolutionStrategy !== null && { conflictResolutionStrategy: input.conflictResolutionStrategy }),
    ...(input.destinationCommitSpecifier !== undefined &&
      input.destinationCommitSpecifier !== null && { destinationCommitSpecifier: input.destinationCommitSpecifier }),
    ...(input.maxConflictFiles !== undefined &&
      input.maxConflictFiles !== null && { maxConflictFiles: input.maxConflictFiles }),
    ...(input.mergeOption !== undefined && input.mergeOption !== null && { mergeOption: input.mergeOption }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.repositoryName !== undefined &&
      input.repositoryName !== null && { repositoryName: input.repositoryName }),
    ...(input.sourceCommitSpecifier !== undefined &&
      input.sourceCommitSpecifier !== null && { sourceCommitSpecifier: input.sourceCommitSpecifier }),
  };
};

const serializeAws_json1_1GetMergeOptionsInput = (input: GetMergeOptionsInput, context: __SerdeContext): any => {
  return {
    ...(input.conflictDetailLevel !== undefined &&
      input.conflictDetailLevel !== null && { conflictDetailLevel: input.conflictDetailLevel }),
    ...(input.conflictResolutionStrategy !== undefined &&
      input.conflictResolutionStrategy !== null && { conflictResolutionStrategy: input.conflictResolutionStrategy }),
    ...(input.destinationCommitSpecifier !== undefined &&
      input.destinationCommitSpecifier !== null && { destinationCommitSpecifier: input.destinationCommitSpecifier }),
    ...(input.repositoryName !== undefined &&
      input.repositoryName !== null && { repositoryName: input.repositoryName }),
    ...(input.sourceCommitSpecifier !== undefined &&
      input.sourceCommitSpecifier !== null && { sourceCommitSpecifier: input.sourceCommitSpecifier }),
  };
};

const serializeAws_json1_1GetPullRequestApprovalStatesInput = (
  input: GetPullRequestApprovalStatesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.pullRequestId !== undefined && input.pullRequestId !== null && { pullRequestId: input.pullRequestId }),
    ...(input.revisionId !== undefined && input.revisionId !== null && { revisionId: input.revisionId }),
  };
};

const serializeAws_json1_1GetPullRequestInput = (input: GetPullRequestInput, context: __SerdeContext): any => {
  return {
    ...(input.pullRequestId !== undefined && input.pullRequestId !== null && { pullRequestId: input.pullRequestId }),
  };
};

const serializeAws_json1_1GetPullRequestOverrideStateInput = (
  input: GetPullRequestOverrideStateInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.pullRequestId !== undefined && input.pullRequestId !== null && { pullRequestId: input.pullRequestId }),
    ...(input.revisionId !== undefined && input.revisionId !== null && { revisionId: input.revisionId }),
  };
};

const serializeAws_json1_1GetRepositoryInput = (input: GetRepositoryInput, context: __SerdeContext): any => {
  return {
    ...(input.repositoryName !== undefined &&
      input.repositoryName !== null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1GetRepositoryTriggersInput = (
  input: GetRepositoryTriggersInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.repositoryName !== undefined &&
      input.repositoryName !== null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1ListApprovalRuleTemplatesInput = (
  input: ListApprovalRuleTemplatesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1ListAssociatedApprovalRuleTemplatesForRepositoryInput = (
  input: ListAssociatedApprovalRuleTemplatesForRepositoryInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.repositoryName !== undefined &&
      input.repositoryName !== null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1ListBranchesInput = (input: ListBranchesInput, context: __SerdeContext): any => {
  return {
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.repositoryName !== undefined &&
      input.repositoryName !== null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1ListPullRequestsInput = (input: ListPullRequestsInput, context: __SerdeContext): any => {
  return {
    ...(input.authorArn !== undefined && input.authorArn !== null && { authorArn: input.authorArn }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.pullRequestStatus !== undefined &&
      input.pullRequestStatus !== null && { pullRequestStatus: input.pullRequestStatus }),
    ...(input.repositoryName !== undefined &&
      input.repositoryName !== null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1ListRepositoriesForApprovalRuleTemplateInput = (
  input: ListRepositoriesForApprovalRuleTemplateInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.approvalRuleTemplateName !== undefined &&
      input.approvalRuleTemplateName !== null && { approvalRuleTemplateName: input.approvalRuleTemplateName }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1ListRepositoriesInput = (input: ListRepositoriesInput, context: __SerdeContext): any => {
  return {
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.order !== undefined && input.order !== null && { order: input.order }),
    ...(input.sortBy !== undefined && input.sortBy !== null && { sortBy: input.sortBy }),
  };
};

const serializeAws_json1_1ListTagsForResourceInput = (
  input: ListTagsForResourceInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
  };
};

const serializeAws_json1_1Location = (input: Location, context: __SerdeContext): any => {
  return {
    ...(input.filePath !== undefined && input.filePath !== null && { filePath: input.filePath }),
    ...(input.filePosition !== undefined && input.filePosition !== null && { filePosition: input.filePosition }),
    ...(input.relativeFileVersion !== undefined &&
      input.relativeFileVersion !== null && { relativeFileVersion: input.relativeFileVersion }),
  };
};

const serializeAws_json1_1MergeBranchesByFastForwardInput = (
  input: MergeBranchesByFastForwardInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.destinationCommitSpecifier !== undefined &&
      input.destinationCommitSpecifier !== null && { destinationCommitSpecifier: input.destinationCommitSpecifier }),
    ...(input.repositoryName !== undefined &&
      input.repositoryName !== null && { repositoryName: input.repositoryName }),
    ...(input.sourceCommitSpecifier !== undefined &&
      input.sourceCommitSpecifier !== null && { sourceCommitSpecifier: input.sourceCommitSpecifier }),
    ...(input.targetBranch !== undefined && input.targetBranch !== null && { targetBranch: input.targetBranch }),
  };
};

const serializeAws_json1_1MergeBranchesBySquashInput = (
  input: MergeBranchesBySquashInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.authorName !== undefined && input.authorName !== null && { authorName: input.authorName }),
    ...(input.commitMessage !== undefined && input.commitMessage !== null && { commitMessage: input.commitMessage }),
    ...(input.conflictDetailLevel !== undefined &&
      input.conflictDetailLevel !== null && { conflictDetailLevel: input.conflictDetailLevel }),
    ...(input.conflictResolution !== undefined &&
      input.conflictResolution !== null && {
        conflictResolution: serializeAws_json1_1ConflictResolution(input.conflictResolution, context),
      }),
    ...(input.conflictResolutionStrategy !== undefined &&
      input.conflictResolutionStrategy !== null && { conflictResolutionStrategy: input.conflictResolutionStrategy }),
    ...(input.destinationCommitSpecifier !== undefined &&
      input.destinationCommitSpecifier !== null && { destinationCommitSpecifier: input.destinationCommitSpecifier }),
    ...(input.email !== undefined && input.email !== null && { email: input.email }),
    ...(input.keepEmptyFolders !== undefined &&
      input.keepEmptyFolders !== null && { keepEmptyFolders: input.keepEmptyFolders }),
    ...(input.repositoryName !== undefined &&
      input.repositoryName !== null && { repositoryName: input.repositoryName }),
    ...(input.sourceCommitSpecifier !== undefined &&
      input.sourceCommitSpecifier !== null && { sourceCommitSpecifier: input.sourceCommitSpecifier }),
    ...(input.targetBranch !== undefined && input.targetBranch !== null && { targetBranch: input.targetBranch }),
  };
};

const serializeAws_json1_1MergeBranchesByThreeWayInput = (
  input: MergeBranchesByThreeWayInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.authorName !== undefined && input.authorName !== null && { authorName: input.authorName }),
    ...(input.commitMessage !== undefined && input.commitMessage !== null && { commitMessage: input.commitMessage }),
    ...(input.conflictDetailLevel !== undefined &&
      input.conflictDetailLevel !== null && { conflictDetailLevel: input.conflictDetailLevel }),
    ...(input.conflictResolution !== undefined &&
      input.conflictResolution !== null && {
        conflictResolution: serializeAws_json1_1ConflictResolution(input.conflictResolution, context),
      }),
    ...(input.conflictResolutionStrategy !== undefined &&
      input.conflictResolutionStrategy !== null && { conflictResolutionStrategy: input.conflictResolutionStrategy }),
    ...(input.destinationCommitSpecifier !== undefined &&
      input.destinationCommitSpecifier !== null && { destinationCommitSpecifier: input.destinationCommitSpecifier }),
    ...(input.email !== undefined && input.email !== null && { email: input.email }),
    ...(input.keepEmptyFolders !== undefined &&
      input.keepEmptyFolders !== null && { keepEmptyFolders: input.keepEmptyFolders }),
    ...(input.repositoryName !== undefined &&
      input.repositoryName !== null && { repositoryName: input.repositoryName }),
    ...(input.sourceCommitSpecifier !== undefined &&
      input.sourceCommitSpecifier !== null && { sourceCommitSpecifier: input.sourceCommitSpecifier }),
    ...(input.targetBranch !== undefined && input.targetBranch !== null && { targetBranch: input.targetBranch }),
  };
};

const serializeAws_json1_1MergePullRequestByFastForwardInput = (
  input: MergePullRequestByFastForwardInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.pullRequestId !== undefined && input.pullRequestId !== null && { pullRequestId: input.pullRequestId }),
    ...(input.repositoryName !== undefined &&
      input.repositoryName !== null && { repositoryName: input.repositoryName }),
    ...(input.sourceCommitId !== undefined &&
      input.sourceCommitId !== null && { sourceCommitId: input.sourceCommitId }),
  };
};

const serializeAws_json1_1MergePullRequestBySquashInput = (
  input: MergePullRequestBySquashInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.authorName !== undefined && input.authorName !== null && { authorName: input.authorName }),
    ...(input.commitMessage !== undefined && input.commitMessage !== null && { commitMessage: input.commitMessage }),
    ...(input.conflictDetailLevel !== undefined &&
      input.conflictDetailLevel !== null && { conflictDetailLevel: input.conflictDetailLevel }),
    ...(input.conflictResolution !== undefined &&
      input.conflictResolution !== null && {
        conflictResolution: serializeAws_json1_1ConflictResolution(input.conflictResolution, context),
      }),
    ...(input.conflictResolutionStrategy !== undefined &&
      input.conflictResolutionStrategy !== null && { conflictResolutionStrategy: input.conflictResolutionStrategy }),
    ...(input.email !== undefined && input.email !== null && { email: input.email }),
    ...(input.keepEmptyFolders !== undefined &&
      input.keepEmptyFolders !== null && { keepEmptyFolders: input.keepEmptyFolders }),
    ...(input.pullRequestId !== undefined && input.pullRequestId !== null && { pullRequestId: input.pullRequestId }),
    ...(input.repositoryName !== undefined &&
      input.repositoryName !== null && { repositoryName: input.repositoryName }),
    ...(input.sourceCommitId !== undefined &&
      input.sourceCommitId !== null && { sourceCommitId: input.sourceCommitId }),
  };
};

const serializeAws_json1_1MergePullRequestByThreeWayInput = (
  input: MergePullRequestByThreeWayInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.authorName !== undefined && input.authorName !== null && { authorName: input.authorName }),
    ...(input.commitMessage !== undefined && input.commitMessage !== null && { commitMessage: input.commitMessage }),
    ...(input.conflictDetailLevel !== undefined &&
      input.conflictDetailLevel !== null && { conflictDetailLevel: input.conflictDetailLevel }),
    ...(input.conflictResolution !== undefined &&
      input.conflictResolution !== null && {
        conflictResolution: serializeAws_json1_1ConflictResolution(input.conflictResolution, context),
      }),
    ...(input.conflictResolutionStrategy !== undefined &&
      input.conflictResolutionStrategy !== null && { conflictResolutionStrategy: input.conflictResolutionStrategy }),
    ...(input.email !== undefined && input.email !== null && { email: input.email }),
    ...(input.keepEmptyFolders !== undefined &&
      input.keepEmptyFolders !== null && { keepEmptyFolders: input.keepEmptyFolders }),
    ...(input.pullRequestId !== undefined && input.pullRequestId !== null && { pullRequestId: input.pullRequestId }),
    ...(input.repositoryName !== undefined &&
      input.repositoryName !== null && { repositoryName: input.repositoryName }),
    ...(input.sourceCommitId !== undefined &&
      input.sourceCommitId !== null && { sourceCommitId: input.sourceCommitId }),
  };
};

const serializeAws_json1_1OverridePullRequestApprovalRulesInput = (
  input: OverridePullRequestApprovalRulesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.overrideStatus !== undefined &&
      input.overrideStatus !== null && { overrideStatus: input.overrideStatus }),
    ...(input.pullRequestId !== undefined && input.pullRequestId !== null && { pullRequestId: input.pullRequestId }),
    ...(input.revisionId !== undefined && input.revisionId !== null && { revisionId: input.revisionId }),
  };
};

const serializeAws_json1_1PostCommentForComparedCommitInput = (
  input: PostCommentForComparedCommitInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.afterCommitId !== undefined && input.afterCommitId !== null && { afterCommitId: input.afterCommitId }),
    ...(input.beforeCommitId !== undefined &&
      input.beforeCommitId !== null && { beforeCommitId: input.beforeCommitId }),
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.content !== undefined && input.content !== null && { content: input.content }),
    ...(input.location !== undefined &&
      input.location !== null && { location: serializeAws_json1_1Location(input.location, context) }),
    ...(input.repositoryName !== undefined &&
      input.repositoryName !== null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1PostCommentForPullRequestInput = (
  input: PostCommentForPullRequestInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.afterCommitId !== undefined && input.afterCommitId !== null && { afterCommitId: input.afterCommitId }),
    ...(input.beforeCommitId !== undefined &&
      input.beforeCommitId !== null && { beforeCommitId: input.beforeCommitId }),
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.content !== undefined && input.content !== null && { content: input.content }),
    ...(input.location !== undefined &&
      input.location !== null && { location: serializeAws_json1_1Location(input.location, context) }),
    ...(input.pullRequestId !== undefined && input.pullRequestId !== null && { pullRequestId: input.pullRequestId }),
    ...(input.repositoryName !== undefined &&
      input.repositoryName !== null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1PostCommentReplyInput = (input: PostCommentReplyInput, context: __SerdeContext): any => {
  return {
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.content !== undefined && input.content !== null && { content: input.content }),
    ...(input.inReplyTo !== undefined && input.inReplyTo !== null && { inReplyTo: input.inReplyTo }),
  };
};

const serializeAws_json1_1PutCommentReactionInput = (input: PutCommentReactionInput, context: __SerdeContext): any => {
  return {
    ...(input.commentId !== undefined && input.commentId !== null && { commentId: input.commentId }),
    ...(input.reactionValue !== undefined && input.reactionValue !== null && { reactionValue: input.reactionValue }),
  };
};

const serializeAws_json1_1PutFileEntries = (input: PutFileEntry[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1PutFileEntry(entry, context);
    });
};

const serializeAws_json1_1PutFileEntry = (input: PutFileEntry, context: __SerdeContext): any => {
  return {
    ...(input.fileContent !== undefined &&
      input.fileContent !== null && { fileContent: context.base64Encoder(input.fileContent) }),
    ...(input.fileMode !== undefined && input.fileMode !== null && { fileMode: input.fileMode }),
    ...(input.filePath !== undefined && input.filePath !== null && { filePath: input.filePath }),
    ...(input.sourceFile !== undefined &&
      input.sourceFile !== null && { sourceFile: serializeAws_json1_1SourceFileSpecifier(input.sourceFile, context) }),
  };
};

const serializeAws_json1_1PutFileInput = (input: PutFileInput, context: __SerdeContext): any => {
  return {
    ...(input.branchName !== undefined && input.branchName !== null && { branchName: input.branchName }),
    ...(input.commitMessage !== undefined && input.commitMessage !== null && { commitMessage: input.commitMessage }),
    ...(input.email !== undefined && input.email !== null && { email: input.email }),
    ...(input.fileContent !== undefined &&
      input.fileContent !== null && { fileContent: context.base64Encoder(input.fileContent) }),
    ...(input.fileMode !== undefined && input.fileMode !== null && { fileMode: input.fileMode }),
    ...(input.filePath !== undefined && input.filePath !== null && { filePath: input.filePath }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.parentCommitId !== undefined &&
      input.parentCommitId !== null && { parentCommitId: input.parentCommitId }),
    ...(input.repositoryName !== undefined &&
      input.repositoryName !== null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1PutRepositoryTriggersInput = (
  input: PutRepositoryTriggersInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.repositoryName !== undefined &&
      input.repositoryName !== null && { repositoryName: input.repositoryName }),
    ...(input.triggers !== undefined &&
      input.triggers !== null && { triggers: serializeAws_json1_1RepositoryTriggersList(input.triggers, context) }),
  };
};

const serializeAws_json1_1ReplaceContentEntries = (input: ReplaceContentEntry[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1ReplaceContentEntry(entry, context);
    });
};

const serializeAws_json1_1ReplaceContentEntry = (input: ReplaceContentEntry, context: __SerdeContext): any => {
  return {
    ...(input.content !== undefined && input.content !== null && { content: context.base64Encoder(input.content) }),
    ...(input.fileMode !== undefined && input.fileMode !== null && { fileMode: input.fileMode }),
    ...(input.filePath !== undefined && input.filePath !== null && { filePath: input.filePath }),
    ...(input.replacementType !== undefined &&
      input.replacementType !== null && { replacementType: input.replacementType }),
  };
};

const serializeAws_json1_1RepositoryNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1RepositoryTrigger = (input: RepositoryTrigger, context: __SerdeContext): any => {
  return {
    ...(input.branches !== undefined &&
      input.branches !== null && { branches: serializeAws_json1_1BranchNameList(input.branches, context) }),
    ...(input.customData !== undefined && input.customData !== null && { customData: input.customData }),
    ...(input.destinationArn !== undefined &&
      input.destinationArn !== null && { destinationArn: input.destinationArn }),
    ...(input.events !== undefined &&
      input.events !== null && { events: serializeAws_json1_1RepositoryTriggerEventList(input.events, context) }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
  };
};

const serializeAws_json1_1RepositoryTriggerEventList = (
  input: (RepositoryTriggerEventEnum | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1RepositoryTriggersList = (input: RepositoryTrigger[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1RepositoryTrigger(entry, context);
    });
};

const serializeAws_json1_1SetFileModeEntries = (input: SetFileModeEntry[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1SetFileModeEntry(entry, context);
    });
};

const serializeAws_json1_1SetFileModeEntry = (input: SetFileModeEntry, context: __SerdeContext): any => {
  return {
    ...(input.fileMode !== undefined && input.fileMode !== null && { fileMode: input.fileMode }),
    ...(input.filePath !== undefined && input.filePath !== null && { filePath: input.filePath }),
  };
};

const serializeAws_json1_1SourceFileSpecifier = (input: SourceFileSpecifier, context: __SerdeContext): any => {
  return {
    ...(input.filePath !== undefined && input.filePath !== null && { filePath: input.filePath }),
    ...(input.isMove !== undefined && input.isMove !== null && { isMove: input.isMove }),
  };
};

const serializeAws_json1_1TagKeysList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1TagResourceInput = (input: TagResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagsMap(input.tags, context) }),
  };
};

const serializeAws_json1_1TagsMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_json1_1Target = (input: Target, context: __SerdeContext): any => {
  return {
    ...(input.destinationReference !== undefined &&
      input.destinationReference !== null && { destinationReference: input.destinationReference }),
    ...(input.repositoryName !== undefined &&
      input.repositoryName !== null && { repositoryName: input.repositoryName }),
    ...(input.sourceReference !== undefined &&
      input.sourceReference !== null && { sourceReference: input.sourceReference }),
  };
};

const serializeAws_json1_1TargetList = (input: Target[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Target(entry, context);
    });
};

const serializeAws_json1_1TestRepositoryTriggersInput = (
  input: TestRepositoryTriggersInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.repositoryName !== undefined &&
      input.repositoryName !== null && { repositoryName: input.repositoryName }),
    ...(input.triggers !== undefined &&
      input.triggers !== null && { triggers: serializeAws_json1_1RepositoryTriggersList(input.triggers, context) }),
  };
};

const serializeAws_json1_1UntagResourceInput = (input: UntagResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
    ...(input.tagKeys !== undefined &&
      input.tagKeys !== null && { tagKeys: serializeAws_json1_1TagKeysList(input.tagKeys, context) }),
  };
};

const serializeAws_json1_1UpdateApprovalRuleTemplateContentInput = (
  input: UpdateApprovalRuleTemplateContentInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.approvalRuleTemplateName !== undefined &&
      input.approvalRuleTemplateName !== null && { approvalRuleTemplateName: input.approvalRuleTemplateName }),
    ...(input.existingRuleContentSha256 !== undefined &&
      input.existingRuleContentSha256 !== null && { existingRuleContentSha256: input.existingRuleContentSha256 }),
    ...(input.newRuleContent !== undefined &&
      input.newRuleContent !== null && { newRuleContent: input.newRuleContent }),
  };
};

const serializeAws_json1_1UpdateApprovalRuleTemplateDescriptionInput = (
  input: UpdateApprovalRuleTemplateDescriptionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.approvalRuleTemplateDescription !== undefined &&
      input.approvalRuleTemplateDescription !== null && {
        approvalRuleTemplateDescription: input.approvalRuleTemplateDescription,
      }),
    ...(input.approvalRuleTemplateName !== undefined &&
      input.approvalRuleTemplateName !== null && { approvalRuleTemplateName: input.approvalRuleTemplateName }),
  };
};

const serializeAws_json1_1UpdateApprovalRuleTemplateNameInput = (
  input: UpdateApprovalRuleTemplateNameInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.newApprovalRuleTemplateName !== undefined &&
      input.newApprovalRuleTemplateName !== null && { newApprovalRuleTemplateName: input.newApprovalRuleTemplateName }),
    ...(input.oldApprovalRuleTemplateName !== undefined &&
      input.oldApprovalRuleTemplateName !== null && { oldApprovalRuleTemplateName: input.oldApprovalRuleTemplateName }),
  };
};

const serializeAws_json1_1UpdateCommentInput = (input: UpdateCommentInput, context: __SerdeContext): any => {
  return {
    ...(input.commentId !== undefined && input.commentId !== null && { commentId: input.commentId }),
    ...(input.content !== undefined && input.content !== null && { content: input.content }),
  };
};

const serializeAws_json1_1UpdateDefaultBranchInput = (
  input: UpdateDefaultBranchInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.defaultBranchName !== undefined &&
      input.defaultBranchName !== null && { defaultBranchName: input.defaultBranchName }),
    ...(input.repositoryName !== undefined &&
      input.repositoryName !== null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1UpdatePullRequestApprovalRuleContentInput = (
  input: UpdatePullRequestApprovalRuleContentInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.approvalRuleName !== undefined &&
      input.approvalRuleName !== null && { approvalRuleName: input.approvalRuleName }),
    ...(input.existingRuleContentSha256 !== undefined &&
      input.existingRuleContentSha256 !== null && { existingRuleContentSha256: input.existingRuleContentSha256 }),
    ...(input.newRuleContent !== undefined &&
      input.newRuleContent !== null && { newRuleContent: input.newRuleContent }),
    ...(input.pullRequestId !== undefined && input.pullRequestId !== null && { pullRequestId: input.pullRequestId }),
  };
};

const serializeAws_json1_1UpdatePullRequestApprovalStateInput = (
  input: UpdatePullRequestApprovalStateInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.approvalState !== undefined && input.approvalState !== null && { approvalState: input.approvalState }),
    ...(input.pullRequestId !== undefined && input.pullRequestId !== null && { pullRequestId: input.pullRequestId }),
    ...(input.revisionId !== undefined && input.revisionId !== null && { revisionId: input.revisionId }),
  };
};

const serializeAws_json1_1UpdatePullRequestDescriptionInput = (
  input: UpdatePullRequestDescriptionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.pullRequestId !== undefined && input.pullRequestId !== null && { pullRequestId: input.pullRequestId }),
  };
};

const serializeAws_json1_1UpdatePullRequestStatusInput = (
  input: UpdatePullRequestStatusInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.pullRequestId !== undefined && input.pullRequestId !== null && { pullRequestId: input.pullRequestId }),
    ...(input.pullRequestStatus !== undefined &&
      input.pullRequestStatus !== null && { pullRequestStatus: input.pullRequestStatus }),
  };
};

const serializeAws_json1_1UpdatePullRequestTitleInput = (
  input: UpdatePullRequestTitleInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.pullRequestId !== undefined && input.pullRequestId !== null && { pullRequestId: input.pullRequestId }),
    ...(input.title !== undefined && input.title !== null && { title: input.title }),
  };
};

const serializeAws_json1_1UpdateRepositoryDescriptionInput = (
  input: UpdateRepositoryDescriptionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.repositoryDescription !== undefined &&
      input.repositoryDescription !== null && { repositoryDescription: input.repositoryDescription }),
    ...(input.repositoryName !== undefined &&
      input.repositoryName !== null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1UpdateRepositoryNameInput = (
  input: UpdateRepositoryNameInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.newName !== undefined && input.newName !== null && { newName: input.newName }),
    ...(input.oldName !== undefined && input.oldName !== null && { oldName: input.oldName }),
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Approval(entry, context);
    });
};

const deserializeAws_json1_1ApprovalRule = (output: any, context: __SerdeContext): ApprovalRule => {
  return {
    approvalRuleContent: __expectString(output.approvalRuleContent),
    approvalRuleId: __expectString(output.approvalRuleId),
    approvalRuleName: __expectString(output.approvalRuleName),
    creationDate:
      output.creationDate !== undefined && output.creationDate !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDate)))
        : undefined,
    lastModifiedDate:
      output.lastModifiedDate !== undefined && output.lastModifiedDate !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastModifiedDate)))
        : undefined,
    lastModifiedUser: __expectString(output.lastModifiedUser),
    originApprovalRuleTemplate:
      output.originApprovalRuleTemplate !== undefined && output.originApprovalRuleTemplate !== null
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ApprovalRule(entry, context);
    });
};

const deserializeAws_json1_1ApprovalRulesNotSatisfiedList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1ApprovalRulesSatisfiedList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1ApprovalRuleTemplate = (output: any, context: __SerdeContext): ApprovalRuleTemplate => {
  return {
    approvalRuleTemplateContent: __expectString(output.approvalRuleTemplateContent),
    approvalRuleTemplateDescription: __expectString(output.approvalRuleTemplateDescription),
    approvalRuleTemplateId: __expectString(output.approvalRuleTemplateId),
    approvalRuleTemplateName: __expectString(output.approvalRuleTemplateName),
    creationDate:
      output.creationDate !== undefined && output.creationDate !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDate)))
        : undefined,
    lastModifiedDate:
      output.lastModifiedDate !== undefined && output.lastModifiedDate !== null
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesError(entry, context);
    });
};

const deserializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesOutput = (
  output: any,
  context: __SerdeContext
): BatchAssociateApprovalRuleTemplateWithRepositoriesOutput => {
  return {
    associatedRepositoryNames:
      output.associatedRepositoryNames !== undefined && output.associatedRepositoryNames !== null
        ? deserializeAws_json1_1RepositoryNameList(output.associatedRepositoryNames, context)
        : undefined,
    errors:
      output.errors !== undefined && output.errors !== null
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BatchDescribeMergeConflictsError(entry, context);
    });
};

const deserializeAws_json1_1BatchDescribeMergeConflictsOutput = (
  output: any,
  context: __SerdeContext
): BatchDescribeMergeConflictsOutput => {
  return {
    baseCommitId: __expectString(output.baseCommitId),
    conflicts:
      output.conflicts !== undefined && output.conflicts !== null
        ? deserializeAws_json1_1Conflicts(output.conflicts, context)
        : undefined,
    destinationCommitId: __expectString(output.destinationCommitId),
    errors:
      output.errors !== undefined && output.errors !== null
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BatchDisassociateApprovalRuleTemplateFromRepositoriesError(entry, context);
    });
};

const deserializeAws_json1_1BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput = (
  output: any,
  context: __SerdeContext
): BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput => {
  return {
    disassociatedRepositoryNames:
      output.disassociatedRepositoryNames !== undefined && output.disassociatedRepositoryNames !== null
        ? deserializeAws_json1_1RepositoryNameList(output.disassociatedRepositoryNames, context)
        : undefined,
    errors:
      output.errors !== undefined && output.errors !== null
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BatchGetCommitsError(entry, context);
    });
};

const deserializeAws_json1_1BatchGetCommitsOutput = (output: any, context: __SerdeContext): BatchGetCommitsOutput => {
  return {
    commits:
      output.commits !== undefined && output.commits !== null
        ? deserializeAws_json1_1CommitObjectsList(output.commits, context)
        : undefined,
    errors:
      output.errors !== undefined && output.errors !== null
        ? deserializeAws_json1_1BatchGetCommitsErrorsList(output.errors, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchGetRepositoriesOutput = (
  output: any,
  context: __SerdeContext
): BatchGetRepositoriesOutput => {
  return {
    repositories:
      output.repositories !== undefined && output.repositories !== null
        ? deserializeAws_json1_1RepositoryMetadataList(output.repositories, context)
        : undefined,
    repositoriesNotFound:
      output.repositoriesNotFound !== undefined && output.repositoriesNotFound !== null
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
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
      output.callerReactions !== undefined && output.callerReactions !== null
        ? deserializeAws_json1_1CallerReactions(output.callerReactions, context)
        : undefined,
    clientRequestToken: __expectString(output.clientRequestToken),
    commentId: __expectString(output.commentId),
    content: __expectString(output.content),
    creationDate:
      output.creationDate !== undefined && output.creationDate !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDate)))
        : undefined,
    deleted: __expectBoolean(output.deleted),
    inReplyTo: __expectString(output.inReplyTo),
    lastModifiedDate:
      output.lastModifiedDate !== undefined && output.lastModifiedDate !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastModifiedDate)))
        : undefined,
    reactionCounts:
      output.reactionCounts !== undefined && output.reactionCounts !== null
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Comment(entry, context);
    });
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
    comments:
      output.comments !== undefined && output.comments !== null
        ? deserializeAws_json1_1Comments(output.comments, context)
        : undefined,
    location:
      output.location !== undefined && output.location !== null
        ? deserializeAws_json1_1Location(output.location, context)
        : undefined,
    repositoryName: __expectString(output.repositoryName),
  } as any;
};

const deserializeAws_json1_1CommentsForComparedCommitData = (
  output: any,
  context: __SerdeContext
): CommentsForComparedCommit[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CommentsForComparedCommit(entry, context);
    });
};

const deserializeAws_json1_1CommentsForPullRequest = (output: any, context: __SerdeContext): CommentsForPullRequest => {
  return {
    afterBlobId: __expectString(output.afterBlobId),
    afterCommitId: __expectString(output.afterCommitId),
    beforeBlobId: __expectString(output.beforeBlobId),
    beforeCommitId: __expectString(output.beforeCommitId),
    comments:
      output.comments !== undefined && output.comments !== null
        ? deserializeAws_json1_1Comments(output.comments, context)
        : undefined,
    location:
      output.location !== undefined && output.location !== null
        ? deserializeAws_json1_1Location(output.location, context)
        : undefined,
    pullRequestId: __expectString(output.pullRequestId),
    repositoryName: __expectString(output.repositoryName),
  } as any;
};

const deserializeAws_json1_1CommentsForPullRequestData = (
  output: any,
  context: __SerdeContext
): CommentsForPullRequest[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CommentsForPullRequest(entry, context);
    });
};

const deserializeAws_json1_1Commit = (output: any, context: __SerdeContext): Commit => {
  return {
    additionalData: __expectString(output.additionalData),
    author:
      output.author !== undefined && output.author !== null
        ? deserializeAws_json1_1UserInfo(output.author, context)
        : undefined,
    commitId: __expectString(output.commitId),
    committer:
      output.committer !== undefined && output.committer !== null
        ? deserializeAws_json1_1UserInfo(output.committer, context)
        : undefined,
    message: __expectString(output.message),
    parents:
      output.parents !== undefined && output.parents !== null
        ? deserializeAws_json1_1ParentList(output.parents, context)
        : undefined,
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Commit(entry, context);
    });
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
      output.conflictMetadata !== undefined && output.conflictMetadata !== null
        ? deserializeAws_json1_1ConflictMetadata(output.conflictMetadata, context)
        : undefined,
    mergeHunks:
      output.mergeHunks !== undefined && output.mergeHunks !== null
        ? deserializeAws_json1_1MergeHunks(output.mergeHunks, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ConflictMetadata = (output: any, context: __SerdeContext): ConflictMetadata => {
  return {
    contentConflict: __expectBoolean(output.contentConflict),
    fileModeConflict: __expectBoolean(output.fileModeConflict),
    fileModes:
      output.fileModes !== undefined && output.fileModes !== null
        ? deserializeAws_json1_1FileModes(output.fileModes, context)
        : undefined,
    filePath: __expectString(output.filePath),
    fileSizes:
      output.fileSizes !== undefined && output.fileSizes !== null
        ? deserializeAws_json1_1FileSizes(output.fileSizes, context)
        : undefined,
    isBinaryFile:
      output.isBinaryFile !== undefined && output.isBinaryFile !== null
        ? deserializeAws_json1_1IsBinaryFile(output.isBinaryFile, context)
        : undefined,
    mergeOperations:
      output.mergeOperations !== undefined && output.mergeOperations !== null
        ? deserializeAws_json1_1MergeOperations(output.mergeOperations, context)
        : undefined,
    numberOfConflicts: __expectInt32(output.numberOfConflicts),
    objectTypeConflict: __expectBoolean(output.objectTypeConflict),
    objectTypes:
      output.objectTypes !== undefined && output.objectTypes !== null
        ? deserializeAws_json1_1ObjectTypes(output.objectTypes, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ConflictMetadataList = (output: any, context: __SerdeContext): ConflictMetadata[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ConflictMetadata(entry, context);
    });
};

const deserializeAws_json1_1Conflicts = (output: any, context: __SerdeContext): Conflict[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Conflict(entry, context);
    });
};

const deserializeAws_json1_1CreateApprovalRuleTemplateOutput = (
  output: any,
  context: __SerdeContext
): CreateApprovalRuleTemplateOutput => {
  return {
    approvalRuleTemplate:
      output.approvalRuleTemplate !== undefined && output.approvalRuleTemplate !== null
        ? deserializeAws_json1_1ApprovalRuleTemplate(output.approvalRuleTemplate, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateCommitOutput = (output: any, context: __SerdeContext): CreateCommitOutput => {
  return {
    commitId: __expectString(output.commitId),
    filesAdded:
      output.filesAdded !== undefined && output.filesAdded !== null
        ? deserializeAws_json1_1FilesMetadata(output.filesAdded, context)
        : undefined,
    filesDeleted:
      output.filesDeleted !== undefined && output.filesDeleted !== null
        ? deserializeAws_json1_1FilesMetadata(output.filesDeleted, context)
        : undefined,
    filesUpdated:
      output.filesUpdated !== undefined && output.filesUpdated !== null
        ? deserializeAws_json1_1FilesMetadata(output.filesUpdated, context)
        : undefined,
    treeId: __expectString(output.treeId),
  } as any;
};

const deserializeAws_json1_1CreatePullRequestApprovalRuleOutput = (
  output: any,
  context: __SerdeContext
): CreatePullRequestApprovalRuleOutput => {
  return {
    approvalRule:
      output.approvalRule !== undefined && output.approvalRule !== null
        ? deserializeAws_json1_1ApprovalRule(output.approvalRule, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreatePullRequestOutput = (
  output: any,
  context: __SerdeContext
): CreatePullRequestOutput => {
  return {
    pullRequest:
      output.pullRequest !== undefined && output.pullRequest !== null
        ? deserializeAws_json1_1PullRequest(output.pullRequest, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateRepositoryOutput = (output: any, context: __SerdeContext): CreateRepositoryOutput => {
  return {
    repositoryMetadata:
      output.repositoryMetadata !== undefined && output.repositoryMetadata !== null
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
      output.deletedBranch !== undefined && output.deletedBranch !== null
        ? deserializeAws_json1_1BranchInfo(output.deletedBranch, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteCommentContentOutput = (
  output: any,
  context: __SerdeContext
): DeleteCommentContentOutput => {
  return {
    comment:
      output.comment !== undefined && output.comment !== null
        ? deserializeAws_json1_1Comment(output.comment, context)
        : undefined,
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
      output.conflictMetadata !== undefined && output.conflictMetadata !== null
        ? deserializeAws_json1_1ConflictMetadata(output.conflictMetadata, context)
        : undefined,
    destinationCommitId: __expectString(output.destinationCommitId),
    mergeHunks:
      output.mergeHunks !== undefined && output.mergeHunks !== null
        ? deserializeAws_json1_1MergeHunks(output.mergeHunks, context)
        : undefined,
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
      output.pullRequestEvents !== undefined && output.pullRequestEvents !== null
        ? deserializeAws_json1_1PullRequestEventList(output.pullRequestEvents, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Difference = (output: any, context: __SerdeContext): Difference => {
  return {
    afterBlob:
      output.afterBlob !== undefined && output.afterBlob !== null
        ? deserializeAws_json1_1BlobMetadata(output.afterBlob, context)
        : undefined,
    beforeBlob:
      output.beforeBlob !== undefined && output.beforeBlob !== null
        ? deserializeAws_json1_1BlobMetadata(output.beforeBlob, context)
        : undefined,
    changeType: __expectString(output.changeType),
  } as any;
};

const deserializeAws_json1_1DifferenceList = (output: any, context: __SerdeContext): Difference[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Difference(entry, context);
    });
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
    evaluation:
      output.evaluation !== undefined && output.evaluation !== null
        ? deserializeAws_json1_1Evaluation(output.evaluation, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Evaluation = (output: any, context: __SerdeContext): Evaluation => {
  return {
    approvalRulesNotSatisfied:
      output.approvalRulesNotSatisfied !== undefined && output.approvalRulesNotSatisfied !== null
        ? deserializeAws_json1_1ApprovalRulesNotSatisfiedList(output.approvalRulesNotSatisfied, context)
        : undefined,
    approvalRulesSatisfied:
      output.approvalRulesSatisfied !== undefined && output.approvalRulesSatisfied !== null
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1File(entry, context);
    });
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1FileMetadata(entry, context);
    });
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Folder(entry, context);
    });
};

const deserializeAws_json1_1GetApprovalRuleTemplateOutput = (
  output: any,
  context: __SerdeContext
): GetApprovalRuleTemplateOutput => {
  return {
    approvalRuleTemplate:
      output.approvalRuleTemplate !== undefined && output.approvalRuleTemplate !== null
        ? deserializeAws_json1_1ApprovalRuleTemplate(output.approvalRuleTemplate, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetBlobOutput = (output: any, context: __SerdeContext): GetBlobOutput => {
  return {
    content:
      output.content !== undefined && output.content !== null ? context.base64Decoder(output.content) : undefined,
  } as any;
};

const deserializeAws_json1_1GetBranchOutput = (output: any, context: __SerdeContext): GetBranchOutput => {
  return {
    branch:
      output.branch !== undefined && output.branch !== null
        ? deserializeAws_json1_1BranchInfo(output.branch, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetCommentOutput = (output: any, context: __SerdeContext): GetCommentOutput => {
  return {
    comment:
      output.comment !== undefined && output.comment !== null
        ? deserializeAws_json1_1Comment(output.comment, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetCommentReactionsOutput = (
  output: any,
  context: __SerdeContext
): GetCommentReactionsOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    reactionsForComment:
      output.reactionsForComment !== undefined && output.reactionsForComment !== null
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
      output.commentsForComparedCommitData !== undefined && output.commentsForComparedCommitData !== null
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
      output.commentsForPullRequestData !== undefined && output.commentsForPullRequestData !== null
        ? deserializeAws_json1_1CommentsForPullRequestData(output.commentsForPullRequestData, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1GetCommitOutput = (output: any, context: __SerdeContext): GetCommitOutput => {
  return {
    commit:
      output.commit !== undefined && output.commit !== null
        ? deserializeAws_json1_1Commit(output.commit, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetDifferencesOutput = (output: any, context: __SerdeContext): GetDifferencesOutput => {
  return {
    NextToken: __expectString(output.NextToken),
    differences:
      output.differences !== undefined && output.differences !== null
        ? deserializeAws_json1_1DifferenceList(output.differences, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetFileOutput = (output: any, context: __SerdeContext): GetFileOutput => {
  return {
    blobId: __expectString(output.blobId),
    commitId: __expectString(output.commitId),
    fileContent:
      output.fileContent !== undefined && output.fileContent !== null
        ? context.base64Decoder(output.fileContent)
        : undefined,
    fileMode: __expectString(output.fileMode),
    filePath: __expectString(output.filePath),
    fileSize: __expectLong(output.fileSize),
  } as any;
};

const deserializeAws_json1_1GetFolderOutput = (output: any, context: __SerdeContext): GetFolderOutput => {
  return {
    commitId: __expectString(output.commitId),
    files:
      output.files !== undefined && output.files !== null
        ? deserializeAws_json1_1FileList(output.files, context)
        : undefined,
    folderPath: __expectString(output.folderPath),
    subFolders:
      output.subFolders !== undefined && output.subFolders !== null
        ? deserializeAws_json1_1FolderList(output.subFolders, context)
        : undefined,
    subModules:
      output.subModules !== undefined && output.subModules !== null
        ? deserializeAws_json1_1SubModuleList(output.subModules, context)
        : undefined,
    symbolicLinks:
      output.symbolicLinks !== undefined && output.symbolicLinks !== null
        ? deserializeAws_json1_1SymbolicLinkList(output.symbolicLinks, context)
        : undefined,
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
      output.conflictMetadataList !== undefined && output.conflictMetadataList !== null
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
      output.mergeOptions !== undefined && output.mergeOptions !== null
        ? deserializeAws_json1_1MergeOptions(output.mergeOptions, context)
        : undefined,
    sourceCommitId: __expectString(output.sourceCommitId),
  } as any;
};

const deserializeAws_json1_1GetPullRequestApprovalStatesOutput = (
  output: any,
  context: __SerdeContext
): GetPullRequestApprovalStatesOutput => {
  return {
    approvals:
      output.approvals !== undefined && output.approvals !== null
        ? deserializeAws_json1_1ApprovalList(output.approvals, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetPullRequestOutput = (output: any, context: __SerdeContext): GetPullRequestOutput => {
  return {
    pullRequest:
      output.pullRequest !== undefined && output.pullRequest !== null
        ? deserializeAws_json1_1PullRequest(output.pullRequest, context)
        : undefined,
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
      output.repositoryMetadata !== undefined && output.repositoryMetadata !== null
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
      output.triggers !== undefined && output.triggers !== null
        ? deserializeAws_json1_1RepositoryTriggersList(output.triggers, context)
        : undefined,
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
      output.approvalRuleTemplateNames !== undefined && output.approvalRuleTemplateNames !== null
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
      output.approvalRuleTemplateNames !== undefined && output.approvalRuleTemplateNames !== null
        ? deserializeAws_json1_1ApprovalRuleTemplateNameList(output.approvalRuleTemplateNames, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1ListBranchesOutput = (output: any, context: __SerdeContext): ListBranchesOutput => {
  return {
    branches:
      output.branches !== undefined && output.branches !== null
        ? deserializeAws_json1_1BranchNameList(output.branches, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1ListPullRequestsOutput = (output: any, context: __SerdeContext): ListPullRequestsOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    pullRequestIds:
      output.pullRequestIds !== undefined && output.pullRequestIds !== null
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
      output.repositoryNames !== undefined && output.repositoryNames !== null
        ? deserializeAws_json1_1RepositoryNameList(output.repositoryNames, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListRepositoriesOutput = (output: any, context: __SerdeContext): ListRepositoriesOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    repositories:
      output.repositories !== undefined && output.repositories !== null
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
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_json1_1TagsMap(output.tags, context)
        : undefined,
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
    base:
      output.base !== undefined && output.base !== null
        ? deserializeAws_json1_1MergeHunkDetail(output.base, context)
        : undefined,
    destination:
      output.destination !== undefined && output.destination !== null
        ? deserializeAws_json1_1MergeHunkDetail(output.destination, context)
        : undefined,
    isConflict: __expectBoolean(output.isConflict),
    source:
      output.source !== undefined && output.source !== null
        ? deserializeAws_json1_1MergeHunkDetail(output.source, context)
        : undefined,
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1MergeHunk(entry, context);
    });
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1MergePullRequestByFastForwardOutput = (
  output: any,
  context: __SerdeContext
): MergePullRequestByFastForwardOutput => {
  return {
    pullRequest:
      output.pullRequest !== undefined && output.pullRequest !== null
        ? deserializeAws_json1_1PullRequest(output.pullRequest, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1MergePullRequestBySquashOutput = (
  output: any,
  context: __SerdeContext
): MergePullRequestBySquashOutput => {
  return {
    pullRequest:
      output.pullRequest !== undefined && output.pullRequest !== null
        ? deserializeAws_json1_1PullRequest(output.pullRequest, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1MergePullRequestByThreeWayOutput = (
  output: any,
  context: __SerdeContext
): MergePullRequestByThreeWayOutput => {
  return {
    pullRequest:
      output.pullRequest !== undefined && output.pullRequest !== null
        ? deserializeAws_json1_1PullRequest(output.pullRequest, context)
        : undefined,
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
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
    comment:
      output.comment !== undefined && output.comment !== null
        ? deserializeAws_json1_1Comment(output.comment, context)
        : undefined,
    location:
      output.location !== undefined && output.location !== null
        ? deserializeAws_json1_1Location(output.location, context)
        : undefined,
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
    comment:
      output.comment !== undefined && output.comment !== null
        ? deserializeAws_json1_1Comment(output.comment, context)
        : undefined,
    location:
      output.location !== undefined && output.location !== null
        ? deserializeAws_json1_1Location(output.location, context)
        : undefined,
    pullRequestId: __expectString(output.pullRequestId),
    repositoryName: __expectString(output.repositoryName),
  } as any;
};

const deserializeAws_json1_1PostCommentReplyOutput = (output: any, context: __SerdeContext): PostCommentReplyOutput => {
  return {
    comment:
      output.comment !== undefined && output.comment !== null
        ? deserializeAws_json1_1Comment(output.comment, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1PullRequest = (output: any, context: __SerdeContext): PullRequest => {
  return {
    approvalRules:
      output.approvalRules !== undefined && output.approvalRules !== null
        ? deserializeAws_json1_1ApprovalRulesList(output.approvalRules, context)
        : undefined,
    authorArn: __expectString(output.authorArn),
    clientRequestToken: __expectString(output.clientRequestToken),
    creationDate:
      output.creationDate !== undefined && output.creationDate !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDate)))
        : undefined,
    description: __expectString(output.description),
    lastActivityDate:
      output.lastActivityDate !== undefined && output.lastActivityDate !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastActivityDate)))
        : undefined,
    pullRequestId: __expectString(output.pullRequestId),
    pullRequestStatus: __expectString(output.pullRequestStatus),
    pullRequestTargets:
      output.pullRequestTargets !== undefined && output.pullRequestTargets !== null
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
      output.approvalRuleEventMetadata !== undefined && output.approvalRuleEventMetadata !== null
        ? deserializeAws_json1_1ApprovalRuleEventMetadata(output.approvalRuleEventMetadata, context)
        : undefined,
    approvalRuleOverriddenEventMetadata:
      output.approvalRuleOverriddenEventMetadata !== undefined && output.approvalRuleOverriddenEventMetadata !== null
        ? deserializeAws_json1_1ApprovalRuleOverriddenEventMetadata(output.approvalRuleOverriddenEventMetadata, context)
        : undefined,
    approvalStateChangedEventMetadata:
      output.approvalStateChangedEventMetadata !== undefined && output.approvalStateChangedEventMetadata !== null
        ? deserializeAws_json1_1ApprovalStateChangedEventMetadata(output.approvalStateChangedEventMetadata, context)
        : undefined,
    eventDate:
      output.eventDate !== undefined && output.eventDate !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.eventDate)))
        : undefined,
    pullRequestCreatedEventMetadata:
      output.pullRequestCreatedEventMetadata !== undefined && output.pullRequestCreatedEventMetadata !== null
        ? deserializeAws_json1_1PullRequestCreatedEventMetadata(output.pullRequestCreatedEventMetadata, context)
        : undefined,
    pullRequestEventType: __expectString(output.pullRequestEventType),
    pullRequestId: __expectString(output.pullRequestId),
    pullRequestMergedStateChangedEventMetadata:
      output.pullRequestMergedStateChangedEventMetadata !== undefined &&
      output.pullRequestMergedStateChangedEventMetadata !== null
        ? deserializeAws_json1_1PullRequestMergedStateChangedEventMetadata(
            output.pullRequestMergedStateChangedEventMetadata,
            context
          )
        : undefined,
    pullRequestSourceReferenceUpdatedEventMetadata:
      output.pullRequestSourceReferenceUpdatedEventMetadata !== undefined &&
      output.pullRequestSourceReferenceUpdatedEventMetadata !== null
        ? deserializeAws_json1_1PullRequestSourceReferenceUpdatedEventMetadata(
            output.pullRequestSourceReferenceUpdatedEventMetadata,
            context
          )
        : undefined,
    pullRequestStatusChangedEventMetadata:
      output.pullRequestStatusChangedEventMetadata !== undefined &&
      output.pullRequestStatusChangedEventMetadata !== null
        ? deserializeAws_json1_1PullRequestStatusChangedEventMetadata(
            output.pullRequestStatusChangedEventMetadata,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_json1_1PullRequestEventList = (output: any, context: __SerdeContext): PullRequestEvent[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PullRequestEvent(entry, context);
    });
};

const deserializeAws_json1_1PullRequestIdList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
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
      output.mergeMetadata !== undefined && output.mergeMetadata !== null
        ? deserializeAws_json1_1MergeMetadata(output.mergeMetadata, context)
        : undefined,
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
      output.mergeMetadata !== undefined && output.mergeMetadata !== null
        ? deserializeAws_json1_1MergeMetadata(output.mergeMetadata, context)
        : undefined,
    repositoryName: __expectString(output.repositoryName),
    sourceCommit: __expectString(output.sourceCommit),
    sourceReference: __expectString(output.sourceReference),
  } as any;
};

const deserializeAws_json1_1PullRequestTargetList = (output: any, context: __SerdeContext): PullRequestTarget[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PullRequestTarget(entry, context);
    });
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

const deserializeAws_json1_1ReactionCountsMap = (output: any, context: __SerdeContext): { [key: string]: number } => {
  return Object.entries(output).reduce((acc: { [key: string]: number }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectInt32(value) as any,
    };
  }, {});
};

const deserializeAws_json1_1ReactionForComment = (output: any, context: __SerdeContext): ReactionForComment => {
  return {
    reaction:
      output.reaction !== undefined && output.reaction !== null
        ? deserializeAws_json1_1ReactionValueFormats(output.reaction, context)
        : undefined,
    reactionUsers:
      output.reactionUsers !== undefined && output.reactionUsers !== null
        ? deserializeAws_json1_1ReactionUsersList(output.reactionUsers, context)
        : undefined,
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ReactionForComment(entry, context);
    });
};

const deserializeAws_json1_1ReactionUsersList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
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
      output.creationDate !== undefined && output.creationDate !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDate)))
        : undefined,
    defaultBranch: __expectString(output.defaultBranch),
    lastModifiedDate:
      output.lastModifiedDate !== undefined && output.lastModifiedDate !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastModifiedDate)))
        : undefined,
    repositoryDescription: __expectString(output.repositoryDescription),
    repositoryId: __expectString(output.repositoryId),
    repositoryName: __expectString(output.repositoryName),
  } as any;
};

const deserializeAws_json1_1RepositoryMetadataList = (output: any, context: __SerdeContext): RepositoryMetadata[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RepositoryMetadata(entry, context);
    });
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RepositoryNameIdPair(entry, context);
    });
};

const deserializeAws_json1_1RepositoryNameList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1RepositoryTrigger = (output: any, context: __SerdeContext): RepositoryTrigger => {
  return {
    branches:
      output.branches !== undefined && output.branches !== null
        ? deserializeAws_json1_1BranchNameList(output.branches, context)
        : undefined,
    customData: __expectString(output.customData),
    destinationArn: __expectString(output.destinationArn),
    events:
      output.events !== undefined && output.events !== null
        ? deserializeAws_json1_1RepositoryTriggerEventList(output.events, context)
        : undefined,
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RepositoryTriggerExecutionFailure(entry, context);
    });
};

const deserializeAws_json1_1RepositoryTriggerNameList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RepositoryTrigger(entry, context);
    });
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SubModule(entry, context);
    });
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SymbolicLink(entry, context);
    });
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

const deserializeAws_json1_1TagsMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
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
      output.failedExecutions !== undefined && output.failedExecutions !== null
        ? deserializeAws_json1_1RepositoryTriggerExecutionFailureList(output.failedExecutions, context)
        : undefined,
    successfulExecutions:
      output.successfulExecutions !== undefined && output.successfulExecutions !== null
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
      output.approvalRuleTemplate !== undefined && output.approvalRuleTemplate !== null
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
      output.approvalRuleTemplate !== undefined && output.approvalRuleTemplate !== null
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
      output.approvalRuleTemplate !== undefined && output.approvalRuleTemplate !== null
        ? deserializeAws_json1_1ApprovalRuleTemplate(output.approvalRuleTemplate, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateCommentOutput = (output: any, context: __SerdeContext): UpdateCommentOutput => {
  return {
    comment:
      output.comment !== undefined && output.comment !== null
        ? deserializeAws_json1_1Comment(output.comment, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdatePullRequestApprovalRuleContentOutput = (
  output: any,
  context: __SerdeContext
): UpdatePullRequestApprovalRuleContentOutput => {
  return {
    approvalRule:
      output.approvalRule !== undefined && output.approvalRule !== null
        ? deserializeAws_json1_1ApprovalRule(output.approvalRule, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdatePullRequestDescriptionOutput = (
  output: any,
  context: __SerdeContext
): UpdatePullRequestDescriptionOutput => {
  return {
    pullRequest:
      output.pullRequest !== undefined && output.pullRequest !== null
        ? deserializeAws_json1_1PullRequest(output.pullRequest, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdatePullRequestStatusOutput = (
  output: any,
  context: __SerdeContext
): UpdatePullRequestStatusOutput => {
  return {
    pullRequest:
      output.pullRequest !== undefined && output.pullRequest !== null
        ? deserializeAws_json1_1PullRequest(output.pullRequest, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdatePullRequestTitleOutput = (
  output: any,
  context: __SerdeContext
): UpdatePullRequestTitleOutput => {
  return {
    pullRequest:
      output.pullRequest !== undefined && output.pullRequest !== null
        ? deserializeAws_json1_1PullRequest(output.pullRequest, context)
        : undefined,
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
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
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

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
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

  return "";
};
