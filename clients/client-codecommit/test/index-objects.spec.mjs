import {
  ActorDoesNotExistException,
  ApprovalRuleContentRequiredException,
  ApprovalRuleDoesNotExistException,
  ApprovalRuleNameAlreadyExistsException,
  ApprovalRuleNameRequiredException,
  ApprovalRuleTemplateContentRequiredException,
  ApprovalRuleTemplateDoesNotExistException,
  ApprovalRuleTemplateInUseException,
  ApprovalRuleTemplateNameAlreadyExistsException,
  ApprovalRuleTemplateNameRequiredException,
  ApprovalState,
  ApprovalStateRequiredException,
  AssociateApprovalRuleTemplateWithRepositoryCommand,
  AuthorDoesNotExistException,
  BatchAssociateApprovalRuleTemplateWithRepositoriesCommand,
  BatchDescribeMergeConflictsCommand,
  BatchDisassociateApprovalRuleTemplateFromRepositoriesCommand,
  BatchGetCommitsCommand,
  BatchGetRepositoriesCommand,
  BatchGetRepositoriesErrorCodeEnum,
  BeforeCommitIdAndAfterCommitIdAreSameException,
  BlobIdDoesNotExistException,
  BlobIdRequiredException,
  BranchDoesNotExistException,
  BranchNameExistsException,
  BranchNameIsTagNameException,
  BranchNameRequiredException,
  CannotDeleteApprovalRuleFromTemplateException,
  CannotModifyApprovalRuleFromTemplateException,
  ChangeTypeEnum,
  ClientRequestTokenRequiredException,
  CodeCommit,
  CodeCommitClient,
  CodeCommitServiceException,
  CommentContentRequiredException,
  CommentContentSizeLimitExceededException,
  CommentDeletedException,
  CommentDoesNotExistException,
  CommentIdRequiredException,
  CommentNotCreatedByCallerException,
  CommitDoesNotExistException,
  CommitIdDoesNotExistException,
  CommitIdRequiredException,
  CommitIdsLimitExceededException,
  CommitIdsListRequiredException,
  CommitMessageLengthExceededException,
  CommitRequiredException,
  ConcurrentReferenceUpdateException,
  ConflictDetailLevelTypeEnum,
  ConflictResolutionStrategyTypeEnum,
  CreateApprovalRuleTemplateCommand,
  CreateBranchCommand,
  CreateCommitCommand,
  CreatePullRequestApprovalRuleCommand,
  CreatePullRequestCommand,
  CreateRepositoryCommand,
  CreateUnreferencedMergeCommitCommand,
  DefaultBranchCannotBeDeletedException,
  DeleteApprovalRuleTemplateCommand,
  DeleteBranchCommand,
  DeleteCommentContentCommand,
  DeleteFileCommand,
  DeletePullRequestApprovalRuleCommand,
  DeleteRepositoryCommand,
  DescribeMergeConflictsCommand,
  DescribePullRequestEventsCommand,
  DirectoryNameConflictsWithFileNameException,
  DisassociateApprovalRuleTemplateFromRepositoryCommand,
  EncryptionIntegrityChecksFailedException,
  EncryptionKeyAccessDeniedException,
  EncryptionKeyDisabledException,
  EncryptionKeyInvalidIdException,
  EncryptionKeyInvalidUsageException,
  EncryptionKeyNotFoundException,
  EncryptionKeyRequiredException,
  EncryptionKeyUnavailableException,
  EvaluatePullRequestApprovalRulesCommand,
  FileContentAndSourceFileSpecifiedException,
  FileContentRequiredException,
  FileContentSizeLimitExceededException,
  FileDoesNotExistException,
  FileEntryRequiredException,
  FileModeRequiredException,
  FileModeTypeEnum,
  FileNameConflictsWithDirectoryNameException,
  FilePathConflictsWithSubmodulePathException,
  FileTooLargeException,
  FolderContentSizeLimitExceededException,
  FolderDoesNotExistException,
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
  GetPullRequestApprovalStatesCommand,
  GetPullRequestCommand,
  GetPullRequestOverrideStateCommand,
  GetRepositoryCommand,
  GetRepositoryTriggersCommand,
  IdempotencyParameterMismatchException,
  InvalidActorArnException,
  InvalidApprovalRuleContentException,
  InvalidApprovalRuleNameException,
  InvalidApprovalRuleTemplateContentException,
  InvalidApprovalRuleTemplateDescriptionException,
  InvalidApprovalRuleTemplateNameException,
  InvalidApprovalStateException,
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
  InvalidFileLocationException,
  InvalidFileModeException,
  InvalidFilePositionException,
  InvalidMaxConflictFilesException,
  InvalidMaxMergeHunksException,
  InvalidMaxResultsException,
  InvalidMergeOptionException,
  InvalidOrderException,
  InvalidOverrideStatusException,
  InvalidParentCommitIdException,
  InvalidPathException,
  InvalidPullRequestEventTypeException,
  InvalidPullRequestIdException,
  InvalidPullRequestStatusException,
  InvalidPullRequestStatusUpdateException,
  InvalidReactionUserArnException,
  InvalidReactionValueException,
  InvalidReferenceNameException,
  InvalidRelativeFileVersionEnumException,
  InvalidReplacementContentException,
  InvalidReplacementTypeException,
  InvalidRepositoryDescriptionException,
  InvalidRepositoryNameException,
  InvalidRepositoryTriggerBranchNameException,
  InvalidRepositoryTriggerCustomDataException,
  InvalidRepositoryTriggerDestinationArnException,
  InvalidRepositoryTriggerEventsException,
  InvalidRepositoryTriggerNameException,
  InvalidRepositoryTriggerRegionException,
  InvalidResourceArnException,
  InvalidRevisionIdException,
  InvalidRuleContentSha256Exception,
  InvalidSortByException,
  InvalidSourceCommitSpecifierException,
  InvalidSystemTagUsageException,
  InvalidTagKeysListException,
  InvalidTagsMapException,
  InvalidTargetBranchException,
  InvalidTargetException,
  InvalidTargetsException,
  InvalidTitleException,
  ListApprovalRuleTemplatesCommand,
  ListAssociatedApprovalRuleTemplatesForRepositoryCommand,
  ListBranchesCommand,
  ListFileCommitHistoryCommand,
  ListPullRequestsCommand,
  ListRepositoriesCommand,
  ListRepositoriesForApprovalRuleTemplateCommand,
  ListTagsForResourceCommand,
  ManualMergeRequiredException,
  MaximumBranchesExceededException,
  MaximumConflictResolutionEntriesExceededException,
  MaximumFileContentToLoadExceededException,
  MaximumFileEntriesExceededException,
  MaximumItemsToCompareExceededException,
  MaximumNumberOfApprovalsExceededException,
  MaximumOpenPullRequestsExceededException,
  MaximumRepositoryNamesExceededException,
  MaximumRepositoryTriggersExceededException,
  MaximumRuleTemplatesAssociatedWithRepositoryException,
  MergeBranchesByFastForwardCommand,
  MergeBranchesBySquashCommand,
  MergeBranchesByThreeWayCommand,
  MergeOptionRequiredException,
  MergeOptionTypeEnum,
  MergePullRequestByFastForwardCommand,
  MergePullRequestBySquashCommand,
  MergePullRequestByThreeWayCommand,
  MultipleConflictResolutionEntriesException,
  MultipleRepositoriesInPullRequestException,
  NameLengthExceededException,
  NoChangeException,
  NumberOfRuleTemplatesExceededException,
  NumberOfRulesExceededException,
  ObjectTypeEnum,
  OperationNotAllowedException,
  OrderEnum,
  OverrideAlreadySetException,
  OverridePullRequestApprovalRulesCommand,
  OverrideStatus,
  OverrideStatusRequiredException,
  ParentCommitDoesNotExistException,
  ParentCommitIdOutdatedException,
  ParentCommitIdRequiredException,
  PathDoesNotExistException,
  PathRequiredException,
  PostCommentForComparedCommitCommand,
  PostCommentForPullRequestCommand,
  PostCommentReplyCommand,
  PullRequestAlreadyClosedException,
  PullRequestApprovalRulesNotSatisfiedException,
  PullRequestCannotBeApprovedByAuthorException,
  PullRequestDoesNotExistException,
  PullRequestEventType,
  PullRequestIdRequiredException,
  PullRequestStatusEnum,
  PullRequestStatusRequiredException,
  PutCommentReactionCommand,
  PutFileCommand,
  PutFileEntryConflictException,
  PutRepositoryTriggersCommand,
  ReactionLimitExceededException,
  ReactionValueRequiredException,
  ReferenceDoesNotExistException,
  ReferenceNameRequiredException,
  ReferenceTypeNotSupportedException,
  RelativeFileVersionEnum,
  ReplacementContentRequiredException,
  ReplacementTypeEnum,
  ReplacementTypeRequiredException,
  RepositoryDoesNotExistException,
  RepositoryLimitExceededException,
  RepositoryNameExistsException,
  RepositoryNameRequiredException,
  RepositoryNamesRequiredException,
  RepositoryNotAssociatedWithPullRequestException,
  RepositoryTriggerBranchNameListRequiredException,
  RepositoryTriggerDestinationArnRequiredException,
  RepositoryTriggerEventEnum,
  RepositoryTriggerEventsListRequiredException,
  RepositoryTriggerNameRequiredException,
  RepositoryTriggersListRequiredException,
  ResourceArnRequiredException,
  RestrictedSourceFileException,
  RevisionIdRequiredException,
  RevisionNotCurrentException,
  SameFileContentException,
  SamePathRequestException,
  SortByEnum,
  SourceAndDestinationAreSameException,
  SourceFileOrContentRequiredException,
  TagKeysListRequiredException,
  TagPolicyException,
  TagResourceCommand,
  TagsMapRequiredException,
  TargetRequiredException,
  TargetsRequiredException,
  TestRepositoryTriggersCommand,
  TipOfSourceReferenceIsDifferentException,
  TipsDivergenceExceededException,
  TitleRequiredException,
  TooManyTagsException,
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
  UpdateRepositoryEncryptionKeyCommand,
  UpdateRepositoryNameCommand,
  paginateDescribeMergeConflicts,
  paginateDescribePullRequestEvents,
  paginateGetCommentReactions,
  paginateGetCommentsForComparedCommit,
  paginateGetCommentsForPullRequest,
  paginateGetDifferences,
  paginateGetMergeConflicts,
  paginateListApprovalRuleTemplates,
  paginateListAssociatedApprovalRuleTemplatesForRepository,
  paginateListBranches,
  paginateListFileCommitHistory,
  paginateListPullRequests,
  paginateListRepositories,
  paginateListRepositoriesForApprovalRuleTemplate,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof CodeCommitClient === "function");
assert(typeof CodeCommit === "function");
// commands
assert(typeof AssociateApprovalRuleTemplateWithRepositoryCommand === "function");
assert(typeof BatchAssociateApprovalRuleTemplateWithRepositoriesCommand === "function");
assert(typeof BatchDescribeMergeConflictsCommand === "function");
assert(typeof BatchDisassociateApprovalRuleTemplateFromRepositoriesCommand === "function");
assert(typeof BatchGetCommitsCommand === "function");
assert(typeof BatchGetRepositoriesCommand === "function");
assert(typeof CreateApprovalRuleTemplateCommand === "function");
assert(typeof CreateBranchCommand === "function");
assert(typeof CreateCommitCommand === "function");
assert(typeof CreatePullRequestCommand === "function");
assert(typeof CreatePullRequestApprovalRuleCommand === "function");
assert(typeof CreateRepositoryCommand === "function");
assert(typeof CreateUnreferencedMergeCommitCommand === "function");
assert(typeof DeleteApprovalRuleTemplateCommand === "function");
assert(typeof DeleteBranchCommand === "function");
assert(typeof DeleteCommentContentCommand === "function");
assert(typeof DeleteFileCommand === "function");
assert(typeof DeletePullRequestApprovalRuleCommand === "function");
assert(typeof DeleteRepositoryCommand === "function");
assert(typeof DescribeMergeConflictsCommand === "function");
assert(typeof DescribePullRequestEventsCommand === "function");
assert(typeof DisassociateApprovalRuleTemplateFromRepositoryCommand === "function");
assert(typeof EvaluatePullRequestApprovalRulesCommand === "function");
assert(typeof GetApprovalRuleTemplateCommand === "function");
assert(typeof GetBlobCommand === "function");
assert(typeof GetBranchCommand === "function");
assert(typeof GetCommentCommand === "function");
assert(typeof GetCommentReactionsCommand === "function");
assert(typeof GetCommentsForComparedCommitCommand === "function");
assert(typeof GetCommentsForPullRequestCommand === "function");
assert(typeof GetCommitCommand === "function");
assert(typeof GetDifferencesCommand === "function");
assert(typeof GetFileCommand === "function");
assert(typeof GetFolderCommand === "function");
assert(typeof GetMergeCommitCommand === "function");
assert(typeof GetMergeConflictsCommand === "function");
assert(typeof GetMergeOptionsCommand === "function");
assert(typeof GetPullRequestCommand === "function");
assert(typeof GetPullRequestApprovalStatesCommand === "function");
assert(typeof GetPullRequestOverrideStateCommand === "function");
assert(typeof GetRepositoryCommand === "function");
assert(typeof GetRepositoryTriggersCommand === "function");
assert(typeof ListApprovalRuleTemplatesCommand === "function");
assert(typeof ListAssociatedApprovalRuleTemplatesForRepositoryCommand === "function");
assert(typeof ListBranchesCommand === "function");
assert(typeof ListFileCommitHistoryCommand === "function");
assert(typeof ListPullRequestsCommand === "function");
assert(typeof ListRepositoriesCommand === "function");
assert(typeof ListRepositoriesForApprovalRuleTemplateCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof MergeBranchesByFastForwardCommand === "function");
assert(typeof MergeBranchesBySquashCommand === "function");
assert(typeof MergeBranchesByThreeWayCommand === "function");
assert(typeof MergePullRequestByFastForwardCommand === "function");
assert(typeof MergePullRequestBySquashCommand === "function");
assert(typeof MergePullRequestByThreeWayCommand === "function");
assert(typeof OverridePullRequestApprovalRulesCommand === "function");
assert(typeof PostCommentForComparedCommitCommand === "function");
assert(typeof PostCommentForPullRequestCommand === "function");
assert(typeof PostCommentReplyCommand === "function");
assert(typeof PutCommentReactionCommand === "function");
assert(typeof PutFileCommand === "function");
assert(typeof PutRepositoryTriggersCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof TestRepositoryTriggersCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateApprovalRuleTemplateContentCommand === "function");
assert(typeof UpdateApprovalRuleTemplateDescriptionCommand === "function");
assert(typeof UpdateApprovalRuleTemplateNameCommand === "function");
assert(typeof UpdateCommentCommand === "function");
assert(typeof UpdateDefaultBranchCommand === "function");
assert(typeof UpdatePullRequestApprovalRuleContentCommand === "function");
assert(typeof UpdatePullRequestApprovalStateCommand === "function");
assert(typeof UpdatePullRequestDescriptionCommand === "function");
assert(typeof UpdatePullRequestStatusCommand === "function");
assert(typeof UpdatePullRequestTitleCommand === "function");
assert(typeof UpdateRepositoryDescriptionCommand === "function");
assert(typeof UpdateRepositoryEncryptionKeyCommand === "function");
assert(typeof UpdateRepositoryNameCommand === "function");
// enums
assert(typeof ApprovalState === "object");
assert(typeof BatchGetRepositoriesErrorCodeEnum === "object");
assert(typeof ChangeTypeEnum === "object");
assert(typeof ConflictDetailLevelTypeEnum === "object");
assert(typeof ConflictResolutionStrategyTypeEnum === "object");
assert(typeof FileModeTypeEnum === "object");
assert(typeof MergeOptionTypeEnum === "object");
assert(typeof ObjectTypeEnum === "object");
assert(typeof OrderEnum === "object");
assert(typeof OverrideStatus === "object");
assert(typeof PullRequestEventType === "object");
assert(typeof PullRequestStatusEnum === "object");
assert(typeof RelativeFileVersionEnum === "object");
assert(typeof ReplacementTypeEnum === "object");
assert(typeof RepositoryTriggerEventEnum === "object");
assert(typeof SortByEnum === "object");
// errors
assert(ActorDoesNotExistException.prototype instanceof CodeCommitServiceException);
assert(ApprovalRuleContentRequiredException.prototype instanceof CodeCommitServiceException);
assert(ApprovalRuleDoesNotExistException.prototype instanceof CodeCommitServiceException);
assert(ApprovalRuleNameAlreadyExistsException.prototype instanceof CodeCommitServiceException);
assert(ApprovalRuleNameRequiredException.prototype instanceof CodeCommitServiceException);
assert(ApprovalRuleTemplateContentRequiredException.prototype instanceof CodeCommitServiceException);
assert(ApprovalRuleTemplateDoesNotExistException.prototype instanceof CodeCommitServiceException);
assert(ApprovalRuleTemplateInUseException.prototype instanceof CodeCommitServiceException);
assert(ApprovalRuleTemplateNameAlreadyExistsException.prototype instanceof CodeCommitServiceException);
assert(ApprovalRuleTemplateNameRequiredException.prototype instanceof CodeCommitServiceException);
assert(ApprovalStateRequiredException.prototype instanceof CodeCommitServiceException);
assert(AuthorDoesNotExistException.prototype instanceof CodeCommitServiceException);
assert(BeforeCommitIdAndAfterCommitIdAreSameException.prototype instanceof CodeCommitServiceException);
assert(BlobIdDoesNotExistException.prototype instanceof CodeCommitServiceException);
assert(BlobIdRequiredException.prototype instanceof CodeCommitServiceException);
assert(BranchDoesNotExistException.prototype instanceof CodeCommitServiceException);
assert(BranchNameExistsException.prototype instanceof CodeCommitServiceException);
assert(BranchNameIsTagNameException.prototype instanceof CodeCommitServiceException);
assert(BranchNameRequiredException.prototype instanceof CodeCommitServiceException);
assert(CannotDeleteApprovalRuleFromTemplateException.prototype instanceof CodeCommitServiceException);
assert(CannotModifyApprovalRuleFromTemplateException.prototype instanceof CodeCommitServiceException);
assert(ClientRequestTokenRequiredException.prototype instanceof CodeCommitServiceException);
assert(CommentContentRequiredException.prototype instanceof CodeCommitServiceException);
assert(CommentContentSizeLimitExceededException.prototype instanceof CodeCommitServiceException);
assert(CommentDeletedException.prototype instanceof CodeCommitServiceException);
assert(CommentDoesNotExistException.prototype instanceof CodeCommitServiceException);
assert(CommentIdRequiredException.prototype instanceof CodeCommitServiceException);
assert(CommentNotCreatedByCallerException.prototype instanceof CodeCommitServiceException);
assert(CommitDoesNotExistException.prototype instanceof CodeCommitServiceException);
assert(CommitIdDoesNotExistException.prototype instanceof CodeCommitServiceException);
assert(CommitIdRequiredException.prototype instanceof CodeCommitServiceException);
assert(CommitIdsLimitExceededException.prototype instanceof CodeCommitServiceException);
assert(CommitIdsListRequiredException.prototype instanceof CodeCommitServiceException);
assert(CommitMessageLengthExceededException.prototype instanceof CodeCommitServiceException);
assert(CommitRequiredException.prototype instanceof CodeCommitServiceException);
assert(ConcurrentReferenceUpdateException.prototype instanceof CodeCommitServiceException);
assert(DefaultBranchCannotBeDeletedException.prototype instanceof CodeCommitServiceException);
assert(DirectoryNameConflictsWithFileNameException.prototype instanceof CodeCommitServiceException);
assert(EncryptionIntegrityChecksFailedException.prototype instanceof CodeCommitServiceException);
assert(EncryptionKeyAccessDeniedException.prototype instanceof CodeCommitServiceException);
assert(EncryptionKeyDisabledException.prototype instanceof CodeCommitServiceException);
assert(EncryptionKeyInvalidIdException.prototype instanceof CodeCommitServiceException);
assert(EncryptionKeyInvalidUsageException.prototype instanceof CodeCommitServiceException);
assert(EncryptionKeyNotFoundException.prototype instanceof CodeCommitServiceException);
assert(EncryptionKeyRequiredException.prototype instanceof CodeCommitServiceException);
assert(EncryptionKeyUnavailableException.prototype instanceof CodeCommitServiceException);
assert(FileContentAndSourceFileSpecifiedException.prototype instanceof CodeCommitServiceException);
assert(FileContentRequiredException.prototype instanceof CodeCommitServiceException);
assert(FileContentSizeLimitExceededException.prototype instanceof CodeCommitServiceException);
assert(FileDoesNotExistException.prototype instanceof CodeCommitServiceException);
assert(FileEntryRequiredException.prototype instanceof CodeCommitServiceException);
assert(FileModeRequiredException.prototype instanceof CodeCommitServiceException);
assert(FileNameConflictsWithDirectoryNameException.prototype instanceof CodeCommitServiceException);
assert(FilePathConflictsWithSubmodulePathException.prototype instanceof CodeCommitServiceException);
assert(FileTooLargeException.prototype instanceof CodeCommitServiceException);
assert(FolderContentSizeLimitExceededException.prototype instanceof CodeCommitServiceException);
assert(FolderDoesNotExistException.prototype instanceof CodeCommitServiceException);
assert(IdempotencyParameterMismatchException.prototype instanceof CodeCommitServiceException);
assert(InvalidActorArnException.prototype instanceof CodeCommitServiceException);
assert(InvalidApprovalRuleContentException.prototype instanceof CodeCommitServiceException);
assert(InvalidApprovalRuleNameException.prototype instanceof CodeCommitServiceException);
assert(InvalidApprovalRuleTemplateContentException.prototype instanceof CodeCommitServiceException);
assert(InvalidApprovalRuleTemplateDescriptionException.prototype instanceof CodeCommitServiceException);
assert(InvalidApprovalRuleTemplateNameException.prototype instanceof CodeCommitServiceException);
assert(InvalidApprovalStateException.prototype instanceof CodeCommitServiceException);
assert(InvalidAuthorArnException.prototype instanceof CodeCommitServiceException);
assert(InvalidBlobIdException.prototype instanceof CodeCommitServiceException);
assert(InvalidBranchNameException.prototype instanceof CodeCommitServiceException);
assert(InvalidClientRequestTokenException.prototype instanceof CodeCommitServiceException);
assert(InvalidCommentIdException.prototype instanceof CodeCommitServiceException);
assert(InvalidCommitException.prototype instanceof CodeCommitServiceException);
assert(InvalidCommitIdException.prototype instanceof CodeCommitServiceException);
assert(InvalidConflictDetailLevelException.prototype instanceof CodeCommitServiceException);
assert(InvalidConflictResolutionException.prototype instanceof CodeCommitServiceException);
assert(InvalidConflictResolutionStrategyException.prototype instanceof CodeCommitServiceException);
assert(InvalidContinuationTokenException.prototype instanceof CodeCommitServiceException);
assert(InvalidDeletionParameterException.prototype instanceof CodeCommitServiceException);
assert(InvalidDescriptionException.prototype instanceof CodeCommitServiceException);
assert(InvalidDestinationCommitSpecifierException.prototype instanceof CodeCommitServiceException);
assert(InvalidEmailException.prototype instanceof CodeCommitServiceException);
assert(InvalidFileLocationException.prototype instanceof CodeCommitServiceException);
assert(InvalidFileModeException.prototype instanceof CodeCommitServiceException);
assert(InvalidFilePositionException.prototype instanceof CodeCommitServiceException);
assert(InvalidMaxConflictFilesException.prototype instanceof CodeCommitServiceException);
assert(InvalidMaxMergeHunksException.prototype instanceof CodeCommitServiceException);
assert(InvalidMaxResultsException.prototype instanceof CodeCommitServiceException);
assert(InvalidMergeOptionException.prototype instanceof CodeCommitServiceException);
assert(InvalidOrderException.prototype instanceof CodeCommitServiceException);
assert(InvalidOverrideStatusException.prototype instanceof CodeCommitServiceException);
assert(InvalidParentCommitIdException.prototype instanceof CodeCommitServiceException);
assert(InvalidPathException.prototype instanceof CodeCommitServiceException);
assert(InvalidPullRequestEventTypeException.prototype instanceof CodeCommitServiceException);
assert(InvalidPullRequestIdException.prototype instanceof CodeCommitServiceException);
assert(InvalidPullRequestStatusException.prototype instanceof CodeCommitServiceException);
assert(InvalidPullRequestStatusUpdateException.prototype instanceof CodeCommitServiceException);
assert(InvalidReactionUserArnException.prototype instanceof CodeCommitServiceException);
assert(InvalidReactionValueException.prototype instanceof CodeCommitServiceException);
assert(InvalidReferenceNameException.prototype instanceof CodeCommitServiceException);
assert(InvalidRelativeFileVersionEnumException.prototype instanceof CodeCommitServiceException);
assert(InvalidReplacementContentException.prototype instanceof CodeCommitServiceException);
assert(InvalidReplacementTypeException.prototype instanceof CodeCommitServiceException);
assert(InvalidRepositoryDescriptionException.prototype instanceof CodeCommitServiceException);
assert(InvalidRepositoryNameException.prototype instanceof CodeCommitServiceException);
assert(InvalidRepositoryTriggerBranchNameException.prototype instanceof CodeCommitServiceException);
assert(InvalidRepositoryTriggerCustomDataException.prototype instanceof CodeCommitServiceException);
assert(InvalidRepositoryTriggerDestinationArnException.prototype instanceof CodeCommitServiceException);
assert(InvalidRepositoryTriggerEventsException.prototype instanceof CodeCommitServiceException);
assert(InvalidRepositoryTriggerNameException.prototype instanceof CodeCommitServiceException);
assert(InvalidRepositoryTriggerRegionException.prototype instanceof CodeCommitServiceException);
assert(InvalidResourceArnException.prototype instanceof CodeCommitServiceException);
assert(InvalidRevisionIdException.prototype instanceof CodeCommitServiceException);
assert(InvalidRuleContentSha256Exception.prototype instanceof CodeCommitServiceException);
assert(InvalidSortByException.prototype instanceof CodeCommitServiceException);
assert(InvalidSourceCommitSpecifierException.prototype instanceof CodeCommitServiceException);
assert(InvalidSystemTagUsageException.prototype instanceof CodeCommitServiceException);
assert(InvalidTagKeysListException.prototype instanceof CodeCommitServiceException);
assert(InvalidTagsMapException.prototype instanceof CodeCommitServiceException);
assert(InvalidTargetBranchException.prototype instanceof CodeCommitServiceException);
assert(InvalidTargetException.prototype instanceof CodeCommitServiceException);
assert(InvalidTargetsException.prototype instanceof CodeCommitServiceException);
assert(InvalidTitleException.prototype instanceof CodeCommitServiceException);
assert(ManualMergeRequiredException.prototype instanceof CodeCommitServiceException);
assert(MaximumBranchesExceededException.prototype instanceof CodeCommitServiceException);
assert(MaximumConflictResolutionEntriesExceededException.prototype instanceof CodeCommitServiceException);
assert(MaximumFileContentToLoadExceededException.prototype instanceof CodeCommitServiceException);
assert(MaximumFileEntriesExceededException.prototype instanceof CodeCommitServiceException);
assert(MaximumItemsToCompareExceededException.prototype instanceof CodeCommitServiceException);
assert(MaximumNumberOfApprovalsExceededException.prototype instanceof CodeCommitServiceException);
assert(MaximumOpenPullRequestsExceededException.prototype instanceof CodeCommitServiceException);
assert(MaximumRepositoryNamesExceededException.prototype instanceof CodeCommitServiceException);
assert(MaximumRepositoryTriggersExceededException.prototype instanceof CodeCommitServiceException);
assert(MaximumRuleTemplatesAssociatedWithRepositoryException.prototype instanceof CodeCommitServiceException);
assert(MergeOptionRequiredException.prototype instanceof CodeCommitServiceException);
assert(MultipleConflictResolutionEntriesException.prototype instanceof CodeCommitServiceException);
assert(MultipleRepositoriesInPullRequestException.prototype instanceof CodeCommitServiceException);
assert(NameLengthExceededException.prototype instanceof CodeCommitServiceException);
assert(NoChangeException.prototype instanceof CodeCommitServiceException);
assert(NumberOfRulesExceededException.prototype instanceof CodeCommitServiceException);
assert(NumberOfRuleTemplatesExceededException.prototype instanceof CodeCommitServiceException);
assert(OperationNotAllowedException.prototype instanceof CodeCommitServiceException);
assert(OverrideAlreadySetException.prototype instanceof CodeCommitServiceException);
assert(OverrideStatusRequiredException.prototype instanceof CodeCommitServiceException);
assert(ParentCommitDoesNotExistException.prototype instanceof CodeCommitServiceException);
assert(ParentCommitIdOutdatedException.prototype instanceof CodeCommitServiceException);
assert(ParentCommitIdRequiredException.prototype instanceof CodeCommitServiceException);
assert(PathDoesNotExistException.prototype instanceof CodeCommitServiceException);
assert(PathRequiredException.prototype instanceof CodeCommitServiceException);
assert(PullRequestAlreadyClosedException.prototype instanceof CodeCommitServiceException);
assert(PullRequestApprovalRulesNotSatisfiedException.prototype instanceof CodeCommitServiceException);
assert(PullRequestCannotBeApprovedByAuthorException.prototype instanceof CodeCommitServiceException);
assert(PullRequestDoesNotExistException.prototype instanceof CodeCommitServiceException);
assert(PullRequestIdRequiredException.prototype instanceof CodeCommitServiceException);
assert(PullRequestStatusRequiredException.prototype instanceof CodeCommitServiceException);
assert(PutFileEntryConflictException.prototype instanceof CodeCommitServiceException);
assert(ReactionLimitExceededException.prototype instanceof CodeCommitServiceException);
assert(ReactionValueRequiredException.prototype instanceof CodeCommitServiceException);
assert(ReferenceDoesNotExistException.prototype instanceof CodeCommitServiceException);
assert(ReferenceNameRequiredException.prototype instanceof CodeCommitServiceException);
assert(ReferenceTypeNotSupportedException.prototype instanceof CodeCommitServiceException);
assert(ReplacementContentRequiredException.prototype instanceof CodeCommitServiceException);
assert(ReplacementTypeRequiredException.prototype instanceof CodeCommitServiceException);
assert(RepositoryDoesNotExistException.prototype instanceof CodeCommitServiceException);
assert(RepositoryLimitExceededException.prototype instanceof CodeCommitServiceException);
assert(RepositoryNameExistsException.prototype instanceof CodeCommitServiceException);
assert(RepositoryNameRequiredException.prototype instanceof CodeCommitServiceException);
assert(RepositoryNamesRequiredException.prototype instanceof CodeCommitServiceException);
assert(RepositoryNotAssociatedWithPullRequestException.prototype instanceof CodeCommitServiceException);
assert(RepositoryTriggerBranchNameListRequiredException.prototype instanceof CodeCommitServiceException);
assert(RepositoryTriggerDestinationArnRequiredException.prototype instanceof CodeCommitServiceException);
assert(RepositoryTriggerEventsListRequiredException.prototype instanceof CodeCommitServiceException);
assert(RepositoryTriggerNameRequiredException.prototype instanceof CodeCommitServiceException);
assert(RepositoryTriggersListRequiredException.prototype instanceof CodeCommitServiceException);
assert(ResourceArnRequiredException.prototype instanceof CodeCommitServiceException);
assert(RestrictedSourceFileException.prototype instanceof CodeCommitServiceException);
assert(RevisionIdRequiredException.prototype instanceof CodeCommitServiceException);
assert(RevisionNotCurrentException.prototype instanceof CodeCommitServiceException);
assert(SameFileContentException.prototype instanceof CodeCommitServiceException);
assert(SamePathRequestException.prototype instanceof CodeCommitServiceException);
assert(SourceAndDestinationAreSameException.prototype instanceof CodeCommitServiceException);
assert(SourceFileOrContentRequiredException.prototype instanceof CodeCommitServiceException);
assert(TagKeysListRequiredException.prototype instanceof CodeCommitServiceException);
assert(TagPolicyException.prototype instanceof CodeCommitServiceException);
assert(TagsMapRequiredException.prototype instanceof CodeCommitServiceException);
assert(TargetRequiredException.prototype instanceof CodeCommitServiceException);
assert(TargetsRequiredException.prototype instanceof CodeCommitServiceException);
assert(TipOfSourceReferenceIsDifferentException.prototype instanceof CodeCommitServiceException);
assert(TipsDivergenceExceededException.prototype instanceof CodeCommitServiceException);
assert(TitleRequiredException.prototype instanceof CodeCommitServiceException);
assert(TooManyTagsException.prototype instanceof CodeCommitServiceException);
assert(CodeCommitServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateDescribeMergeConflicts === "function");
assert(typeof paginateDescribePullRequestEvents === "function");
assert(typeof paginateGetCommentReactions === "function");
assert(typeof paginateGetCommentsForComparedCommit === "function");
assert(typeof paginateGetCommentsForPullRequest === "function");
assert(typeof paginateGetDifferences === "function");
assert(typeof paginateGetMergeConflicts === "function");
assert(typeof paginateListApprovalRuleTemplates === "function");
assert(typeof paginateListAssociatedApprovalRuleTemplatesForRepository === "function");
assert(typeof paginateListBranches === "function");
assert(typeof paginateListFileCommitHistory === "function");
assert(typeof paginateListPullRequests === "function");
assert(typeof paginateListRepositories === "function");
assert(typeof paginateListRepositoriesForApprovalRuleTemplate === "function");
console.log(`CodeCommit index test passed.`);
