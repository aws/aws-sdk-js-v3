import {
  ActorDoesNotExistException,
  ActorDoesNotExistException$,
  Approval$,
  ApprovalRule$,
  ApprovalRuleContentRequiredException,
  ApprovalRuleContentRequiredException$,
  ApprovalRuleDoesNotExistException,
  ApprovalRuleDoesNotExistException$,
  ApprovalRuleEventMetadata$,
  ApprovalRuleNameAlreadyExistsException,
  ApprovalRuleNameAlreadyExistsException$,
  ApprovalRuleNameRequiredException,
  ApprovalRuleNameRequiredException$,
  ApprovalRuleOverriddenEventMetadata$,
  ApprovalRuleTemplate$,
  ApprovalRuleTemplateContentRequiredException,
  ApprovalRuleTemplateContentRequiredException$,
  ApprovalRuleTemplateDoesNotExistException,
  ApprovalRuleTemplateDoesNotExistException$,
  ApprovalRuleTemplateInUseException,
  ApprovalRuleTemplateInUseException$,
  ApprovalRuleTemplateNameAlreadyExistsException,
  ApprovalRuleTemplateNameAlreadyExistsException$,
  ApprovalRuleTemplateNameRequiredException,
  ApprovalRuleTemplateNameRequiredException$,
  ApprovalState,
  ApprovalStateChangedEventMetadata$,
  ApprovalStateRequiredException,
  ApprovalStateRequiredException$,
  AssociateApprovalRuleTemplateWithRepository$,
  AssociateApprovalRuleTemplateWithRepositoryCommand,
  AssociateApprovalRuleTemplateWithRepositoryInput$,
  AuthorDoesNotExistException,
  AuthorDoesNotExistException$,
  BatchAssociateApprovalRuleTemplateWithRepositories$,
  BatchAssociateApprovalRuleTemplateWithRepositoriesCommand,
  BatchAssociateApprovalRuleTemplateWithRepositoriesError$,
  BatchAssociateApprovalRuleTemplateWithRepositoriesInput$,
  BatchAssociateApprovalRuleTemplateWithRepositoriesOutput$,
  BatchDescribeMergeConflicts$,
  BatchDescribeMergeConflictsCommand,
  BatchDescribeMergeConflictsError$,
  BatchDescribeMergeConflictsInput$,
  BatchDescribeMergeConflictsOutput$,
  BatchDisassociateApprovalRuleTemplateFromRepositories$,
  BatchDisassociateApprovalRuleTemplateFromRepositoriesCommand,
  BatchDisassociateApprovalRuleTemplateFromRepositoriesError$,
  BatchDisassociateApprovalRuleTemplateFromRepositoriesInput$,
  BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput$,
  BatchGetCommits$,
  BatchGetCommitsCommand,
  BatchGetCommitsError$,
  BatchGetCommitsInput$,
  BatchGetCommitsOutput$,
  BatchGetRepositories$,
  BatchGetRepositoriesCommand,
  BatchGetRepositoriesError$,
  BatchGetRepositoriesErrorCodeEnum,
  BatchGetRepositoriesInput$,
  BatchGetRepositoriesOutput$,
  BeforeCommitIdAndAfterCommitIdAreSameException,
  BeforeCommitIdAndAfterCommitIdAreSameException$,
  BlobIdDoesNotExistException,
  BlobIdDoesNotExistException$,
  BlobIdRequiredException,
  BlobIdRequiredException$,
  BlobMetadata$,
  BranchDoesNotExistException,
  BranchDoesNotExistException$,
  BranchInfo$,
  BranchNameExistsException,
  BranchNameExistsException$,
  BranchNameIsTagNameException,
  BranchNameIsTagNameException$,
  BranchNameRequiredException,
  BranchNameRequiredException$,
  CannotDeleteApprovalRuleFromTemplateException,
  CannotDeleteApprovalRuleFromTemplateException$,
  CannotModifyApprovalRuleFromTemplateException,
  CannotModifyApprovalRuleFromTemplateException$,
  ChangeTypeEnum,
  ClientRequestTokenRequiredException,
  ClientRequestTokenRequiredException$,
  CodeCommit,
  CodeCommitClient,
  CodeCommitServiceException,
  Comment$,
  CommentContentRequiredException,
  CommentContentRequiredException$,
  CommentContentSizeLimitExceededException,
  CommentContentSizeLimitExceededException$,
  CommentDeletedException,
  CommentDeletedException$,
  CommentDoesNotExistException,
  CommentDoesNotExistException$,
  CommentIdRequiredException,
  CommentIdRequiredException$,
  CommentNotCreatedByCallerException,
  CommentNotCreatedByCallerException$,
  CommentsForComparedCommit$,
  CommentsForPullRequest$,
  Commit$,
  CommitDoesNotExistException,
  CommitDoesNotExistException$,
  CommitIdDoesNotExistException,
  CommitIdDoesNotExistException$,
  CommitIdRequiredException,
  CommitIdRequiredException$,
  CommitIdsLimitExceededException,
  CommitIdsLimitExceededException$,
  CommitIdsListRequiredException,
  CommitIdsListRequiredException$,
  CommitMessageLengthExceededException,
  CommitMessageLengthExceededException$,
  CommitRequiredException,
  CommitRequiredException$,
  ConcurrentReferenceUpdateException,
  ConcurrentReferenceUpdateException$,
  Conflict$,
  ConflictDetailLevelTypeEnum,
  ConflictMetadata$,
  ConflictResolution$,
  ConflictResolutionStrategyTypeEnum,
  CreateApprovalRuleTemplate$,
  CreateApprovalRuleTemplateCommand,
  CreateApprovalRuleTemplateInput$,
  CreateApprovalRuleTemplateOutput$,
  CreateBranch$,
  CreateBranchCommand,
  CreateBranchInput$,
  CreateCommit$,
  CreateCommitCommand,
  CreateCommitInput$,
  CreateCommitOutput$,
  CreatePullRequest$,
  CreatePullRequestApprovalRule$,
  CreatePullRequestApprovalRuleCommand,
  CreatePullRequestApprovalRuleInput$,
  CreatePullRequestApprovalRuleOutput$,
  CreatePullRequestCommand,
  CreatePullRequestInput$,
  CreatePullRequestOutput$,
  CreateRepository$,
  CreateRepositoryCommand,
  CreateRepositoryInput$,
  CreateRepositoryOutput$,
  CreateUnreferencedMergeCommit$,
  CreateUnreferencedMergeCommitCommand,
  CreateUnreferencedMergeCommitInput$,
  CreateUnreferencedMergeCommitOutput$,
  DefaultBranchCannotBeDeletedException,
  DefaultBranchCannotBeDeletedException$,
  DeleteApprovalRuleTemplate$,
  DeleteApprovalRuleTemplateCommand,
  DeleteApprovalRuleTemplateInput$,
  DeleteApprovalRuleTemplateOutput$,
  DeleteBranch$,
  DeleteBranchCommand,
  DeleteBranchInput$,
  DeleteBranchOutput$,
  DeleteCommentContent$,
  DeleteCommentContentCommand,
  DeleteCommentContentInput$,
  DeleteCommentContentOutput$,
  DeleteFile$,
  DeleteFileCommand,
  DeleteFileEntry$,
  DeleteFileInput$,
  DeleteFileOutput$,
  DeletePullRequestApprovalRule$,
  DeletePullRequestApprovalRuleCommand,
  DeletePullRequestApprovalRuleInput$,
  DeletePullRequestApprovalRuleOutput$,
  DeleteRepository$,
  DeleteRepositoryCommand,
  DeleteRepositoryInput$,
  DeleteRepositoryOutput$,
  DescribeMergeConflicts$,
  DescribeMergeConflictsCommand,
  DescribeMergeConflictsInput$,
  DescribeMergeConflictsOutput$,
  DescribePullRequestEvents$,
  DescribePullRequestEventsCommand,
  DescribePullRequestEventsInput$,
  DescribePullRequestEventsOutput$,
  Difference$,
  DirectoryNameConflictsWithFileNameException,
  DirectoryNameConflictsWithFileNameException$,
  DisassociateApprovalRuleTemplateFromRepository$,
  DisassociateApprovalRuleTemplateFromRepositoryCommand,
  DisassociateApprovalRuleTemplateFromRepositoryInput$,
  EncryptionIntegrityChecksFailedException,
  EncryptionIntegrityChecksFailedException$,
  EncryptionKeyAccessDeniedException,
  EncryptionKeyAccessDeniedException$,
  EncryptionKeyDisabledException,
  EncryptionKeyDisabledException$,
  EncryptionKeyInvalidIdException,
  EncryptionKeyInvalidIdException$,
  EncryptionKeyInvalidUsageException,
  EncryptionKeyInvalidUsageException$,
  EncryptionKeyNotFoundException,
  EncryptionKeyNotFoundException$,
  EncryptionKeyRequiredException,
  EncryptionKeyRequiredException$,
  EncryptionKeyUnavailableException,
  EncryptionKeyUnavailableException$,
  EvaluatePullRequestApprovalRules$,
  EvaluatePullRequestApprovalRulesCommand,
  EvaluatePullRequestApprovalRulesInput$,
  EvaluatePullRequestApprovalRulesOutput$,
  Evaluation$,
  File$,
  FileContentAndSourceFileSpecifiedException,
  FileContentAndSourceFileSpecifiedException$,
  FileContentRequiredException,
  FileContentRequiredException$,
  FileContentSizeLimitExceededException,
  FileContentSizeLimitExceededException$,
  FileDoesNotExistException,
  FileDoesNotExistException$,
  FileEntryRequiredException,
  FileEntryRequiredException$,
  FileMetadata$,
  FileModeRequiredException,
  FileModeRequiredException$,
  FileModeTypeEnum,
  FileModes$,
  FileNameConflictsWithDirectoryNameException,
  FileNameConflictsWithDirectoryNameException$,
  FilePathConflictsWithSubmodulePathException,
  FilePathConflictsWithSubmodulePathException$,
  FileSizes$,
  FileTooLargeException,
  FileTooLargeException$,
  FileVersion$,
  Folder$,
  FolderContentSizeLimitExceededException,
  FolderContentSizeLimitExceededException$,
  FolderDoesNotExistException,
  FolderDoesNotExistException$,
  GetApprovalRuleTemplate$,
  GetApprovalRuleTemplateCommand,
  GetApprovalRuleTemplateInput$,
  GetApprovalRuleTemplateOutput$,
  GetBlob$,
  GetBlobCommand,
  GetBlobInput$,
  GetBlobOutput$,
  GetBranch$,
  GetBranchCommand,
  GetBranchInput$,
  GetBranchOutput$,
  GetComment$,
  GetCommentCommand,
  GetCommentInput$,
  GetCommentOutput$,
  GetCommentReactions$,
  GetCommentReactionsCommand,
  GetCommentReactionsInput$,
  GetCommentReactionsOutput$,
  GetCommentsForComparedCommit$,
  GetCommentsForComparedCommitCommand,
  GetCommentsForComparedCommitInput$,
  GetCommentsForComparedCommitOutput$,
  GetCommentsForPullRequest$,
  GetCommentsForPullRequestCommand,
  GetCommentsForPullRequestInput$,
  GetCommentsForPullRequestOutput$,
  GetCommit$,
  GetCommitCommand,
  GetCommitInput$,
  GetCommitOutput$,
  GetDifferences$,
  GetDifferencesCommand,
  GetDifferencesInput$,
  GetDifferencesOutput$,
  GetFile$,
  GetFileCommand,
  GetFileInput$,
  GetFileOutput$,
  GetFolder$,
  GetFolderCommand,
  GetFolderInput$,
  GetFolderOutput$,
  GetMergeCommit$,
  GetMergeCommitCommand,
  GetMergeCommitInput$,
  GetMergeCommitOutput$,
  GetMergeConflicts$,
  GetMergeConflictsCommand,
  GetMergeConflictsInput$,
  GetMergeConflictsOutput$,
  GetMergeOptions$,
  GetMergeOptionsCommand,
  GetMergeOptionsInput$,
  GetMergeOptionsOutput$,
  GetPullRequest$,
  GetPullRequestApprovalStates$,
  GetPullRequestApprovalStatesCommand,
  GetPullRequestApprovalStatesInput$,
  GetPullRequestApprovalStatesOutput$,
  GetPullRequestCommand,
  GetPullRequestInput$,
  GetPullRequestOutput$,
  GetPullRequestOverrideState$,
  GetPullRequestOverrideStateCommand,
  GetPullRequestOverrideStateInput$,
  GetPullRequestOverrideStateOutput$,
  GetRepository$,
  GetRepositoryCommand,
  GetRepositoryInput$,
  GetRepositoryOutput$,
  GetRepositoryTriggers$,
  GetRepositoryTriggersCommand,
  GetRepositoryTriggersInput$,
  GetRepositoryTriggersOutput$,
  IdempotencyParameterMismatchException,
  IdempotencyParameterMismatchException$,
  InvalidActorArnException,
  InvalidActorArnException$,
  InvalidApprovalRuleContentException,
  InvalidApprovalRuleContentException$,
  InvalidApprovalRuleNameException,
  InvalidApprovalRuleNameException$,
  InvalidApprovalRuleTemplateContentException,
  InvalidApprovalRuleTemplateContentException$,
  InvalidApprovalRuleTemplateDescriptionException,
  InvalidApprovalRuleTemplateDescriptionException$,
  InvalidApprovalRuleTemplateNameException,
  InvalidApprovalRuleTemplateNameException$,
  InvalidApprovalStateException,
  InvalidApprovalStateException$,
  InvalidAuthorArnException,
  InvalidAuthorArnException$,
  InvalidBlobIdException,
  InvalidBlobIdException$,
  InvalidBranchNameException,
  InvalidBranchNameException$,
  InvalidClientRequestTokenException,
  InvalidClientRequestTokenException$,
  InvalidCommentIdException,
  InvalidCommentIdException$,
  InvalidCommitException,
  InvalidCommitException$,
  InvalidCommitIdException,
  InvalidCommitIdException$,
  InvalidConflictDetailLevelException,
  InvalidConflictDetailLevelException$,
  InvalidConflictResolutionException,
  InvalidConflictResolutionException$,
  InvalidConflictResolutionStrategyException,
  InvalidConflictResolutionStrategyException$,
  InvalidContinuationTokenException,
  InvalidContinuationTokenException$,
  InvalidDeletionParameterException,
  InvalidDeletionParameterException$,
  InvalidDescriptionException,
  InvalidDescriptionException$,
  InvalidDestinationCommitSpecifierException,
  InvalidDestinationCommitSpecifierException$,
  InvalidEmailException,
  InvalidEmailException$,
  InvalidFileLocationException,
  InvalidFileLocationException$,
  InvalidFileModeException,
  InvalidFileModeException$,
  InvalidFilePositionException,
  InvalidFilePositionException$,
  InvalidMaxConflictFilesException,
  InvalidMaxConflictFilesException$,
  InvalidMaxMergeHunksException,
  InvalidMaxMergeHunksException$,
  InvalidMaxResultsException,
  InvalidMaxResultsException$,
  InvalidMergeOptionException,
  InvalidMergeOptionException$,
  InvalidOrderException,
  InvalidOrderException$,
  InvalidOverrideStatusException,
  InvalidOverrideStatusException$,
  InvalidParentCommitIdException,
  InvalidParentCommitIdException$,
  InvalidPathException,
  InvalidPathException$,
  InvalidPullRequestEventTypeException,
  InvalidPullRequestEventTypeException$,
  InvalidPullRequestIdException,
  InvalidPullRequestIdException$,
  InvalidPullRequestStatusException,
  InvalidPullRequestStatusException$,
  InvalidPullRequestStatusUpdateException,
  InvalidPullRequestStatusUpdateException$,
  InvalidReactionUserArnException,
  InvalidReactionUserArnException$,
  InvalidReactionValueException,
  InvalidReactionValueException$,
  InvalidReferenceNameException,
  InvalidReferenceNameException$,
  InvalidRelativeFileVersionEnumException,
  InvalidRelativeFileVersionEnumException$,
  InvalidReplacementContentException,
  InvalidReplacementContentException$,
  InvalidReplacementTypeException,
  InvalidReplacementTypeException$,
  InvalidRepositoryDescriptionException,
  InvalidRepositoryDescriptionException$,
  InvalidRepositoryNameException,
  InvalidRepositoryNameException$,
  InvalidRepositoryTriggerBranchNameException,
  InvalidRepositoryTriggerBranchNameException$,
  InvalidRepositoryTriggerCustomDataException,
  InvalidRepositoryTriggerCustomDataException$,
  InvalidRepositoryTriggerDestinationArnException,
  InvalidRepositoryTriggerDestinationArnException$,
  InvalidRepositoryTriggerEventsException,
  InvalidRepositoryTriggerEventsException$,
  InvalidRepositoryTriggerNameException,
  InvalidRepositoryTriggerNameException$,
  InvalidRepositoryTriggerRegionException,
  InvalidRepositoryTriggerRegionException$,
  InvalidResourceArnException,
  InvalidResourceArnException$,
  InvalidRevisionIdException,
  InvalidRevisionIdException$,
  InvalidRuleContentSha256Exception,
  InvalidRuleContentSha256Exception$,
  InvalidSortByException,
  InvalidSortByException$,
  InvalidSourceCommitSpecifierException,
  InvalidSourceCommitSpecifierException$,
  InvalidSystemTagUsageException,
  InvalidSystemTagUsageException$,
  InvalidTagKeysListException,
  InvalidTagKeysListException$,
  InvalidTagsMapException,
  InvalidTagsMapException$,
  InvalidTargetBranchException,
  InvalidTargetBranchException$,
  InvalidTargetException,
  InvalidTargetException$,
  InvalidTargetsException,
  InvalidTargetsException$,
  InvalidTitleException,
  InvalidTitleException$,
  IsBinaryFile$,
  ListApprovalRuleTemplates$,
  ListApprovalRuleTemplatesCommand,
  ListApprovalRuleTemplatesInput$,
  ListApprovalRuleTemplatesOutput$,
  ListAssociatedApprovalRuleTemplatesForRepository$,
  ListAssociatedApprovalRuleTemplatesForRepositoryCommand,
  ListAssociatedApprovalRuleTemplatesForRepositoryInput$,
  ListAssociatedApprovalRuleTemplatesForRepositoryOutput$,
  ListBranches$,
  ListBranchesCommand,
  ListBranchesInput$,
  ListBranchesOutput$,
  ListFileCommitHistory$,
  ListFileCommitHistoryCommand,
  ListFileCommitHistoryRequest$,
  ListFileCommitHistoryResponse$,
  ListPullRequests$,
  ListPullRequestsCommand,
  ListPullRequestsInput$,
  ListPullRequestsOutput$,
  ListRepositories$,
  ListRepositoriesCommand,
  ListRepositoriesForApprovalRuleTemplate$,
  ListRepositoriesForApprovalRuleTemplateCommand,
  ListRepositoriesForApprovalRuleTemplateInput$,
  ListRepositoriesForApprovalRuleTemplateOutput$,
  ListRepositoriesInput$,
  ListRepositoriesOutput$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceInput$,
  ListTagsForResourceOutput$,
  Location$,
  ManualMergeRequiredException,
  ManualMergeRequiredException$,
  MaximumBranchesExceededException,
  MaximumBranchesExceededException$,
  MaximumConflictResolutionEntriesExceededException,
  MaximumConflictResolutionEntriesExceededException$,
  MaximumFileContentToLoadExceededException,
  MaximumFileContentToLoadExceededException$,
  MaximumFileEntriesExceededException,
  MaximumFileEntriesExceededException$,
  MaximumItemsToCompareExceededException,
  MaximumItemsToCompareExceededException$,
  MaximumNumberOfApprovalsExceededException,
  MaximumNumberOfApprovalsExceededException$,
  MaximumOpenPullRequestsExceededException,
  MaximumOpenPullRequestsExceededException$,
  MaximumRepositoryNamesExceededException,
  MaximumRepositoryNamesExceededException$,
  MaximumRepositoryTriggersExceededException,
  MaximumRepositoryTriggersExceededException$,
  MaximumRuleTemplatesAssociatedWithRepositoryException,
  MaximumRuleTemplatesAssociatedWithRepositoryException$,
  MergeBranchesByFastForward$,
  MergeBranchesByFastForwardCommand,
  MergeBranchesByFastForwardInput$,
  MergeBranchesByFastForwardOutput$,
  MergeBranchesBySquash$,
  MergeBranchesBySquashCommand,
  MergeBranchesBySquashInput$,
  MergeBranchesBySquashOutput$,
  MergeBranchesByThreeWay$,
  MergeBranchesByThreeWayCommand,
  MergeBranchesByThreeWayInput$,
  MergeBranchesByThreeWayOutput$,
  MergeHunk$,
  MergeHunkDetail$,
  MergeMetadata$,
  MergeOperations$,
  MergeOptionRequiredException,
  MergeOptionRequiredException$,
  MergeOptionTypeEnum,
  MergePullRequestByFastForward$,
  MergePullRequestByFastForwardCommand,
  MergePullRequestByFastForwardInput$,
  MergePullRequestByFastForwardOutput$,
  MergePullRequestBySquash$,
  MergePullRequestBySquashCommand,
  MergePullRequestBySquashInput$,
  MergePullRequestBySquashOutput$,
  MergePullRequestByThreeWay$,
  MergePullRequestByThreeWayCommand,
  MergePullRequestByThreeWayInput$,
  MergePullRequestByThreeWayOutput$,
  MultipleConflictResolutionEntriesException,
  MultipleConflictResolutionEntriesException$,
  MultipleRepositoriesInPullRequestException,
  MultipleRepositoriesInPullRequestException$,
  NameLengthExceededException,
  NameLengthExceededException$,
  NoChangeException,
  NoChangeException$,
  NumberOfRuleTemplatesExceededException,
  NumberOfRuleTemplatesExceededException$,
  NumberOfRulesExceededException,
  NumberOfRulesExceededException$,
  ObjectTypeEnum,
  ObjectTypes$,
  OperationNotAllowedException,
  OperationNotAllowedException$,
  OrderEnum,
  OriginApprovalRuleTemplate$,
  OverrideAlreadySetException,
  OverrideAlreadySetException$,
  OverridePullRequestApprovalRules$,
  OverridePullRequestApprovalRulesCommand,
  OverridePullRequestApprovalRulesInput$,
  OverrideStatus,
  OverrideStatusRequiredException,
  OverrideStatusRequiredException$,
  ParentCommitDoesNotExistException,
  ParentCommitDoesNotExistException$,
  ParentCommitIdOutdatedException,
  ParentCommitIdOutdatedException$,
  ParentCommitIdRequiredException,
  ParentCommitIdRequiredException$,
  PathDoesNotExistException,
  PathDoesNotExistException$,
  PathRequiredException,
  PathRequiredException$,
  PostCommentForComparedCommit$,
  PostCommentForComparedCommitCommand,
  PostCommentForComparedCommitInput$,
  PostCommentForComparedCommitOutput$,
  PostCommentForPullRequest$,
  PostCommentForPullRequestCommand,
  PostCommentForPullRequestInput$,
  PostCommentForPullRequestOutput$,
  PostCommentReply$,
  PostCommentReplyCommand,
  PostCommentReplyInput$,
  PostCommentReplyOutput$,
  PullRequest$,
  PullRequestAlreadyClosedException,
  PullRequestAlreadyClosedException$,
  PullRequestApprovalRulesNotSatisfiedException,
  PullRequestApprovalRulesNotSatisfiedException$,
  PullRequestCannotBeApprovedByAuthorException,
  PullRequestCannotBeApprovedByAuthorException$,
  PullRequestCreatedEventMetadata$,
  PullRequestDoesNotExistException,
  PullRequestDoesNotExistException$,
  PullRequestEvent$,
  PullRequestEventType,
  PullRequestIdRequiredException,
  PullRequestIdRequiredException$,
  PullRequestMergedStateChangedEventMetadata$,
  PullRequestSourceReferenceUpdatedEventMetadata$,
  PullRequestStatusChangedEventMetadata$,
  PullRequestStatusEnum,
  PullRequestStatusRequiredException,
  PullRequestStatusRequiredException$,
  PullRequestTarget$,
  PutCommentReaction$,
  PutCommentReactionCommand,
  PutCommentReactionInput$,
  PutFile$,
  PutFileCommand,
  PutFileEntry$,
  PutFileEntryConflictException,
  PutFileEntryConflictException$,
  PutFileInput$,
  PutFileOutput$,
  PutRepositoryTriggers$,
  PutRepositoryTriggersCommand,
  PutRepositoryTriggersInput$,
  PutRepositoryTriggersOutput$,
  ReactionForComment$,
  ReactionLimitExceededException,
  ReactionLimitExceededException$,
  ReactionValueFormats$,
  ReactionValueRequiredException,
  ReactionValueRequiredException$,
  ReferenceDoesNotExistException,
  ReferenceDoesNotExistException$,
  ReferenceNameRequiredException,
  ReferenceNameRequiredException$,
  ReferenceTypeNotSupportedException,
  ReferenceTypeNotSupportedException$,
  RelativeFileVersionEnum,
  ReplaceContentEntry$,
  ReplacementContentRequiredException,
  ReplacementContentRequiredException$,
  ReplacementTypeEnum,
  ReplacementTypeRequiredException,
  ReplacementTypeRequiredException$,
  RepositoryDoesNotExistException,
  RepositoryDoesNotExistException$,
  RepositoryLimitExceededException,
  RepositoryLimitExceededException$,
  RepositoryMetadata$,
  RepositoryNameExistsException,
  RepositoryNameExistsException$,
  RepositoryNameIdPair$,
  RepositoryNameRequiredException,
  RepositoryNameRequiredException$,
  RepositoryNamesRequiredException,
  RepositoryNamesRequiredException$,
  RepositoryNotAssociatedWithPullRequestException,
  RepositoryNotAssociatedWithPullRequestException$,
  RepositoryTrigger$,
  RepositoryTriggerBranchNameListRequiredException,
  RepositoryTriggerBranchNameListRequiredException$,
  RepositoryTriggerDestinationArnRequiredException,
  RepositoryTriggerDestinationArnRequiredException$,
  RepositoryTriggerEventEnum,
  RepositoryTriggerEventsListRequiredException,
  RepositoryTriggerEventsListRequiredException$,
  RepositoryTriggerExecutionFailure$,
  RepositoryTriggerNameRequiredException,
  RepositoryTriggerNameRequiredException$,
  RepositoryTriggersListRequiredException,
  RepositoryTriggersListRequiredException$,
  ResourceArnRequiredException,
  ResourceArnRequiredException$,
  RestrictedSourceFileException,
  RestrictedSourceFileException$,
  RevisionIdRequiredException,
  RevisionIdRequiredException$,
  RevisionNotCurrentException,
  RevisionNotCurrentException$,
  SameFileContentException,
  SameFileContentException$,
  SamePathRequestException,
  SamePathRequestException$,
  SetFileModeEntry$,
  SortByEnum,
  SourceAndDestinationAreSameException,
  SourceAndDestinationAreSameException$,
  SourceFileOrContentRequiredException,
  SourceFileOrContentRequiredException$,
  SourceFileSpecifier$,
  SubModule$,
  SymbolicLink$,
  TagKeysListRequiredException,
  TagKeysListRequiredException$,
  TagPolicyException,
  TagPolicyException$,
  TagResource$,
  TagResourceCommand,
  TagResourceInput$,
  TagsMapRequiredException,
  TagsMapRequiredException$,
  Target$,
  TargetRequiredException,
  TargetRequiredException$,
  TargetsRequiredException,
  TargetsRequiredException$,
  TestRepositoryTriggers$,
  TestRepositoryTriggersCommand,
  TestRepositoryTriggersInput$,
  TestRepositoryTriggersOutput$,
  TipOfSourceReferenceIsDifferentException,
  TipOfSourceReferenceIsDifferentException$,
  TipsDivergenceExceededException,
  TipsDivergenceExceededException$,
  TitleRequiredException,
  TitleRequiredException$,
  TooManyTagsException,
  TooManyTagsException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceInput$,
  UpdateApprovalRuleTemplateContent$,
  UpdateApprovalRuleTemplateContentCommand,
  UpdateApprovalRuleTemplateContentInput$,
  UpdateApprovalRuleTemplateContentOutput$,
  UpdateApprovalRuleTemplateDescription$,
  UpdateApprovalRuleTemplateDescriptionCommand,
  UpdateApprovalRuleTemplateDescriptionInput$,
  UpdateApprovalRuleTemplateDescriptionOutput$,
  UpdateApprovalRuleTemplateName$,
  UpdateApprovalRuleTemplateNameCommand,
  UpdateApprovalRuleTemplateNameInput$,
  UpdateApprovalRuleTemplateNameOutput$,
  UpdateComment$,
  UpdateCommentCommand,
  UpdateCommentInput$,
  UpdateCommentOutput$,
  UpdateDefaultBranch$,
  UpdateDefaultBranchCommand,
  UpdateDefaultBranchInput$,
  UpdatePullRequestApprovalRuleContent$,
  UpdatePullRequestApprovalRuleContentCommand,
  UpdatePullRequestApprovalRuleContentInput$,
  UpdatePullRequestApprovalRuleContentOutput$,
  UpdatePullRequestApprovalState$,
  UpdatePullRequestApprovalStateCommand,
  UpdatePullRequestApprovalStateInput$,
  UpdatePullRequestDescription$,
  UpdatePullRequestDescriptionCommand,
  UpdatePullRequestDescriptionInput$,
  UpdatePullRequestDescriptionOutput$,
  UpdatePullRequestStatus$,
  UpdatePullRequestStatusCommand,
  UpdatePullRequestStatusInput$,
  UpdatePullRequestStatusOutput$,
  UpdatePullRequestTitle$,
  UpdatePullRequestTitleCommand,
  UpdatePullRequestTitleInput$,
  UpdatePullRequestTitleOutput$,
  UpdateRepositoryDescription$,
  UpdateRepositoryDescriptionCommand,
  UpdateRepositoryDescriptionInput$,
  UpdateRepositoryEncryptionKey$,
  UpdateRepositoryEncryptionKeyCommand,
  UpdateRepositoryEncryptionKeyInput$,
  UpdateRepositoryEncryptionKeyOutput$,
  UpdateRepositoryName$,
  UpdateRepositoryNameCommand,
  UpdateRepositoryNameInput$,
  UserInfo$,
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
assert(typeof AssociateApprovalRuleTemplateWithRepository$ === "object");
assert(typeof BatchAssociateApprovalRuleTemplateWithRepositoriesCommand === "function");
assert(typeof BatchAssociateApprovalRuleTemplateWithRepositories$ === "object");
assert(typeof BatchDescribeMergeConflictsCommand === "function");
assert(typeof BatchDescribeMergeConflicts$ === "object");
assert(typeof BatchDisassociateApprovalRuleTemplateFromRepositoriesCommand === "function");
assert(typeof BatchDisassociateApprovalRuleTemplateFromRepositories$ === "object");
assert(typeof BatchGetCommitsCommand === "function");
assert(typeof BatchGetCommits$ === "object");
assert(typeof BatchGetRepositoriesCommand === "function");
assert(typeof BatchGetRepositories$ === "object");
assert(typeof CreateApprovalRuleTemplateCommand === "function");
assert(typeof CreateApprovalRuleTemplate$ === "object");
assert(typeof CreateBranchCommand === "function");
assert(typeof CreateBranch$ === "object");
assert(typeof CreateCommitCommand === "function");
assert(typeof CreateCommit$ === "object");
assert(typeof CreatePullRequestCommand === "function");
assert(typeof CreatePullRequest$ === "object");
assert(typeof CreatePullRequestApprovalRuleCommand === "function");
assert(typeof CreatePullRequestApprovalRule$ === "object");
assert(typeof CreateRepositoryCommand === "function");
assert(typeof CreateRepository$ === "object");
assert(typeof CreateUnreferencedMergeCommitCommand === "function");
assert(typeof CreateUnreferencedMergeCommit$ === "object");
assert(typeof DeleteApprovalRuleTemplateCommand === "function");
assert(typeof DeleteApprovalRuleTemplate$ === "object");
assert(typeof DeleteBranchCommand === "function");
assert(typeof DeleteBranch$ === "object");
assert(typeof DeleteCommentContentCommand === "function");
assert(typeof DeleteCommentContent$ === "object");
assert(typeof DeleteFileCommand === "function");
assert(typeof DeleteFile$ === "object");
assert(typeof DeletePullRequestApprovalRuleCommand === "function");
assert(typeof DeletePullRequestApprovalRule$ === "object");
assert(typeof DeleteRepositoryCommand === "function");
assert(typeof DeleteRepository$ === "object");
assert(typeof DescribeMergeConflictsCommand === "function");
assert(typeof DescribeMergeConflicts$ === "object");
assert(typeof DescribePullRequestEventsCommand === "function");
assert(typeof DescribePullRequestEvents$ === "object");
assert(typeof DisassociateApprovalRuleTemplateFromRepositoryCommand === "function");
assert(typeof DisassociateApprovalRuleTemplateFromRepository$ === "object");
assert(typeof EvaluatePullRequestApprovalRulesCommand === "function");
assert(typeof EvaluatePullRequestApprovalRules$ === "object");
assert(typeof GetApprovalRuleTemplateCommand === "function");
assert(typeof GetApprovalRuleTemplate$ === "object");
assert(typeof GetBlobCommand === "function");
assert(typeof GetBlob$ === "object");
assert(typeof GetBranchCommand === "function");
assert(typeof GetBranch$ === "object");
assert(typeof GetCommentCommand === "function");
assert(typeof GetComment$ === "object");
assert(typeof GetCommentReactionsCommand === "function");
assert(typeof GetCommentReactions$ === "object");
assert(typeof GetCommentsForComparedCommitCommand === "function");
assert(typeof GetCommentsForComparedCommit$ === "object");
assert(typeof GetCommentsForPullRequestCommand === "function");
assert(typeof GetCommentsForPullRequest$ === "object");
assert(typeof GetCommitCommand === "function");
assert(typeof GetCommit$ === "object");
assert(typeof GetDifferencesCommand === "function");
assert(typeof GetDifferences$ === "object");
assert(typeof GetFileCommand === "function");
assert(typeof GetFile$ === "object");
assert(typeof GetFolderCommand === "function");
assert(typeof GetFolder$ === "object");
assert(typeof GetMergeCommitCommand === "function");
assert(typeof GetMergeCommit$ === "object");
assert(typeof GetMergeConflictsCommand === "function");
assert(typeof GetMergeConflicts$ === "object");
assert(typeof GetMergeOptionsCommand === "function");
assert(typeof GetMergeOptions$ === "object");
assert(typeof GetPullRequestCommand === "function");
assert(typeof GetPullRequest$ === "object");
assert(typeof GetPullRequestApprovalStatesCommand === "function");
assert(typeof GetPullRequestApprovalStates$ === "object");
assert(typeof GetPullRequestOverrideStateCommand === "function");
assert(typeof GetPullRequestOverrideState$ === "object");
assert(typeof GetRepositoryCommand === "function");
assert(typeof GetRepository$ === "object");
assert(typeof GetRepositoryTriggersCommand === "function");
assert(typeof GetRepositoryTriggers$ === "object");
assert(typeof ListApprovalRuleTemplatesCommand === "function");
assert(typeof ListApprovalRuleTemplates$ === "object");
assert(typeof ListAssociatedApprovalRuleTemplatesForRepositoryCommand === "function");
assert(typeof ListAssociatedApprovalRuleTemplatesForRepository$ === "object");
assert(typeof ListBranchesCommand === "function");
assert(typeof ListBranches$ === "object");
assert(typeof ListFileCommitHistoryCommand === "function");
assert(typeof ListFileCommitHistory$ === "object");
assert(typeof ListPullRequestsCommand === "function");
assert(typeof ListPullRequests$ === "object");
assert(typeof ListRepositoriesCommand === "function");
assert(typeof ListRepositories$ === "object");
assert(typeof ListRepositoriesForApprovalRuleTemplateCommand === "function");
assert(typeof ListRepositoriesForApprovalRuleTemplate$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof MergeBranchesByFastForwardCommand === "function");
assert(typeof MergeBranchesByFastForward$ === "object");
assert(typeof MergeBranchesBySquashCommand === "function");
assert(typeof MergeBranchesBySquash$ === "object");
assert(typeof MergeBranchesByThreeWayCommand === "function");
assert(typeof MergeBranchesByThreeWay$ === "object");
assert(typeof MergePullRequestByFastForwardCommand === "function");
assert(typeof MergePullRequestByFastForward$ === "object");
assert(typeof MergePullRequestBySquashCommand === "function");
assert(typeof MergePullRequestBySquash$ === "object");
assert(typeof MergePullRequestByThreeWayCommand === "function");
assert(typeof MergePullRequestByThreeWay$ === "object");
assert(typeof OverridePullRequestApprovalRulesCommand === "function");
assert(typeof OverridePullRequestApprovalRules$ === "object");
assert(typeof PostCommentForComparedCommitCommand === "function");
assert(typeof PostCommentForComparedCommit$ === "object");
assert(typeof PostCommentForPullRequestCommand === "function");
assert(typeof PostCommentForPullRequest$ === "object");
assert(typeof PostCommentReplyCommand === "function");
assert(typeof PostCommentReply$ === "object");
assert(typeof PutCommentReactionCommand === "function");
assert(typeof PutCommentReaction$ === "object");
assert(typeof PutFileCommand === "function");
assert(typeof PutFile$ === "object");
assert(typeof PutRepositoryTriggersCommand === "function");
assert(typeof PutRepositoryTriggers$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof TestRepositoryTriggersCommand === "function");
assert(typeof TestRepositoryTriggers$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateApprovalRuleTemplateContentCommand === "function");
assert(typeof UpdateApprovalRuleTemplateContent$ === "object");
assert(typeof UpdateApprovalRuleTemplateDescriptionCommand === "function");
assert(typeof UpdateApprovalRuleTemplateDescription$ === "object");
assert(typeof UpdateApprovalRuleTemplateNameCommand === "function");
assert(typeof UpdateApprovalRuleTemplateName$ === "object");
assert(typeof UpdateCommentCommand === "function");
assert(typeof UpdateComment$ === "object");
assert(typeof UpdateDefaultBranchCommand === "function");
assert(typeof UpdateDefaultBranch$ === "object");
assert(typeof UpdatePullRequestApprovalRuleContentCommand === "function");
assert(typeof UpdatePullRequestApprovalRuleContent$ === "object");
assert(typeof UpdatePullRequestApprovalStateCommand === "function");
assert(typeof UpdatePullRequestApprovalState$ === "object");
assert(typeof UpdatePullRequestDescriptionCommand === "function");
assert(typeof UpdatePullRequestDescription$ === "object");
assert(typeof UpdatePullRequestStatusCommand === "function");
assert(typeof UpdatePullRequestStatus$ === "object");
assert(typeof UpdatePullRequestTitleCommand === "function");
assert(typeof UpdatePullRequestTitle$ === "object");
assert(typeof UpdateRepositoryDescriptionCommand === "function");
assert(typeof UpdateRepositoryDescription$ === "object");
assert(typeof UpdateRepositoryEncryptionKeyCommand === "function");
assert(typeof UpdateRepositoryEncryptionKey$ === "object");
assert(typeof UpdateRepositoryNameCommand === "function");
assert(typeof UpdateRepositoryName$ === "object");
// structural schemas
assert(typeof Approval$ === "object");
assert(typeof ApprovalRule$ === "object");
assert(typeof ApprovalRuleEventMetadata$ === "object");
assert(typeof ApprovalRuleOverriddenEventMetadata$ === "object");
assert(typeof ApprovalRuleTemplate$ === "object");
assert(typeof ApprovalStateChangedEventMetadata$ === "object");
assert(typeof AssociateApprovalRuleTemplateWithRepositoryInput$ === "object");
assert(typeof BatchAssociateApprovalRuleTemplateWithRepositoriesError$ === "object");
assert(typeof BatchAssociateApprovalRuleTemplateWithRepositoriesInput$ === "object");
assert(typeof BatchAssociateApprovalRuleTemplateWithRepositoriesOutput$ === "object");
assert(typeof BatchDescribeMergeConflictsError$ === "object");
assert(typeof BatchDescribeMergeConflictsInput$ === "object");
assert(typeof BatchDescribeMergeConflictsOutput$ === "object");
assert(typeof BatchDisassociateApprovalRuleTemplateFromRepositoriesError$ === "object");
assert(typeof BatchDisassociateApprovalRuleTemplateFromRepositoriesInput$ === "object");
assert(typeof BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput$ === "object");
assert(typeof BatchGetCommitsError$ === "object");
assert(typeof BatchGetCommitsInput$ === "object");
assert(typeof BatchGetCommitsOutput$ === "object");
assert(typeof BatchGetRepositoriesError$ === "object");
assert(typeof BatchGetRepositoriesInput$ === "object");
assert(typeof BatchGetRepositoriesOutput$ === "object");
assert(typeof BlobMetadata$ === "object");
assert(typeof BranchInfo$ === "object");
assert(typeof Comment$ === "object");
assert(typeof CommentsForComparedCommit$ === "object");
assert(typeof CommentsForPullRequest$ === "object");
assert(typeof Commit$ === "object");
assert(typeof Conflict$ === "object");
assert(typeof ConflictMetadata$ === "object");
assert(typeof ConflictResolution$ === "object");
assert(typeof CreateApprovalRuleTemplateInput$ === "object");
assert(typeof CreateApprovalRuleTemplateOutput$ === "object");
assert(typeof CreateBranchInput$ === "object");
assert(typeof CreateCommitInput$ === "object");
assert(typeof CreateCommitOutput$ === "object");
assert(typeof CreatePullRequestApprovalRuleInput$ === "object");
assert(typeof CreatePullRequestApprovalRuleOutput$ === "object");
assert(typeof CreatePullRequestInput$ === "object");
assert(typeof CreatePullRequestOutput$ === "object");
assert(typeof CreateRepositoryInput$ === "object");
assert(typeof CreateRepositoryOutput$ === "object");
assert(typeof CreateUnreferencedMergeCommitInput$ === "object");
assert(typeof CreateUnreferencedMergeCommitOutput$ === "object");
assert(typeof DeleteApprovalRuleTemplateInput$ === "object");
assert(typeof DeleteApprovalRuleTemplateOutput$ === "object");
assert(typeof DeleteBranchInput$ === "object");
assert(typeof DeleteBranchOutput$ === "object");
assert(typeof DeleteCommentContentInput$ === "object");
assert(typeof DeleteCommentContentOutput$ === "object");
assert(typeof DeleteFileEntry$ === "object");
assert(typeof DeleteFileInput$ === "object");
assert(typeof DeleteFileOutput$ === "object");
assert(typeof DeletePullRequestApprovalRuleInput$ === "object");
assert(typeof DeletePullRequestApprovalRuleOutput$ === "object");
assert(typeof DeleteRepositoryInput$ === "object");
assert(typeof DeleteRepositoryOutput$ === "object");
assert(typeof DescribeMergeConflictsInput$ === "object");
assert(typeof DescribeMergeConflictsOutput$ === "object");
assert(typeof DescribePullRequestEventsInput$ === "object");
assert(typeof DescribePullRequestEventsOutput$ === "object");
assert(typeof Difference$ === "object");
assert(typeof DisassociateApprovalRuleTemplateFromRepositoryInput$ === "object");
assert(typeof EvaluatePullRequestApprovalRulesInput$ === "object");
assert(typeof EvaluatePullRequestApprovalRulesOutput$ === "object");
assert(typeof Evaluation$ === "object");
assert(typeof File$ === "object");
assert(typeof FileMetadata$ === "object");
assert(typeof FileModes$ === "object");
assert(typeof FileSizes$ === "object");
assert(typeof FileVersion$ === "object");
assert(typeof Folder$ === "object");
assert(typeof GetApprovalRuleTemplateInput$ === "object");
assert(typeof GetApprovalRuleTemplateOutput$ === "object");
assert(typeof GetBlobInput$ === "object");
assert(typeof GetBlobOutput$ === "object");
assert(typeof GetBranchInput$ === "object");
assert(typeof GetBranchOutput$ === "object");
assert(typeof GetCommentInput$ === "object");
assert(typeof GetCommentOutput$ === "object");
assert(typeof GetCommentReactionsInput$ === "object");
assert(typeof GetCommentReactionsOutput$ === "object");
assert(typeof GetCommentsForComparedCommitInput$ === "object");
assert(typeof GetCommentsForComparedCommitOutput$ === "object");
assert(typeof GetCommentsForPullRequestInput$ === "object");
assert(typeof GetCommentsForPullRequestOutput$ === "object");
assert(typeof GetCommitInput$ === "object");
assert(typeof GetCommitOutput$ === "object");
assert(typeof GetDifferencesInput$ === "object");
assert(typeof GetDifferencesOutput$ === "object");
assert(typeof GetFileInput$ === "object");
assert(typeof GetFileOutput$ === "object");
assert(typeof GetFolderInput$ === "object");
assert(typeof GetFolderOutput$ === "object");
assert(typeof GetMergeCommitInput$ === "object");
assert(typeof GetMergeCommitOutput$ === "object");
assert(typeof GetMergeConflictsInput$ === "object");
assert(typeof GetMergeConflictsOutput$ === "object");
assert(typeof GetMergeOptionsInput$ === "object");
assert(typeof GetMergeOptionsOutput$ === "object");
assert(typeof GetPullRequestApprovalStatesInput$ === "object");
assert(typeof GetPullRequestApprovalStatesOutput$ === "object");
assert(typeof GetPullRequestInput$ === "object");
assert(typeof GetPullRequestOutput$ === "object");
assert(typeof GetPullRequestOverrideStateInput$ === "object");
assert(typeof GetPullRequestOverrideStateOutput$ === "object");
assert(typeof GetRepositoryInput$ === "object");
assert(typeof GetRepositoryOutput$ === "object");
assert(typeof GetRepositoryTriggersInput$ === "object");
assert(typeof GetRepositoryTriggersOutput$ === "object");
assert(typeof IsBinaryFile$ === "object");
assert(typeof ListApprovalRuleTemplatesInput$ === "object");
assert(typeof ListApprovalRuleTemplatesOutput$ === "object");
assert(typeof ListAssociatedApprovalRuleTemplatesForRepositoryInput$ === "object");
assert(typeof ListAssociatedApprovalRuleTemplatesForRepositoryOutput$ === "object");
assert(typeof ListBranchesInput$ === "object");
assert(typeof ListBranchesOutput$ === "object");
assert(typeof ListFileCommitHistoryRequest$ === "object");
assert(typeof ListFileCommitHistoryResponse$ === "object");
assert(typeof ListPullRequestsInput$ === "object");
assert(typeof ListPullRequestsOutput$ === "object");
assert(typeof ListRepositoriesForApprovalRuleTemplateInput$ === "object");
assert(typeof ListRepositoriesForApprovalRuleTemplateOutput$ === "object");
assert(typeof ListRepositoriesInput$ === "object");
assert(typeof ListRepositoriesOutput$ === "object");
assert(typeof ListTagsForResourceInput$ === "object");
assert(typeof ListTagsForResourceOutput$ === "object");
assert(typeof Location$ === "object");
assert(typeof MergeBranchesByFastForwardInput$ === "object");
assert(typeof MergeBranchesByFastForwardOutput$ === "object");
assert(typeof MergeBranchesBySquashInput$ === "object");
assert(typeof MergeBranchesBySquashOutput$ === "object");
assert(typeof MergeBranchesByThreeWayInput$ === "object");
assert(typeof MergeBranchesByThreeWayOutput$ === "object");
assert(typeof MergeHunk$ === "object");
assert(typeof MergeHunkDetail$ === "object");
assert(typeof MergeMetadata$ === "object");
assert(typeof MergeOperations$ === "object");
assert(typeof MergePullRequestByFastForwardInput$ === "object");
assert(typeof MergePullRequestByFastForwardOutput$ === "object");
assert(typeof MergePullRequestBySquashInput$ === "object");
assert(typeof MergePullRequestBySquashOutput$ === "object");
assert(typeof MergePullRequestByThreeWayInput$ === "object");
assert(typeof MergePullRequestByThreeWayOutput$ === "object");
assert(typeof ObjectTypes$ === "object");
assert(typeof OriginApprovalRuleTemplate$ === "object");
assert(typeof OverridePullRequestApprovalRulesInput$ === "object");
assert(typeof PostCommentForComparedCommitInput$ === "object");
assert(typeof PostCommentForComparedCommitOutput$ === "object");
assert(typeof PostCommentForPullRequestInput$ === "object");
assert(typeof PostCommentForPullRequestOutput$ === "object");
assert(typeof PostCommentReplyInput$ === "object");
assert(typeof PostCommentReplyOutput$ === "object");
assert(typeof PullRequest$ === "object");
assert(typeof PullRequestCreatedEventMetadata$ === "object");
assert(typeof PullRequestEvent$ === "object");
assert(typeof PullRequestMergedStateChangedEventMetadata$ === "object");
assert(typeof PullRequestSourceReferenceUpdatedEventMetadata$ === "object");
assert(typeof PullRequestStatusChangedEventMetadata$ === "object");
assert(typeof PullRequestTarget$ === "object");
assert(typeof PutCommentReactionInput$ === "object");
assert(typeof PutFileEntry$ === "object");
assert(typeof PutFileInput$ === "object");
assert(typeof PutFileOutput$ === "object");
assert(typeof PutRepositoryTriggersInput$ === "object");
assert(typeof PutRepositoryTriggersOutput$ === "object");
assert(typeof ReactionForComment$ === "object");
assert(typeof ReactionValueFormats$ === "object");
assert(typeof ReplaceContentEntry$ === "object");
assert(typeof RepositoryMetadata$ === "object");
assert(typeof RepositoryNameIdPair$ === "object");
assert(typeof RepositoryTrigger$ === "object");
assert(typeof RepositoryTriggerExecutionFailure$ === "object");
assert(typeof SetFileModeEntry$ === "object");
assert(typeof SourceFileSpecifier$ === "object");
assert(typeof SubModule$ === "object");
assert(typeof SymbolicLink$ === "object");
assert(typeof TagResourceInput$ === "object");
assert(typeof Target$ === "object");
assert(typeof TestRepositoryTriggersInput$ === "object");
assert(typeof TestRepositoryTriggersOutput$ === "object");
assert(typeof UntagResourceInput$ === "object");
assert(typeof UpdateApprovalRuleTemplateContentInput$ === "object");
assert(typeof UpdateApprovalRuleTemplateContentOutput$ === "object");
assert(typeof UpdateApprovalRuleTemplateDescriptionInput$ === "object");
assert(typeof UpdateApprovalRuleTemplateDescriptionOutput$ === "object");
assert(typeof UpdateApprovalRuleTemplateNameInput$ === "object");
assert(typeof UpdateApprovalRuleTemplateNameOutput$ === "object");
assert(typeof UpdateCommentInput$ === "object");
assert(typeof UpdateCommentOutput$ === "object");
assert(typeof UpdateDefaultBranchInput$ === "object");
assert(typeof UpdatePullRequestApprovalRuleContentInput$ === "object");
assert(typeof UpdatePullRequestApprovalRuleContentOutput$ === "object");
assert(typeof UpdatePullRequestApprovalStateInput$ === "object");
assert(typeof UpdatePullRequestDescriptionInput$ === "object");
assert(typeof UpdatePullRequestDescriptionOutput$ === "object");
assert(typeof UpdatePullRequestStatusInput$ === "object");
assert(typeof UpdatePullRequestStatusOutput$ === "object");
assert(typeof UpdatePullRequestTitleInput$ === "object");
assert(typeof UpdatePullRequestTitleOutput$ === "object");
assert(typeof UpdateRepositoryDescriptionInput$ === "object");
assert(typeof UpdateRepositoryEncryptionKeyInput$ === "object");
assert(typeof UpdateRepositoryEncryptionKeyOutput$ === "object");
assert(typeof UpdateRepositoryNameInput$ === "object");
assert(typeof UserInfo$ === "object");
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
assert(typeof ActorDoesNotExistException$ === "object");
assert(ApprovalRuleContentRequiredException.prototype instanceof CodeCommitServiceException);
assert(typeof ApprovalRuleContentRequiredException$ === "object");
assert(ApprovalRuleDoesNotExistException.prototype instanceof CodeCommitServiceException);
assert(typeof ApprovalRuleDoesNotExistException$ === "object");
assert(ApprovalRuleNameAlreadyExistsException.prototype instanceof CodeCommitServiceException);
assert(typeof ApprovalRuleNameAlreadyExistsException$ === "object");
assert(ApprovalRuleNameRequiredException.prototype instanceof CodeCommitServiceException);
assert(typeof ApprovalRuleNameRequiredException$ === "object");
assert(ApprovalRuleTemplateContentRequiredException.prototype instanceof CodeCommitServiceException);
assert(typeof ApprovalRuleTemplateContentRequiredException$ === "object");
assert(ApprovalRuleTemplateDoesNotExistException.prototype instanceof CodeCommitServiceException);
assert(typeof ApprovalRuleTemplateDoesNotExistException$ === "object");
assert(ApprovalRuleTemplateInUseException.prototype instanceof CodeCommitServiceException);
assert(typeof ApprovalRuleTemplateInUseException$ === "object");
assert(ApprovalRuleTemplateNameAlreadyExistsException.prototype instanceof CodeCommitServiceException);
assert(typeof ApprovalRuleTemplateNameAlreadyExistsException$ === "object");
assert(ApprovalRuleTemplateNameRequiredException.prototype instanceof CodeCommitServiceException);
assert(typeof ApprovalRuleTemplateNameRequiredException$ === "object");
assert(ApprovalStateRequiredException.prototype instanceof CodeCommitServiceException);
assert(typeof ApprovalStateRequiredException$ === "object");
assert(AuthorDoesNotExistException.prototype instanceof CodeCommitServiceException);
assert(typeof AuthorDoesNotExistException$ === "object");
assert(BeforeCommitIdAndAfterCommitIdAreSameException.prototype instanceof CodeCommitServiceException);
assert(typeof BeforeCommitIdAndAfterCommitIdAreSameException$ === "object");
assert(BlobIdDoesNotExistException.prototype instanceof CodeCommitServiceException);
assert(typeof BlobIdDoesNotExistException$ === "object");
assert(BlobIdRequiredException.prototype instanceof CodeCommitServiceException);
assert(typeof BlobIdRequiredException$ === "object");
assert(BranchDoesNotExistException.prototype instanceof CodeCommitServiceException);
assert(typeof BranchDoesNotExistException$ === "object");
assert(BranchNameExistsException.prototype instanceof CodeCommitServiceException);
assert(typeof BranchNameExistsException$ === "object");
assert(BranchNameIsTagNameException.prototype instanceof CodeCommitServiceException);
assert(typeof BranchNameIsTagNameException$ === "object");
assert(BranchNameRequiredException.prototype instanceof CodeCommitServiceException);
assert(typeof BranchNameRequiredException$ === "object");
assert(CannotDeleteApprovalRuleFromTemplateException.prototype instanceof CodeCommitServiceException);
assert(typeof CannotDeleteApprovalRuleFromTemplateException$ === "object");
assert(CannotModifyApprovalRuleFromTemplateException.prototype instanceof CodeCommitServiceException);
assert(typeof CannotModifyApprovalRuleFromTemplateException$ === "object");
assert(ClientRequestTokenRequiredException.prototype instanceof CodeCommitServiceException);
assert(typeof ClientRequestTokenRequiredException$ === "object");
assert(CommentContentRequiredException.prototype instanceof CodeCommitServiceException);
assert(typeof CommentContentRequiredException$ === "object");
assert(CommentContentSizeLimitExceededException.prototype instanceof CodeCommitServiceException);
assert(typeof CommentContentSizeLimitExceededException$ === "object");
assert(CommentDeletedException.prototype instanceof CodeCommitServiceException);
assert(typeof CommentDeletedException$ === "object");
assert(CommentDoesNotExistException.prototype instanceof CodeCommitServiceException);
assert(typeof CommentDoesNotExistException$ === "object");
assert(CommentIdRequiredException.prototype instanceof CodeCommitServiceException);
assert(typeof CommentIdRequiredException$ === "object");
assert(CommentNotCreatedByCallerException.prototype instanceof CodeCommitServiceException);
assert(typeof CommentNotCreatedByCallerException$ === "object");
assert(CommitDoesNotExistException.prototype instanceof CodeCommitServiceException);
assert(typeof CommitDoesNotExistException$ === "object");
assert(CommitIdDoesNotExistException.prototype instanceof CodeCommitServiceException);
assert(typeof CommitIdDoesNotExistException$ === "object");
assert(CommitIdRequiredException.prototype instanceof CodeCommitServiceException);
assert(typeof CommitIdRequiredException$ === "object");
assert(CommitIdsLimitExceededException.prototype instanceof CodeCommitServiceException);
assert(typeof CommitIdsLimitExceededException$ === "object");
assert(CommitIdsListRequiredException.prototype instanceof CodeCommitServiceException);
assert(typeof CommitIdsListRequiredException$ === "object");
assert(CommitMessageLengthExceededException.prototype instanceof CodeCommitServiceException);
assert(typeof CommitMessageLengthExceededException$ === "object");
assert(CommitRequiredException.prototype instanceof CodeCommitServiceException);
assert(typeof CommitRequiredException$ === "object");
assert(ConcurrentReferenceUpdateException.prototype instanceof CodeCommitServiceException);
assert(typeof ConcurrentReferenceUpdateException$ === "object");
assert(DefaultBranchCannotBeDeletedException.prototype instanceof CodeCommitServiceException);
assert(typeof DefaultBranchCannotBeDeletedException$ === "object");
assert(DirectoryNameConflictsWithFileNameException.prototype instanceof CodeCommitServiceException);
assert(typeof DirectoryNameConflictsWithFileNameException$ === "object");
assert(EncryptionIntegrityChecksFailedException.prototype instanceof CodeCommitServiceException);
assert(typeof EncryptionIntegrityChecksFailedException$ === "object");
assert(EncryptionKeyAccessDeniedException.prototype instanceof CodeCommitServiceException);
assert(typeof EncryptionKeyAccessDeniedException$ === "object");
assert(EncryptionKeyDisabledException.prototype instanceof CodeCommitServiceException);
assert(typeof EncryptionKeyDisabledException$ === "object");
assert(EncryptionKeyInvalidIdException.prototype instanceof CodeCommitServiceException);
assert(typeof EncryptionKeyInvalidIdException$ === "object");
assert(EncryptionKeyInvalidUsageException.prototype instanceof CodeCommitServiceException);
assert(typeof EncryptionKeyInvalidUsageException$ === "object");
assert(EncryptionKeyNotFoundException.prototype instanceof CodeCommitServiceException);
assert(typeof EncryptionKeyNotFoundException$ === "object");
assert(EncryptionKeyRequiredException.prototype instanceof CodeCommitServiceException);
assert(typeof EncryptionKeyRequiredException$ === "object");
assert(EncryptionKeyUnavailableException.prototype instanceof CodeCommitServiceException);
assert(typeof EncryptionKeyUnavailableException$ === "object");
assert(FileContentAndSourceFileSpecifiedException.prototype instanceof CodeCommitServiceException);
assert(typeof FileContentAndSourceFileSpecifiedException$ === "object");
assert(FileContentRequiredException.prototype instanceof CodeCommitServiceException);
assert(typeof FileContentRequiredException$ === "object");
assert(FileContentSizeLimitExceededException.prototype instanceof CodeCommitServiceException);
assert(typeof FileContentSizeLimitExceededException$ === "object");
assert(FileDoesNotExistException.prototype instanceof CodeCommitServiceException);
assert(typeof FileDoesNotExistException$ === "object");
assert(FileEntryRequiredException.prototype instanceof CodeCommitServiceException);
assert(typeof FileEntryRequiredException$ === "object");
assert(FileModeRequiredException.prototype instanceof CodeCommitServiceException);
assert(typeof FileModeRequiredException$ === "object");
assert(FileNameConflictsWithDirectoryNameException.prototype instanceof CodeCommitServiceException);
assert(typeof FileNameConflictsWithDirectoryNameException$ === "object");
assert(FilePathConflictsWithSubmodulePathException.prototype instanceof CodeCommitServiceException);
assert(typeof FilePathConflictsWithSubmodulePathException$ === "object");
assert(FileTooLargeException.prototype instanceof CodeCommitServiceException);
assert(typeof FileTooLargeException$ === "object");
assert(FolderContentSizeLimitExceededException.prototype instanceof CodeCommitServiceException);
assert(typeof FolderContentSizeLimitExceededException$ === "object");
assert(FolderDoesNotExistException.prototype instanceof CodeCommitServiceException);
assert(typeof FolderDoesNotExistException$ === "object");
assert(IdempotencyParameterMismatchException.prototype instanceof CodeCommitServiceException);
assert(typeof IdempotencyParameterMismatchException$ === "object");
assert(InvalidActorArnException.prototype instanceof CodeCommitServiceException);
assert(typeof InvalidActorArnException$ === "object");
assert(InvalidApprovalRuleContentException.prototype instanceof CodeCommitServiceException);
assert(typeof InvalidApprovalRuleContentException$ === "object");
assert(InvalidApprovalRuleNameException.prototype instanceof CodeCommitServiceException);
assert(typeof InvalidApprovalRuleNameException$ === "object");
assert(InvalidApprovalRuleTemplateContentException.prototype instanceof CodeCommitServiceException);
assert(typeof InvalidApprovalRuleTemplateContentException$ === "object");
assert(InvalidApprovalRuleTemplateDescriptionException.prototype instanceof CodeCommitServiceException);
assert(typeof InvalidApprovalRuleTemplateDescriptionException$ === "object");
assert(InvalidApprovalRuleTemplateNameException.prototype instanceof CodeCommitServiceException);
assert(typeof InvalidApprovalRuleTemplateNameException$ === "object");
assert(InvalidApprovalStateException.prototype instanceof CodeCommitServiceException);
assert(typeof InvalidApprovalStateException$ === "object");
assert(InvalidAuthorArnException.prototype instanceof CodeCommitServiceException);
assert(typeof InvalidAuthorArnException$ === "object");
assert(InvalidBlobIdException.prototype instanceof CodeCommitServiceException);
assert(typeof InvalidBlobIdException$ === "object");
assert(InvalidBranchNameException.prototype instanceof CodeCommitServiceException);
assert(typeof InvalidBranchNameException$ === "object");
assert(InvalidClientRequestTokenException.prototype instanceof CodeCommitServiceException);
assert(typeof InvalidClientRequestTokenException$ === "object");
assert(InvalidCommentIdException.prototype instanceof CodeCommitServiceException);
assert(typeof InvalidCommentIdException$ === "object");
assert(InvalidCommitException.prototype instanceof CodeCommitServiceException);
assert(typeof InvalidCommitException$ === "object");
assert(InvalidCommitIdException.prototype instanceof CodeCommitServiceException);
assert(typeof InvalidCommitIdException$ === "object");
assert(InvalidConflictDetailLevelException.prototype instanceof CodeCommitServiceException);
assert(typeof InvalidConflictDetailLevelException$ === "object");
assert(InvalidConflictResolutionException.prototype instanceof CodeCommitServiceException);
assert(typeof InvalidConflictResolutionException$ === "object");
assert(InvalidConflictResolutionStrategyException.prototype instanceof CodeCommitServiceException);
assert(typeof InvalidConflictResolutionStrategyException$ === "object");
assert(InvalidContinuationTokenException.prototype instanceof CodeCommitServiceException);
assert(typeof InvalidContinuationTokenException$ === "object");
assert(InvalidDeletionParameterException.prototype instanceof CodeCommitServiceException);
assert(typeof InvalidDeletionParameterException$ === "object");
assert(InvalidDescriptionException.prototype instanceof CodeCommitServiceException);
assert(typeof InvalidDescriptionException$ === "object");
assert(InvalidDestinationCommitSpecifierException.prototype instanceof CodeCommitServiceException);
assert(typeof InvalidDestinationCommitSpecifierException$ === "object");
assert(InvalidEmailException.prototype instanceof CodeCommitServiceException);
assert(typeof InvalidEmailException$ === "object");
assert(InvalidFileLocationException.prototype instanceof CodeCommitServiceException);
assert(typeof InvalidFileLocationException$ === "object");
assert(InvalidFileModeException.prototype instanceof CodeCommitServiceException);
assert(typeof InvalidFileModeException$ === "object");
assert(InvalidFilePositionException.prototype instanceof CodeCommitServiceException);
assert(typeof InvalidFilePositionException$ === "object");
assert(InvalidMaxConflictFilesException.prototype instanceof CodeCommitServiceException);
assert(typeof InvalidMaxConflictFilesException$ === "object");
assert(InvalidMaxMergeHunksException.prototype instanceof CodeCommitServiceException);
assert(typeof InvalidMaxMergeHunksException$ === "object");
assert(InvalidMaxResultsException.prototype instanceof CodeCommitServiceException);
assert(typeof InvalidMaxResultsException$ === "object");
assert(InvalidMergeOptionException.prototype instanceof CodeCommitServiceException);
assert(typeof InvalidMergeOptionException$ === "object");
assert(InvalidOrderException.prototype instanceof CodeCommitServiceException);
assert(typeof InvalidOrderException$ === "object");
assert(InvalidOverrideStatusException.prototype instanceof CodeCommitServiceException);
assert(typeof InvalidOverrideStatusException$ === "object");
assert(InvalidParentCommitIdException.prototype instanceof CodeCommitServiceException);
assert(typeof InvalidParentCommitIdException$ === "object");
assert(InvalidPathException.prototype instanceof CodeCommitServiceException);
assert(typeof InvalidPathException$ === "object");
assert(InvalidPullRequestEventTypeException.prototype instanceof CodeCommitServiceException);
assert(typeof InvalidPullRequestEventTypeException$ === "object");
assert(InvalidPullRequestIdException.prototype instanceof CodeCommitServiceException);
assert(typeof InvalidPullRequestIdException$ === "object");
assert(InvalidPullRequestStatusException.prototype instanceof CodeCommitServiceException);
assert(typeof InvalidPullRequestStatusException$ === "object");
assert(InvalidPullRequestStatusUpdateException.prototype instanceof CodeCommitServiceException);
assert(typeof InvalidPullRequestStatusUpdateException$ === "object");
assert(InvalidReactionUserArnException.prototype instanceof CodeCommitServiceException);
assert(typeof InvalidReactionUserArnException$ === "object");
assert(InvalidReactionValueException.prototype instanceof CodeCommitServiceException);
assert(typeof InvalidReactionValueException$ === "object");
assert(InvalidReferenceNameException.prototype instanceof CodeCommitServiceException);
assert(typeof InvalidReferenceNameException$ === "object");
assert(InvalidRelativeFileVersionEnumException.prototype instanceof CodeCommitServiceException);
assert(typeof InvalidRelativeFileVersionEnumException$ === "object");
assert(InvalidReplacementContentException.prototype instanceof CodeCommitServiceException);
assert(typeof InvalidReplacementContentException$ === "object");
assert(InvalidReplacementTypeException.prototype instanceof CodeCommitServiceException);
assert(typeof InvalidReplacementTypeException$ === "object");
assert(InvalidRepositoryDescriptionException.prototype instanceof CodeCommitServiceException);
assert(typeof InvalidRepositoryDescriptionException$ === "object");
assert(InvalidRepositoryNameException.prototype instanceof CodeCommitServiceException);
assert(typeof InvalidRepositoryNameException$ === "object");
assert(InvalidRepositoryTriggerBranchNameException.prototype instanceof CodeCommitServiceException);
assert(typeof InvalidRepositoryTriggerBranchNameException$ === "object");
assert(InvalidRepositoryTriggerCustomDataException.prototype instanceof CodeCommitServiceException);
assert(typeof InvalidRepositoryTriggerCustomDataException$ === "object");
assert(InvalidRepositoryTriggerDestinationArnException.prototype instanceof CodeCommitServiceException);
assert(typeof InvalidRepositoryTriggerDestinationArnException$ === "object");
assert(InvalidRepositoryTriggerEventsException.prototype instanceof CodeCommitServiceException);
assert(typeof InvalidRepositoryTriggerEventsException$ === "object");
assert(InvalidRepositoryTriggerNameException.prototype instanceof CodeCommitServiceException);
assert(typeof InvalidRepositoryTriggerNameException$ === "object");
assert(InvalidRepositoryTriggerRegionException.prototype instanceof CodeCommitServiceException);
assert(typeof InvalidRepositoryTriggerRegionException$ === "object");
assert(InvalidResourceArnException.prototype instanceof CodeCommitServiceException);
assert(typeof InvalidResourceArnException$ === "object");
assert(InvalidRevisionIdException.prototype instanceof CodeCommitServiceException);
assert(typeof InvalidRevisionIdException$ === "object");
assert(InvalidRuleContentSha256Exception.prototype instanceof CodeCommitServiceException);
assert(typeof InvalidRuleContentSha256Exception$ === "object");
assert(InvalidSortByException.prototype instanceof CodeCommitServiceException);
assert(typeof InvalidSortByException$ === "object");
assert(InvalidSourceCommitSpecifierException.prototype instanceof CodeCommitServiceException);
assert(typeof InvalidSourceCommitSpecifierException$ === "object");
assert(InvalidSystemTagUsageException.prototype instanceof CodeCommitServiceException);
assert(typeof InvalidSystemTagUsageException$ === "object");
assert(InvalidTagKeysListException.prototype instanceof CodeCommitServiceException);
assert(typeof InvalidTagKeysListException$ === "object");
assert(InvalidTagsMapException.prototype instanceof CodeCommitServiceException);
assert(typeof InvalidTagsMapException$ === "object");
assert(InvalidTargetBranchException.prototype instanceof CodeCommitServiceException);
assert(typeof InvalidTargetBranchException$ === "object");
assert(InvalidTargetException.prototype instanceof CodeCommitServiceException);
assert(typeof InvalidTargetException$ === "object");
assert(InvalidTargetsException.prototype instanceof CodeCommitServiceException);
assert(typeof InvalidTargetsException$ === "object");
assert(InvalidTitleException.prototype instanceof CodeCommitServiceException);
assert(typeof InvalidTitleException$ === "object");
assert(ManualMergeRequiredException.prototype instanceof CodeCommitServiceException);
assert(typeof ManualMergeRequiredException$ === "object");
assert(MaximumBranchesExceededException.prototype instanceof CodeCommitServiceException);
assert(typeof MaximumBranchesExceededException$ === "object");
assert(MaximumConflictResolutionEntriesExceededException.prototype instanceof CodeCommitServiceException);
assert(typeof MaximumConflictResolutionEntriesExceededException$ === "object");
assert(MaximumFileContentToLoadExceededException.prototype instanceof CodeCommitServiceException);
assert(typeof MaximumFileContentToLoadExceededException$ === "object");
assert(MaximumFileEntriesExceededException.prototype instanceof CodeCommitServiceException);
assert(typeof MaximumFileEntriesExceededException$ === "object");
assert(MaximumItemsToCompareExceededException.prototype instanceof CodeCommitServiceException);
assert(typeof MaximumItemsToCompareExceededException$ === "object");
assert(MaximumNumberOfApprovalsExceededException.prototype instanceof CodeCommitServiceException);
assert(typeof MaximumNumberOfApprovalsExceededException$ === "object");
assert(MaximumOpenPullRequestsExceededException.prototype instanceof CodeCommitServiceException);
assert(typeof MaximumOpenPullRequestsExceededException$ === "object");
assert(MaximumRepositoryNamesExceededException.prototype instanceof CodeCommitServiceException);
assert(typeof MaximumRepositoryNamesExceededException$ === "object");
assert(MaximumRepositoryTriggersExceededException.prototype instanceof CodeCommitServiceException);
assert(typeof MaximumRepositoryTriggersExceededException$ === "object");
assert(MaximumRuleTemplatesAssociatedWithRepositoryException.prototype instanceof CodeCommitServiceException);
assert(typeof MaximumRuleTemplatesAssociatedWithRepositoryException$ === "object");
assert(MergeOptionRequiredException.prototype instanceof CodeCommitServiceException);
assert(typeof MergeOptionRequiredException$ === "object");
assert(MultipleConflictResolutionEntriesException.prototype instanceof CodeCommitServiceException);
assert(typeof MultipleConflictResolutionEntriesException$ === "object");
assert(MultipleRepositoriesInPullRequestException.prototype instanceof CodeCommitServiceException);
assert(typeof MultipleRepositoriesInPullRequestException$ === "object");
assert(NameLengthExceededException.prototype instanceof CodeCommitServiceException);
assert(typeof NameLengthExceededException$ === "object");
assert(NoChangeException.prototype instanceof CodeCommitServiceException);
assert(typeof NoChangeException$ === "object");
assert(NumberOfRulesExceededException.prototype instanceof CodeCommitServiceException);
assert(typeof NumberOfRulesExceededException$ === "object");
assert(NumberOfRuleTemplatesExceededException.prototype instanceof CodeCommitServiceException);
assert(typeof NumberOfRuleTemplatesExceededException$ === "object");
assert(OperationNotAllowedException.prototype instanceof CodeCommitServiceException);
assert(typeof OperationNotAllowedException$ === "object");
assert(OverrideAlreadySetException.prototype instanceof CodeCommitServiceException);
assert(typeof OverrideAlreadySetException$ === "object");
assert(OverrideStatusRequiredException.prototype instanceof CodeCommitServiceException);
assert(typeof OverrideStatusRequiredException$ === "object");
assert(ParentCommitDoesNotExistException.prototype instanceof CodeCommitServiceException);
assert(typeof ParentCommitDoesNotExistException$ === "object");
assert(ParentCommitIdOutdatedException.prototype instanceof CodeCommitServiceException);
assert(typeof ParentCommitIdOutdatedException$ === "object");
assert(ParentCommitIdRequiredException.prototype instanceof CodeCommitServiceException);
assert(typeof ParentCommitIdRequiredException$ === "object");
assert(PathDoesNotExistException.prototype instanceof CodeCommitServiceException);
assert(typeof PathDoesNotExistException$ === "object");
assert(PathRequiredException.prototype instanceof CodeCommitServiceException);
assert(typeof PathRequiredException$ === "object");
assert(PullRequestAlreadyClosedException.prototype instanceof CodeCommitServiceException);
assert(typeof PullRequestAlreadyClosedException$ === "object");
assert(PullRequestApprovalRulesNotSatisfiedException.prototype instanceof CodeCommitServiceException);
assert(typeof PullRequestApprovalRulesNotSatisfiedException$ === "object");
assert(PullRequestCannotBeApprovedByAuthorException.prototype instanceof CodeCommitServiceException);
assert(typeof PullRequestCannotBeApprovedByAuthorException$ === "object");
assert(PullRequestDoesNotExistException.prototype instanceof CodeCommitServiceException);
assert(typeof PullRequestDoesNotExistException$ === "object");
assert(PullRequestIdRequiredException.prototype instanceof CodeCommitServiceException);
assert(typeof PullRequestIdRequiredException$ === "object");
assert(PullRequestStatusRequiredException.prototype instanceof CodeCommitServiceException);
assert(typeof PullRequestStatusRequiredException$ === "object");
assert(PutFileEntryConflictException.prototype instanceof CodeCommitServiceException);
assert(typeof PutFileEntryConflictException$ === "object");
assert(ReactionLimitExceededException.prototype instanceof CodeCommitServiceException);
assert(typeof ReactionLimitExceededException$ === "object");
assert(ReactionValueRequiredException.prototype instanceof CodeCommitServiceException);
assert(typeof ReactionValueRequiredException$ === "object");
assert(ReferenceDoesNotExistException.prototype instanceof CodeCommitServiceException);
assert(typeof ReferenceDoesNotExistException$ === "object");
assert(ReferenceNameRequiredException.prototype instanceof CodeCommitServiceException);
assert(typeof ReferenceNameRequiredException$ === "object");
assert(ReferenceTypeNotSupportedException.prototype instanceof CodeCommitServiceException);
assert(typeof ReferenceTypeNotSupportedException$ === "object");
assert(ReplacementContentRequiredException.prototype instanceof CodeCommitServiceException);
assert(typeof ReplacementContentRequiredException$ === "object");
assert(ReplacementTypeRequiredException.prototype instanceof CodeCommitServiceException);
assert(typeof ReplacementTypeRequiredException$ === "object");
assert(RepositoryDoesNotExistException.prototype instanceof CodeCommitServiceException);
assert(typeof RepositoryDoesNotExistException$ === "object");
assert(RepositoryLimitExceededException.prototype instanceof CodeCommitServiceException);
assert(typeof RepositoryLimitExceededException$ === "object");
assert(RepositoryNameExistsException.prototype instanceof CodeCommitServiceException);
assert(typeof RepositoryNameExistsException$ === "object");
assert(RepositoryNameRequiredException.prototype instanceof CodeCommitServiceException);
assert(typeof RepositoryNameRequiredException$ === "object");
assert(RepositoryNamesRequiredException.prototype instanceof CodeCommitServiceException);
assert(typeof RepositoryNamesRequiredException$ === "object");
assert(RepositoryNotAssociatedWithPullRequestException.prototype instanceof CodeCommitServiceException);
assert(typeof RepositoryNotAssociatedWithPullRequestException$ === "object");
assert(RepositoryTriggerBranchNameListRequiredException.prototype instanceof CodeCommitServiceException);
assert(typeof RepositoryTriggerBranchNameListRequiredException$ === "object");
assert(RepositoryTriggerDestinationArnRequiredException.prototype instanceof CodeCommitServiceException);
assert(typeof RepositoryTriggerDestinationArnRequiredException$ === "object");
assert(RepositoryTriggerEventsListRequiredException.prototype instanceof CodeCommitServiceException);
assert(typeof RepositoryTriggerEventsListRequiredException$ === "object");
assert(RepositoryTriggerNameRequiredException.prototype instanceof CodeCommitServiceException);
assert(typeof RepositoryTriggerNameRequiredException$ === "object");
assert(RepositoryTriggersListRequiredException.prototype instanceof CodeCommitServiceException);
assert(typeof RepositoryTriggersListRequiredException$ === "object");
assert(ResourceArnRequiredException.prototype instanceof CodeCommitServiceException);
assert(typeof ResourceArnRequiredException$ === "object");
assert(RestrictedSourceFileException.prototype instanceof CodeCommitServiceException);
assert(typeof RestrictedSourceFileException$ === "object");
assert(RevisionIdRequiredException.prototype instanceof CodeCommitServiceException);
assert(typeof RevisionIdRequiredException$ === "object");
assert(RevisionNotCurrentException.prototype instanceof CodeCommitServiceException);
assert(typeof RevisionNotCurrentException$ === "object");
assert(SameFileContentException.prototype instanceof CodeCommitServiceException);
assert(typeof SameFileContentException$ === "object");
assert(SamePathRequestException.prototype instanceof CodeCommitServiceException);
assert(typeof SamePathRequestException$ === "object");
assert(SourceAndDestinationAreSameException.prototype instanceof CodeCommitServiceException);
assert(typeof SourceAndDestinationAreSameException$ === "object");
assert(SourceFileOrContentRequiredException.prototype instanceof CodeCommitServiceException);
assert(typeof SourceFileOrContentRequiredException$ === "object");
assert(TagKeysListRequiredException.prototype instanceof CodeCommitServiceException);
assert(typeof TagKeysListRequiredException$ === "object");
assert(TagPolicyException.prototype instanceof CodeCommitServiceException);
assert(typeof TagPolicyException$ === "object");
assert(TagsMapRequiredException.prototype instanceof CodeCommitServiceException);
assert(typeof TagsMapRequiredException$ === "object");
assert(TargetRequiredException.prototype instanceof CodeCommitServiceException);
assert(typeof TargetRequiredException$ === "object");
assert(TargetsRequiredException.prototype instanceof CodeCommitServiceException);
assert(typeof TargetsRequiredException$ === "object");
assert(TipOfSourceReferenceIsDifferentException.prototype instanceof CodeCommitServiceException);
assert(typeof TipOfSourceReferenceIsDifferentException$ === "object");
assert(TipsDivergenceExceededException.prototype instanceof CodeCommitServiceException);
assert(typeof TipsDivergenceExceededException$ === "object");
assert(TitleRequiredException.prototype instanceof CodeCommitServiceException);
assert(typeof TitleRequiredException$ === "object");
assert(TooManyTagsException.prototype instanceof CodeCommitServiceException);
assert(typeof TooManyTagsException$ === "object");
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
