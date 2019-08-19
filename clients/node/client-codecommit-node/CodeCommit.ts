import { CodeCommitClient } from "./CodeCommitClient";
import { ActorDoesNotExistException } from "./types/ActorDoesNotExistException";
import { AuthorDoesNotExistException } from "./types/AuthorDoesNotExistException";
import { BatchDescribeMergeConflictsInput } from "./types/BatchDescribeMergeConflictsInput";
import { BatchDescribeMergeConflictsOutput } from "./types/BatchDescribeMergeConflictsOutput";
import { BatchGetRepositoriesInput } from "./types/BatchGetRepositoriesInput";
import { BatchGetRepositoriesOutput } from "./types/BatchGetRepositoriesOutput";
import { BeforeCommitIdAndAfterCommitIdAreSameException } from "./types/BeforeCommitIdAndAfterCommitIdAreSameException";
import { BlobIdDoesNotExistException } from "./types/BlobIdDoesNotExistException";
import { BlobIdRequiredException } from "./types/BlobIdRequiredException";
import { BranchDoesNotExistException } from "./types/BranchDoesNotExistException";
import { BranchNameExistsException } from "./types/BranchNameExistsException";
import { BranchNameIsTagNameException } from "./types/BranchNameIsTagNameException";
import { BranchNameRequiredException } from "./types/BranchNameRequiredException";
import { ClientRequestTokenRequiredException } from "./types/ClientRequestTokenRequiredException";
import { CommentContentRequiredException } from "./types/CommentContentRequiredException";
import { CommentContentSizeLimitExceededException } from "./types/CommentContentSizeLimitExceededException";
import { CommentDeletedException } from "./types/CommentDeletedException";
import { CommentDoesNotExistException } from "./types/CommentDoesNotExistException";
import { CommentIdRequiredException } from "./types/CommentIdRequiredException";
import { CommentNotCreatedByCallerException } from "./types/CommentNotCreatedByCallerException";
import { CommitDoesNotExistException } from "./types/CommitDoesNotExistException";
import { CommitIdDoesNotExistException } from "./types/CommitIdDoesNotExistException";
import { CommitIdRequiredException } from "./types/CommitIdRequiredException";
import { CommitMessageLengthExceededException } from "./types/CommitMessageLengthExceededException";
import { CommitRequiredException } from "./types/CommitRequiredException";
import { ConcurrentReferenceUpdateException } from "./types/ConcurrentReferenceUpdateException";
import { CreateBranchInput } from "./types/CreateBranchInput";
import { CreateBranchOutput } from "./types/CreateBranchOutput";
import { CreateCommitInput } from "./types/CreateCommitInput";
import { CreateCommitOutput } from "./types/CreateCommitOutput";
import { CreatePullRequestInput } from "./types/CreatePullRequestInput";
import { CreatePullRequestOutput } from "./types/CreatePullRequestOutput";
import { CreateRepositoryInput } from "./types/CreateRepositoryInput";
import { CreateRepositoryOutput } from "./types/CreateRepositoryOutput";
import { CreateUnreferencedMergeCommitInput } from "./types/CreateUnreferencedMergeCommitInput";
import { CreateUnreferencedMergeCommitOutput } from "./types/CreateUnreferencedMergeCommitOutput";
import { DefaultBranchCannotBeDeletedException } from "./types/DefaultBranchCannotBeDeletedException";
import { DeleteBranchInput } from "./types/DeleteBranchInput";
import { DeleteBranchOutput } from "./types/DeleteBranchOutput";
import { DeleteCommentContentInput } from "./types/DeleteCommentContentInput";
import { DeleteCommentContentOutput } from "./types/DeleteCommentContentOutput";
import { DeleteFileInput } from "./types/DeleteFileInput";
import { DeleteFileOutput } from "./types/DeleteFileOutput";
import { DeleteRepositoryInput } from "./types/DeleteRepositoryInput";
import { DeleteRepositoryOutput } from "./types/DeleteRepositoryOutput";
import { DescribeMergeConflictsInput } from "./types/DescribeMergeConflictsInput";
import { DescribeMergeConflictsOutput } from "./types/DescribeMergeConflictsOutput";
import { DescribePullRequestEventsInput } from "./types/DescribePullRequestEventsInput";
import { DescribePullRequestEventsOutput } from "./types/DescribePullRequestEventsOutput";
import { DirectoryNameConflictsWithFileNameException } from "./types/DirectoryNameConflictsWithFileNameException";
import { EncryptionIntegrityChecksFailedException } from "./types/EncryptionIntegrityChecksFailedException";
import { EncryptionKeyAccessDeniedException } from "./types/EncryptionKeyAccessDeniedException";
import { EncryptionKeyDisabledException } from "./types/EncryptionKeyDisabledException";
import { EncryptionKeyNotFoundException } from "./types/EncryptionKeyNotFoundException";
import { EncryptionKeyUnavailableException } from "./types/EncryptionKeyUnavailableException";
import { FileContentAndSourceFileSpecifiedException } from "./types/FileContentAndSourceFileSpecifiedException";
import { FileContentRequiredException } from "./types/FileContentRequiredException";
import { FileContentSizeLimitExceededException } from "./types/FileContentSizeLimitExceededException";
import { FileDoesNotExistException } from "./types/FileDoesNotExistException";
import { FileEntryRequiredException } from "./types/FileEntryRequiredException";
import { FileModeRequiredException } from "./types/FileModeRequiredException";
import { FileNameConflictsWithDirectoryNameException } from "./types/FileNameConflictsWithDirectoryNameException";
import { FilePathConflictsWithSubmodulePathException } from "./types/FilePathConflictsWithSubmodulePathException";
import { FileTooLargeException } from "./types/FileTooLargeException";
import { FolderContentSizeLimitExceededException } from "./types/FolderContentSizeLimitExceededException";
import { FolderDoesNotExistException } from "./types/FolderDoesNotExistException";
import { GetBlobInput } from "./types/GetBlobInput";
import { GetBlobOutput } from "./types/GetBlobOutput";
import { GetBranchInput } from "./types/GetBranchInput";
import { GetBranchOutput } from "./types/GetBranchOutput";
import { GetCommentInput } from "./types/GetCommentInput";
import { GetCommentOutput } from "./types/GetCommentOutput";
import { GetCommentsForComparedCommitInput } from "./types/GetCommentsForComparedCommitInput";
import { GetCommentsForComparedCommitOutput } from "./types/GetCommentsForComparedCommitOutput";
import { GetCommentsForPullRequestInput } from "./types/GetCommentsForPullRequestInput";
import { GetCommentsForPullRequestOutput } from "./types/GetCommentsForPullRequestOutput";
import { GetCommitInput } from "./types/GetCommitInput";
import { GetCommitOutput } from "./types/GetCommitOutput";
import { GetDifferencesInput } from "./types/GetDifferencesInput";
import { GetDifferencesOutput } from "./types/GetDifferencesOutput";
import { GetFileInput } from "./types/GetFileInput";
import { GetFileOutput } from "./types/GetFileOutput";
import { GetFolderInput } from "./types/GetFolderInput";
import { GetFolderOutput } from "./types/GetFolderOutput";
import { GetMergeCommitInput } from "./types/GetMergeCommitInput";
import { GetMergeCommitOutput } from "./types/GetMergeCommitOutput";
import { GetMergeConflictsInput } from "./types/GetMergeConflictsInput";
import { GetMergeConflictsOutput } from "./types/GetMergeConflictsOutput";
import { GetMergeOptionsInput } from "./types/GetMergeOptionsInput";
import { GetMergeOptionsOutput } from "./types/GetMergeOptionsOutput";
import { GetPullRequestInput } from "./types/GetPullRequestInput";
import { GetPullRequestOutput } from "./types/GetPullRequestOutput";
import { GetRepositoryInput } from "./types/GetRepositoryInput";
import { GetRepositoryOutput } from "./types/GetRepositoryOutput";
import { GetRepositoryTriggersInput } from "./types/GetRepositoryTriggersInput";
import { GetRepositoryTriggersOutput } from "./types/GetRepositoryTriggersOutput";
import { IdempotencyParameterMismatchException } from "./types/IdempotencyParameterMismatchException";
import { InvalidActorArnException } from "./types/InvalidActorArnException";
import { InvalidAuthorArnException } from "./types/InvalidAuthorArnException";
import { InvalidBlobIdException } from "./types/InvalidBlobIdException";
import { InvalidBranchNameException } from "./types/InvalidBranchNameException";
import { InvalidClientRequestTokenException } from "./types/InvalidClientRequestTokenException";
import { InvalidCommentIdException } from "./types/InvalidCommentIdException";
import { InvalidCommitException } from "./types/InvalidCommitException";
import { InvalidCommitIdException } from "./types/InvalidCommitIdException";
import { InvalidConflictDetailLevelException } from "./types/InvalidConflictDetailLevelException";
import { InvalidConflictResolutionException } from "./types/InvalidConflictResolutionException";
import { InvalidConflictResolutionStrategyException } from "./types/InvalidConflictResolutionStrategyException";
import { InvalidContinuationTokenException } from "./types/InvalidContinuationTokenException";
import { InvalidDeletionParameterException } from "./types/InvalidDeletionParameterException";
import { InvalidDescriptionException } from "./types/InvalidDescriptionException";
import { InvalidDestinationCommitSpecifierException } from "./types/InvalidDestinationCommitSpecifierException";
import { InvalidEmailException } from "./types/InvalidEmailException";
import { InvalidFileLocationException } from "./types/InvalidFileLocationException";
import { InvalidFileModeException } from "./types/InvalidFileModeException";
import { InvalidFilePositionException } from "./types/InvalidFilePositionException";
import { InvalidMaxConflictFilesException } from "./types/InvalidMaxConflictFilesException";
import { InvalidMaxMergeHunksException } from "./types/InvalidMaxMergeHunksException";
import { InvalidMaxResultsException } from "./types/InvalidMaxResultsException";
import { InvalidMergeOptionException } from "./types/InvalidMergeOptionException";
import { InvalidOrderException } from "./types/InvalidOrderException";
import { InvalidParentCommitIdException } from "./types/InvalidParentCommitIdException";
import { InvalidPathException } from "./types/InvalidPathException";
import { InvalidPullRequestEventTypeException } from "./types/InvalidPullRequestEventTypeException";
import { InvalidPullRequestIdException } from "./types/InvalidPullRequestIdException";
import { InvalidPullRequestStatusException } from "./types/InvalidPullRequestStatusException";
import { InvalidPullRequestStatusUpdateException } from "./types/InvalidPullRequestStatusUpdateException";
import { InvalidReferenceNameException } from "./types/InvalidReferenceNameException";
import { InvalidRelativeFileVersionEnumException } from "./types/InvalidRelativeFileVersionEnumException";
import { InvalidReplacementContentException } from "./types/InvalidReplacementContentException";
import { InvalidReplacementTypeException } from "./types/InvalidReplacementTypeException";
import { InvalidRepositoryDescriptionException } from "./types/InvalidRepositoryDescriptionException";
import { InvalidRepositoryNameException } from "./types/InvalidRepositoryNameException";
import { InvalidRepositoryTriggerBranchNameException } from "./types/InvalidRepositoryTriggerBranchNameException";
import { InvalidRepositoryTriggerCustomDataException } from "./types/InvalidRepositoryTriggerCustomDataException";
import { InvalidRepositoryTriggerDestinationArnException } from "./types/InvalidRepositoryTriggerDestinationArnException";
import { InvalidRepositoryTriggerEventsException } from "./types/InvalidRepositoryTriggerEventsException";
import { InvalidRepositoryTriggerNameException } from "./types/InvalidRepositoryTriggerNameException";
import { InvalidRepositoryTriggerRegionException } from "./types/InvalidRepositoryTriggerRegionException";
import { InvalidResourceArnException } from "./types/InvalidResourceArnException";
import { InvalidSortByException } from "./types/InvalidSortByException";
import { InvalidSourceCommitSpecifierException } from "./types/InvalidSourceCommitSpecifierException";
import { InvalidSystemTagUsageException } from "./types/InvalidSystemTagUsageException";
import { InvalidTagKeysListException } from "./types/InvalidTagKeysListException";
import { InvalidTagsMapException } from "./types/InvalidTagsMapException";
import { InvalidTargetBranchException } from "./types/InvalidTargetBranchException";
import { InvalidTargetException } from "./types/InvalidTargetException";
import { InvalidTargetsException } from "./types/InvalidTargetsException";
import { InvalidTitleException } from "./types/InvalidTitleException";
import { ListBranchesInput } from "./types/ListBranchesInput";
import { ListBranchesOutput } from "./types/ListBranchesOutput";
import { ListPullRequestsInput } from "./types/ListPullRequestsInput";
import { ListPullRequestsOutput } from "./types/ListPullRequestsOutput";
import { ListRepositoriesInput } from "./types/ListRepositoriesInput";
import { ListRepositoriesOutput } from "./types/ListRepositoriesOutput";
import { ListTagsForResourceInput } from "./types/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./types/ListTagsForResourceOutput";
import { ManualMergeRequiredException } from "./types/ManualMergeRequiredException";
import { MaximumBranchesExceededException } from "./types/MaximumBranchesExceededException";
import { MaximumConflictResolutionEntriesExceededException } from "./types/MaximumConflictResolutionEntriesExceededException";
import { MaximumFileContentToLoadExceededException } from "./types/MaximumFileContentToLoadExceededException";
import { MaximumFileEntriesExceededException } from "./types/MaximumFileEntriesExceededException";
import { MaximumItemsToCompareExceededException } from "./types/MaximumItemsToCompareExceededException";
import { MaximumOpenPullRequestsExceededException } from "./types/MaximumOpenPullRequestsExceededException";
import { MaximumRepositoryNamesExceededException } from "./types/MaximumRepositoryNamesExceededException";
import { MaximumRepositoryTriggersExceededException } from "./types/MaximumRepositoryTriggersExceededException";
import { MergeBranchesByFastForwardInput } from "./types/MergeBranchesByFastForwardInput";
import { MergeBranchesByFastForwardOutput } from "./types/MergeBranchesByFastForwardOutput";
import { MergeBranchesBySquashInput } from "./types/MergeBranchesBySquashInput";
import { MergeBranchesBySquashOutput } from "./types/MergeBranchesBySquashOutput";
import { MergeBranchesByThreeWayInput } from "./types/MergeBranchesByThreeWayInput";
import { MergeBranchesByThreeWayOutput } from "./types/MergeBranchesByThreeWayOutput";
import { MergeOptionRequiredException } from "./types/MergeOptionRequiredException";
import { MergePullRequestByFastForwardInput } from "./types/MergePullRequestByFastForwardInput";
import { MergePullRequestByFastForwardOutput } from "./types/MergePullRequestByFastForwardOutput";
import { MergePullRequestBySquashInput } from "./types/MergePullRequestBySquashInput";
import { MergePullRequestBySquashOutput } from "./types/MergePullRequestBySquashOutput";
import { MergePullRequestByThreeWayInput } from "./types/MergePullRequestByThreeWayInput";
import { MergePullRequestByThreeWayOutput } from "./types/MergePullRequestByThreeWayOutput";
import { MultipleConflictResolutionEntriesException } from "./types/MultipleConflictResolutionEntriesException";
import { MultipleRepositoriesInPullRequestException } from "./types/MultipleRepositoriesInPullRequestException";
import { NameLengthExceededException } from "./types/NameLengthExceededException";
import { NoChangeException } from "./types/NoChangeException";
import { ParentCommitDoesNotExistException } from "./types/ParentCommitDoesNotExistException";
import { ParentCommitIdOutdatedException } from "./types/ParentCommitIdOutdatedException";
import { ParentCommitIdRequiredException } from "./types/ParentCommitIdRequiredException";
import { PathDoesNotExistException } from "./types/PathDoesNotExistException";
import { PathRequiredException } from "./types/PathRequiredException";
import { PostCommentForComparedCommitInput } from "./types/PostCommentForComparedCommitInput";
import { PostCommentForComparedCommitOutput } from "./types/PostCommentForComparedCommitOutput";
import { PostCommentForPullRequestInput } from "./types/PostCommentForPullRequestInput";
import { PostCommentForPullRequestOutput } from "./types/PostCommentForPullRequestOutput";
import { PostCommentReplyInput } from "./types/PostCommentReplyInput";
import { PostCommentReplyOutput } from "./types/PostCommentReplyOutput";
import { PullRequestAlreadyClosedException } from "./types/PullRequestAlreadyClosedException";
import { PullRequestDoesNotExistException } from "./types/PullRequestDoesNotExistException";
import { PullRequestIdRequiredException } from "./types/PullRequestIdRequiredException";
import { PullRequestStatusRequiredException } from "./types/PullRequestStatusRequiredException";
import { PutFileEntryConflictException } from "./types/PutFileEntryConflictException";
import { PutFileInput } from "./types/PutFileInput";
import { PutFileOutput } from "./types/PutFileOutput";
import { PutRepositoryTriggersInput } from "./types/PutRepositoryTriggersInput";
import { PutRepositoryTriggersOutput } from "./types/PutRepositoryTriggersOutput";
import { ReferenceDoesNotExistException } from "./types/ReferenceDoesNotExistException";
import { ReferenceNameRequiredException } from "./types/ReferenceNameRequiredException";
import { ReferenceTypeNotSupportedException } from "./types/ReferenceTypeNotSupportedException";
import { ReplacementContentRequiredException } from "./types/ReplacementContentRequiredException";
import { ReplacementTypeRequiredException } from "./types/ReplacementTypeRequiredException";
import { RepositoryDoesNotExistException } from "./types/RepositoryDoesNotExistException";
import { RepositoryLimitExceededException } from "./types/RepositoryLimitExceededException";
import { RepositoryNameExistsException } from "./types/RepositoryNameExistsException";
import { RepositoryNameRequiredException } from "./types/RepositoryNameRequiredException";
import { RepositoryNamesRequiredException } from "./types/RepositoryNamesRequiredException";
import { RepositoryNotAssociatedWithPullRequestException } from "./types/RepositoryNotAssociatedWithPullRequestException";
import { RepositoryTriggerBranchNameListRequiredException } from "./types/RepositoryTriggerBranchNameListRequiredException";
import { RepositoryTriggerDestinationArnRequiredException } from "./types/RepositoryTriggerDestinationArnRequiredException";
import { RepositoryTriggerEventsListRequiredException } from "./types/RepositoryTriggerEventsListRequiredException";
import { RepositoryTriggerNameRequiredException } from "./types/RepositoryTriggerNameRequiredException";
import { RepositoryTriggersListRequiredException } from "./types/RepositoryTriggersListRequiredException";
import { ResourceArnRequiredException } from "./types/ResourceArnRequiredException";
import { RestrictedSourceFileException } from "./types/RestrictedSourceFileException";
import { SameFileContentException } from "./types/SameFileContentException";
import { SamePathRequestException } from "./types/SamePathRequestException";
import { SourceAndDestinationAreSameException } from "./types/SourceAndDestinationAreSameException";
import { SourceFileOrContentRequiredException } from "./types/SourceFileOrContentRequiredException";
import { TagKeysListRequiredException } from "./types/TagKeysListRequiredException";
import { TagPolicyException } from "./types/TagPolicyException";
import { TagResourceInput } from "./types/TagResourceInput";
import { TagResourceOutput } from "./types/TagResourceOutput";
import { TagsMapRequiredException } from "./types/TagsMapRequiredException";
import { TargetRequiredException } from "./types/TargetRequiredException";
import { TargetsRequiredException } from "./types/TargetsRequiredException";
import { TestRepositoryTriggersInput } from "./types/TestRepositoryTriggersInput";
import { TestRepositoryTriggersOutput } from "./types/TestRepositoryTriggersOutput";
import { TipOfSourceReferenceIsDifferentException } from "./types/TipOfSourceReferenceIsDifferentException";
import { TipsDivergenceExceededException } from "./types/TipsDivergenceExceededException";
import { TitleRequiredException } from "./types/TitleRequiredException";
import { TooManyTagsException } from "./types/TooManyTagsException";
import { UntagResourceInput } from "./types/UntagResourceInput";
import { UntagResourceOutput } from "./types/UntagResourceOutput";
import { UpdateCommentInput } from "./types/UpdateCommentInput";
import { UpdateCommentOutput } from "./types/UpdateCommentOutput";
import { UpdateDefaultBranchInput } from "./types/UpdateDefaultBranchInput";
import { UpdateDefaultBranchOutput } from "./types/UpdateDefaultBranchOutput";
import { UpdatePullRequestDescriptionInput } from "./types/UpdatePullRequestDescriptionInput";
import { UpdatePullRequestDescriptionOutput } from "./types/UpdatePullRequestDescriptionOutput";
import { UpdatePullRequestStatusInput } from "./types/UpdatePullRequestStatusInput";
import { UpdatePullRequestStatusOutput } from "./types/UpdatePullRequestStatusOutput";
import { UpdatePullRequestTitleInput } from "./types/UpdatePullRequestTitleInput";
import { UpdatePullRequestTitleOutput } from "./types/UpdatePullRequestTitleOutput";
import { UpdateRepositoryDescriptionInput } from "./types/UpdateRepositoryDescriptionInput";
import { UpdateRepositoryDescriptionOutput } from "./types/UpdateRepositoryDescriptionOutput";
import { UpdateRepositoryNameInput } from "./types/UpdateRepositoryNameInput";
import { UpdateRepositoryNameOutput } from "./types/UpdateRepositoryNameOutput";
import { BatchDescribeMergeConflictsCommand } from "./commands/BatchDescribeMergeConflictsCommand";
import { BatchGetRepositoriesCommand } from "./commands/BatchGetRepositoriesCommand";
import { CreateBranchCommand } from "./commands/CreateBranchCommand";
import { CreateCommitCommand } from "./commands/CreateCommitCommand";
import { CreatePullRequestCommand } from "./commands/CreatePullRequestCommand";
import { CreateRepositoryCommand } from "./commands/CreateRepositoryCommand";
import { CreateUnreferencedMergeCommitCommand } from "./commands/CreateUnreferencedMergeCommitCommand";
import { DeleteBranchCommand } from "./commands/DeleteBranchCommand";
import { DeleteCommentContentCommand } from "./commands/DeleteCommentContentCommand";
import { DeleteFileCommand } from "./commands/DeleteFileCommand";
import { DeleteRepositoryCommand } from "./commands/DeleteRepositoryCommand";
import { DescribeMergeConflictsCommand } from "./commands/DescribeMergeConflictsCommand";
import { DescribePullRequestEventsCommand } from "./commands/DescribePullRequestEventsCommand";
import { GetBlobCommand } from "./commands/GetBlobCommand";
import { GetBranchCommand } from "./commands/GetBranchCommand";
import { GetCommentCommand } from "./commands/GetCommentCommand";
import { GetCommentsForComparedCommitCommand } from "./commands/GetCommentsForComparedCommitCommand";
import { GetCommentsForPullRequestCommand } from "./commands/GetCommentsForPullRequestCommand";
import { GetCommitCommand } from "./commands/GetCommitCommand";
import { GetDifferencesCommand } from "./commands/GetDifferencesCommand";
import { GetFileCommand } from "./commands/GetFileCommand";
import { GetFolderCommand } from "./commands/GetFolderCommand";
import { GetMergeCommitCommand } from "./commands/GetMergeCommitCommand";
import { GetMergeConflictsCommand } from "./commands/GetMergeConflictsCommand";
import { GetMergeOptionsCommand } from "./commands/GetMergeOptionsCommand";
import { GetPullRequestCommand } from "./commands/GetPullRequestCommand";
import { GetRepositoryCommand } from "./commands/GetRepositoryCommand";
import { GetRepositoryTriggersCommand } from "./commands/GetRepositoryTriggersCommand";
import { ListBranchesCommand } from "./commands/ListBranchesCommand";
import { ListPullRequestsCommand } from "./commands/ListPullRequestsCommand";
import { ListRepositoriesCommand } from "./commands/ListRepositoriesCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { MergeBranchesByFastForwardCommand } from "./commands/MergeBranchesByFastForwardCommand";
import { MergeBranchesBySquashCommand } from "./commands/MergeBranchesBySquashCommand";
import { MergeBranchesByThreeWayCommand } from "./commands/MergeBranchesByThreeWayCommand";
import { MergePullRequestByFastForwardCommand } from "./commands/MergePullRequestByFastForwardCommand";
import { MergePullRequestBySquashCommand } from "./commands/MergePullRequestBySquashCommand";
import { MergePullRequestByThreeWayCommand } from "./commands/MergePullRequestByThreeWayCommand";
import { PostCommentForComparedCommitCommand } from "./commands/PostCommentForComparedCommitCommand";
import { PostCommentForPullRequestCommand } from "./commands/PostCommentForPullRequestCommand";
import { PostCommentReplyCommand } from "./commands/PostCommentReplyCommand";
import { PutFileCommand } from "./commands/PutFileCommand";
import { PutRepositoryTriggersCommand } from "./commands/PutRepositoryTriggersCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { TestRepositoryTriggersCommand } from "./commands/TestRepositoryTriggersCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
import { UpdateCommentCommand } from "./commands/UpdateCommentCommand";
import { UpdateDefaultBranchCommand } from "./commands/UpdateDefaultBranchCommand";
import { UpdatePullRequestDescriptionCommand } from "./commands/UpdatePullRequestDescriptionCommand";
import { UpdatePullRequestStatusCommand } from "./commands/UpdatePullRequestStatusCommand";
import { UpdatePullRequestTitleCommand } from "./commands/UpdatePullRequestTitleCommand";
import { UpdateRepositoryDescriptionCommand } from "./commands/UpdateRepositoryDescriptionCommand";
import { UpdateRepositoryNameCommand } from "./commands/UpdateRepositoryNameCommand";

export class CodeCommit extends CodeCommitClient {
  /**
   * <p>Returns information about one or more merge conflicts in the attempted merge of two commit specifiers using the squash or three-way merge strategy.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {RepositoryNameRequiredException} <p>A repository name is required but was not specified.</p>
   *   - {InvalidRepositoryNameException} <p>At least one specified repository name is not valid.</p> <note> <p>This exception only occurs when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.</p> </note>
   *   - {RepositoryDoesNotExistException} <p>The specified repository does not exist.</p>
   *   - {MergeOptionRequiredException} <p>A merge option or stategy is required, and none was provided.</p>
   *   - {InvalidMergeOptionException} <p>The specified merge option is not valid for this operation. Not all merge strategies are supported for all operations.</p>
   *   - {InvalidContinuationTokenException} <p>The specified continuation token is not valid.</p>
   *   - {CommitRequiredException} <p>A commit was not specified.</p>
   *   - {CommitDoesNotExistException} <p>The specified commit does not exist or no commit was specified, and the specified repository has no default branch.</p>
   *   - {InvalidCommitException} <p>The specified commit is not valid.</p>
   *   - {TipsDivergenceExceededException} <p>The divergence between the tips of the provided commit specifiers is too great to determine whether there might be any merge conflicts. Locally compare the specifiers using <code>git diff</code> or a diff tool.</p>
   *   - {InvalidMaxConflictFilesException} <p>The specified value for the number of conflict files to return is not valid.</p>
   *   - {InvalidMaxMergeHunksException} <p>The specified value for the number of merge hunks to return is not valid.</p>
   *   - {InvalidConflictDetailLevelException} <p>The specified conflict detail level is not valid.</p>
   *   - {InvalidConflictResolutionStrategyException} <p>The specified conflict resolution strategy is not valid.</p>
   *   - {MaximumFileContentToLoadExceededException} <p>The number of files to load exceeds the allowed limit.</p>
   *   - {MaximumItemsToCompareExceededException} <p>The maximum number of items to compare between the source or destination branches and the merge base has exceeded the maximum allowed.</p>
   *   - {EncryptionIntegrityChecksFailedException} <p>An encryption integrity check failed.</p>
   *   - {EncryptionKeyAccessDeniedException} <p>An encryption key could not be accessed.</p>
   *   - {EncryptionKeyDisabledException} <p>The encryption key is disabled.</p>
   *   - {EncryptionKeyNotFoundException} <p>No encryption key was found.</p>
   *   - {EncryptionKeyUnavailableException} <p>The encryption key is not available.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchDescribeMergeConflicts(
    args: BatchDescribeMergeConflictsInput
  ): Promise<BatchDescribeMergeConflictsOutput>;
  public batchDescribeMergeConflicts(
    args: BatchDescribeMergeConflictsInput,
    cb: (err: any, data?: BatchDescribeMergeConflictsOutput) => void
  ): void;
  public batchDescribeMergeConflicts(
    args: BatchDescribeMergeConflictsInput,
    cb?: (err: any, data?: BatchDescribeMergeConflictsOutput) => void
  ): Promise<BatchDescribeMergeConflictsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchDescribeMergeConflictsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about one or more repositories.</p> <note> <p>The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a web page could expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a web page.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {RepositoryNamesRequiredException} <p>A repository names object is required but was not specified.</p>
   *   - {MaximumRepositoryNamesExceededException} <p>The maximum number of allowed repository names was exceeded. Currently, this number is 25.</p>
   *   - {InvalidRepositoryNameException} <p>At least one specified repository name is not valid.</p> <note> <p>This exception only occurs when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.</p> </note>
   *   - {EncryptionIntegrityChecksFailedException} <p>An encryption integrity check failed.</p>
   *   - {EncryptionKeyAccessDeniedException} <p>An encryption key could not be accessed.</p>
   *   - {EncryptionKeyDisabledException} <p>The encryption key is disabled.</p>
   *   - {EncryptionKeyNotFoundException} <p>No encryption key was found.</p>
   *   - {EncryptionKeyUnavailableException} <p>The encryption key is not available.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchGetRepositories(
    args: BatchGetRepositoriesInput
  ): Promise<BatchGetRepositoriesOutput>;
  public batchGetRepositories(
    args: BatchGetRepositoriesInput,
    cb: (err: any, data?: BatchGetRepositoriesOutput) => void
  ): void;
  public batchGetRepositories(
    args: BatchGetRepositoriesInput,
    cb?: (err: any, data?: BatchGetRepositoriesOutput) => void
  ): Promise<BatchGetRepositoriesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchGetRepositoriesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new branch in a repository and points the branch to a commit.</p> <note> <p>Calling the create branch operation does not set a repository's default branch. To do this, call the update default branch operation.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {RepositoryNameRequiredException} <p>A repository name is required but was not specified.</p>
   *   - {InvalidRepositoryNameException} <p>At least one specified repository name is not valid.</p> <note> <p>This exception only occurs when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.</p> </note>
   *   - {RepositoryDoesNotExistException} <p>The specified repository does not exist.</p>
   *   - {BranchNameRequiredException} <p>A branch name is required but was not specified.</p>
   *   - {BranchNameExistsException} <p>The specified branch name already exists.</p>
   *   - {InvalidBranchNameException} <p>The specified reference name is not valid.</p>
   *   - {CommitIdRequiredException} <p>A commit ID was not specified.</p>
   *   - {CommitDoesNotExistException} <p>The specified commit does not exist or no commit was specified, and the specified repository has no default branch.</p>
   *   - {InvalidCommitIdException} <p>The specified commit ID is not valid.</p>
   *   - {EncryptionIntegrityChecksFailedException} <p>An encryption integrity check failed.</p>
   *   - {EncryptionKeyAccessDeniedException} <p>An encryption key could not be accessed.</p>
   *   - {EncryptionKeyDisabledException} <p>The encryption key is disabled.</p>
   *   - {EncryptionKeyNotFoundException} <p>No encryption key was found.</p>
   *   - {EncryptionKeyUnavailableException} <p>The encryption key is not available.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createBranch(args: CreateBranchInput): Promise<CreateBranchOutput>;
  public createBranch(
    args: CreateBranchInput,
    cb: (err: any, data?: CreateBranchOutput) => void
  ): void;
  public createBranch(
    args: CreateBranchInput,
    cb?: (err: any, data?: CreateBranchOutput) => void
  ): Promise<CreateBranchOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateBranchCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a commit for a repository on the tip of a specified branch.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {RepositoryNameRequiredException} <p>A repository name is required but was not specified.</p>
   *   - {InvalidRepositoryNameException} <p>At least one specified repository name is not valid.</p> <note> <p>This exception only occurs when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.</p> </note>
   *   - {RepositoryDoesNotExistException} <p>The specified repository does not exist.</p>
   *   - {ParentCommitIdRequiredException} <p>A parent commit ID is required. To view the full commit ID of a branch in a repository, use <a>GetBranch</a> or a Git command (for example, git pull or git log).</p>
   *   - {InvalidParentCommitIdException} <p>The parent commit ID is not valid. The commit ID cannot be empty, and must match the head commit ID for the branch of the repository where you want to add or update a file.</p>
   *   - {ParentCommitDoesNotExistException} <p>The parent commit ID is not valid because it does not exist. The specified parent commit ID does not exist in the specified branch of the repository.</p>
   *   - {ParentCommitIdOutdatedException} <p>The file could not be added because the provided parent commit ID is not the current tip of the specified branch. To view the full commit ID of the current head of the branch, use <a>GetBranch</a>.</p>
   *   - {BranchNameRequiredException} <p>A branch name is required but was not specified.</p>
   *   - {InvalidBranchNameException} <p>The specified reference name is not valid.</p>
   *   - {BranchDoesNotExistException} <p>The specified branch does not exist.</p>
   *   - {BranchNameIsTagNameException} <p>The specified branch name is not valid because it is a tag name. Type the name of a current branch in the repository. For a list of valid branch names, use <a>ListBranches</a>.</p>
   *   - {FileEntryRequiredException} <p>The commit cannot be created because no files have been specified as added, updated, or changed (PutFile or DeleteFile) for the commit.</p>
   *   - {MaximumFileEntriesExceededException} <p>The number of specified files to change as part of this commit exceeds the maximum number of files that can be changed in a single commit. Consider using a Git client for these changes.</p>
   *   - {PutFileEntryConflictException} <p>The commit cannot be created because one or more files specified in the commit reference both a file and a folder.</p>
   *   - {SourceFileOrContentRequiredException} <p>The commit cannot be created because no source files or file content have been specified for the commit.</p>
   *   - {FileContentAndSourceFileSpecifiedException} <p>The commit cannot be created because both a source file and file content have been specified for the same file. You cannot provide both. Either specify a source file, or provide the file content directly.</p>
   *   - {PathRequiredException} <p>The folderPath for a location cannot be null.</p>
   *   - {InvalidPathException} <p>The specified path is not valid.</p>
   *   - {SamePathRequestException} <p>The commit cannot be created because one or more changes in this commit duplicate actions in the same file path. For example, you cannot make the same delete request to the same file in the same file path twice, or make a delete request and a move request to the same file as part of the same commit.</p>
   *   - {FileDoesNotExistException} <p>The specified file does not exist. Verify that you have provided the correct name of the file, including its full path and extension.</p>
   *   - {FileContentSizeLimitExceededException} <p>The file cannot be added because it is too large. The maximum file size that can be added is 6 MB, and the combined file content change size is 7 MB. Consider making these changes using a Git client.</p>
   *   - {FolderContentSizeLimitExceededException} <p>The commit cannot be created because at least one of the overall changes in the commit results in a folder whose contents exceed the limit of 6 MB. Either reduce the number and size of your changes, or split the changes across multiple folders.</p>
   *   - {InvalidDeletionParameterException} <p>The specified deletion parameter is not valid.</p>
   *   - {RestrictedSourceFileException} <p>The commit cannot be created because one of the changes specifies copying or moving a .gitkeep file.</p>
   *   - {FileModeRequiredException} <p>The commit cannot be created because a file mode is required to update mode permissions for an existing file, but no file mode has been specified.</p>
   *   - {InvalidFileModeException} <p>The specified file mode permission is not valid. For a list of valid file mode permissions, see <a>PutFile</a>. </p>
   *   - {NameLengthExceededException} <p>The user name is not valid because it has exceeded the character limit for author names. </p>
   *   - {InvalidEmailException} <p>The specified email address either contains one or more characters that are not allowed, or it exceeds the maximum number of characters allowed for an email address.</p>
   *   - {CommitMessageLengthExceededException} <p>The commit message is too long. Provide a shorter string. </p>
   *   - {EncryptionIntegrityChecksFailedException} <p>An encryption integrity check failed.</p>
   *   - {EncryptionKeyAccessDeniedException} <p>An encryption key could not be accessed.</p>
   *   - {EncryptionKeyDisabledException} <p>The encryption key is disabled.</p>
   *   - {EncryptionKeyNotFoundException} <p>No encryption key was found.</p>
   *   - {EncryptionKeyUnavailableException} <p>The encryption key is not available.</p>
   *   - {NoChangeException} <p>The commit cannot be created because no changes will be made to the repository as a result of this commit. A commit must contain at least one change.</p>
   *   - {FileNameConflictsWithDirectoryNameException} <p>A file cannot be added to the repository because the specified file name has the same name as a directory in this repository. Either provide another name for the file, or add the file in a directory that does not match the file name.</p>
   *   - {DirectoryNameConflictsWithFileNameException} <p>A file cannot be added to the repository because the specified path name has the same name as a file that already exists in this repository. Either provide a different name for the file, or specify a different path for the file.</p>
   *   - {FilePathConflictsWithSubmodulePathException} <p>The commit cannot be created because a specified file path points to a submodule. Verify that the destination files have valid file paths that do not point to a submodule.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createCommit(args: CreateCommitInput): Promise<CreateCommitOutput>;
  public createCommit(
    args: CreateCommitInput,
    cb: (err: any, data?: CreateCommitOutput) => void
  ): void;
  public createCommit(
    args: CreateCommitInput,
    cb?: (err: any, data?: CreateCommitOutput) => void
  ): Promise<CreateCommitOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateCommitCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a pull request in the specified repository.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {RepositoryNameRequiredException} <p>A repository name is required but was not specified.</p>
   *   - {InvalidRepositoryNameException} <p>At least one specified repository name is not valid.</p> <note> <p>This exception only occurs when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.</p> </note>
   *   - {RepositoryDoesNotExistException} <p>The specified repository does not exist.</p>
   *   - {EncryptionIntegrityChecksFailedException} <p>An encryption integrity check failed.</p>
   *   - {EncryptionKeyAccessDeniedException} <p>An encryption key could not be accessed.</p>
   *   - {EncryptionKeyDisabledException} <p>The encryption key is disabled.</p>
   *   - {EncryptionKeyNotFoundException} <p>No encryption key was found.</p>
   *   - {EncryptionKeyUnavailableException} <p>The encryption key is not available.</p>
   *   - {ClientRequestTokenRequiredException} <p>A client request token is required. A client request token is an unique, client-generated idempotency token that when provided in a request, ensures the request cannot be repeated with a changed parameter. If a request is received with the same parameters and a token is included, the request will return information about the initial request that used that token.</p>
   *   - {InvalidClientRequestTokenException} <p>The client request token is not valid.</p>
   *   - {IdempotencyParameterMismatchException} <p>The client request token is not valid. Either the token is not in a valid format, or the token has been used in a previous request and cannot be re-used.</p>
   *   - {ReferenceNameRequiredException} <p>A reference name is required, but none was provided.</p>
   *   - {InvalidReferenceNameException} <p>The specified reference name format is not valid. Reference names must conform to the Git references format, for example refs/heads/master. For more information, see <a href="https://git-scm.com/book/en/v2/Git-Internals-Git-References">Git Internals - Git References</a> or consult your Git documentation.</p>
   *   - {ReferenceDoesNotExistException} <p>The specified reference does not exist. You must provide a full commit ID.</p>
   *   - {ReferenceTypeNotSupportedException} <p>The specified reference is not a supported type. </p>
   *   - {TitleRequiredException} <p>A pull request title is required. It cannot be empty or null.</p>
   *   - {InvalidTitleException} <p>The title of the pull request is not valid. Pull request titles cannot exceed 100 characters in length.</p>
   *   - {InvalidDescriptionException} <p>The pull request description is not valid. Descriptions are limited to 1,000 characters in length.</p>
   *   - {TargetsRequiredException} <p>An array of target objects is required. It cannot be empty or null.</p>
   *   - {InvalidTargetsException} <p>The targets for the pull request is not valid or not in a valid format. Targets are a list of target objects. Each target object must contain the full values for the repository name, source branch, and destination branch for a pull request.</p>
   *   - {TargetRequiredException} <p>A pull request target is required. It cannot be empty or null. A pull request target must contain the full values for the repository name, source branch, and destination branch for the pull request.</p>
   *   - {InvalidTargetException} <p>The target for the pull request is not valid. A target must contain the full values for the repository name, source branch, and destination branch for the pull request.</p>
   *   - {MultipleRepositoriesInPullRequestException} <p>You cannot include more than one repository in a pull request. Make sure you have specified only one repository name in your request, and then try again.</p>
   *   - {MaximumOpenPullRequestsExceededException} <p>You cannot create the pull request because the repository has too many open pull requests. The maximum number of open pull requests for a repository is 1,000. Close one or more open pull requests, and then try again.</p>
   *   - {SourceAndDestinationAreSameException} <p>The source branch and the destination branch for the pull request are the same. You must specify different branches for the source and destination.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createPullRequest(
    args: CreatePullRequestInput
  ): Promise<CreatePullRequestOutput>;
  public createPullRequest(
    args: CreatePullRequestInput,
    cb: (err: any, data?: CreatePullRequestOutput) => void
  ): void;
  public createPullRequest(
    args: CreatePullRequestInput,
    cb?: (err: any, data?: CreatePullRequestOutput) => void
  ): Promise<CreatePullRequestOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreatePullRequestCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new, empty repository.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {RepositoryNameExistsException} <p>The specified repository name already exists.</p>
   *   - {RepositoryNameRequiredException} <p>A repository name is required but was not specified.</p>
   *   - {InvalidRepositoryNameException} <p>At least one specified repository name is not valid.</p> <note> <p>This exception only occurs when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.</p> </note>
   *   - {InvalidRepositoryDescriptionException} <p>The specified repository description is not valid.</p>
   *   - {RepositoryLimitExceededException} <p>A repository resource limit was exceeded.</p>
   *   - {EncryptionIntegrityChecksFailedException} <p>An encryption integrity check failed.</p>
   *   - {EncryptionKeyAccessDeniedException} <p>An encryption key could not be accessed.</p>
   *   - {EncryptionKeyDisabledException} <p>The encryption key is disabled.</p>
   *   - {EncryptionKeyNotFoundException} <p>No encryption key was found.</p>
   *   - {EncryptionKeyUnavailableException} <p>The encryption key is not available.</p>
   *   - {InvalidTagsMapException} <p>The map of tags is not valid.</p>
   *   - {TooManyTagsException} <p>The maximum number of tags for an AWS CodeCommit resource has been exceeded.</p>
   *   - {InvalidSystemTagUsageException} <p>The specified tag is not valid. Key names cannot be prefixed with aws:.</p>
   *   - {TagPolicyException} <p>The tag policy is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createRepository(
    args: CreateRepositoryInput
  ): Promise<CreateRepositoryOutput>;
  public createRepository(
    args: CreateRepositoryInput,
    cb: (err: any, data?: CreateRepositoryOutput) => void
  ): void;
  public createRepository(
    args: CreateRepositoryInput,
    cb?: (err: any, data?: CreateRepositoryOutput) => void
  ): Promise<CreateRepositoryOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateRepositoryCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an unreferenced commit that represents the result of merging two branches using a specified merge strategy. This can help you determine the outcome of a potential merge. This API cannot be used with the fast-forward merge strategy, as that strategy does not create a merge commit.</p> <note> <p>This unreferenced merge commit can only be accessed using the GetCommit API or through git commands such as git fetch. To retrieve this commit, you must specify its commit ID or otherwise reference it.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {RepositoryNameRequiredException} <p>A repository name is required but was not specified.</p>
   *   - {InvalidRepositoryNameException} <p>At least one specified repository name is not valid.</p> <note> <p>This exception only occurs when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.</p> </note>
   *   - {RepositoryDoesNotExistException} <p>The specified repository does not exist.</p>
   *   - {TipsDivergenceExceededException} <p>The divergence between the tips of the provided commit specifiers is too great to determine whether there might be any merge conflicts. Locally compare the specifiers using <code>git diff</code> or a diff tool.</p>
   *   - {CommitRequiredException} <p>A commit was not specified.</p>
   *   - {InvalidCommitException} <p>The specified commit is not valid.</p>
   *   - {CommitDoesNotExistException} <p>The specified commit does not exist or no commit was specified, and the specified repository has no default branch.</p>
   *   - {MergeOptionRequiredException} <p>A merge option or stategy is required, and none was provided.</p>
   *   - {InvalidMergeOptionException} <p>The specified merge option is not valid for this operation. Not all merge strategies are supported for all operations.</p>
   *   - {InvalidConflictDetailLevelException} <p>The specified conflict detail level is not valid.</p>
   *   - {InvalidConflictResolutionStrategyException} <p>The specified conflict resolution strategy is not valid.</p>
   *   - {InvalidConflictResolutionException} <p>The specified conflict resolution list is not valid.</p>
   *   - {ManualMergeRequiredException} <p>The pull request cannot be merged automatically into the destination branch. You must manually merge the branches and resolve any conflicts.</p>
   *   - {MaximumConflictResolutionEntriesExceededException} <p>The number of allowed conflict resolution entries was exceeded.</p>
   *   - {MultipleConflictResolutionEntriesException} <p>More than one conflict resolution entries exists for the conflict. A conflict can have only one conflict resolution entry.</p>
   *   - {ReplacementTypeRequiredException} <p>A replacement type is required.</p>
   *   - {InvalidReplacementTypeException} <p>Automerge was specified for resolving the conflict, but the specified replacement type is not valid.</p>
   *   - {ReplacementContentRequiredException} <p>USE_NEW_CONTENT was specified but no replacement content has been provided.</p>
   *   - {InvalidReplacementContentException} <p>Automerge was specified for resolving the conflict, but the replacement type is not valid or content is missing. </p>
   *   - {PathRequiredException} <p>The folderPath for a location cannot be null.</p>
   *   - {InvalidPathException} <p>The specified path is not valid.</p>
   *   - {FileContentSizeLimitExceededException} <p>The file cannot be added because it is too large. The maximum file size that can be added is 6 MB, and the combined file content change size is 7 MB. Consider making these changes using a Git client.</p>
   *   - {FolderContentSizeLimitExceededException} <p>The commit cannot be created because at least one of the overall changes in the commit results in a folder whose contents exceed the limit of 6 MB. Either reduce the number and size of your changes, or split the changes across multiple folders.</p>
   *   - {MaximumFileContentToLoadExceededException} <p>The number of files to load exceeds the allowed limit.</p>
   *   - {MaximumItemsToCompareExceededException} <p>The maximum number of items to compare between the source or destination branches and the merge base has exceeded the maximum allowed.</p>
   *   - {ConcurrentReferenceUpdateException} <p>The merge cannot be completed because the target branch has been modified. Another user might have modified the target branch while the merge was in progress. Wait a few minutes, and then try again.</p>
   *   - {FileModeRequiredException} <p>The commit cannot be created because a file mode is required to update mode permissions for an existing file, but no file mode has been specified.</p>
   *   - {InvalidFileModeException} <p>The specified file mode permission is not valid. For a list of valid file mode permissions, see <a>PutFile</a>. </p>
   *   - {NameLengthExceededException} <p>The user name is not valid because it has exceeded the character limit for author names. </p>
   *   - {InvalidEmailException} <p>The specified email address either contains one or more characters that are not allowed, or it exceeds the maximum number of characters allowed for an email address.</p>
   *   - {CommitMessageLengthExceededException} <p>The commit message is too long. Provide a shorter string. </p>
   *   - {EncryptionIntegrityChecksFailedException} <p>An encryption integrity check failed.</p>
   *   - {EncryptionKeyAccessDeniedException} <p>An encryption key could not be accessed.</p>
   *   - {EncryptionKeyDisabledException} <p>The encryption key is disabled.</p>
   *   - {EncryptionKeyNotFoundException} <p>No encryption key was found.</p>
   *   - {EncryptionKeyUnavailableException} <p>The encryption key is not available.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createUnreferencedMergeCommit(
    args: CreateUnreferencedMergeCommitInput
  ): Promise<CreateUnreferencedMergeCommitOutput>;
  public createUnreferencedMergeCommit(
    args: CreateUnreferencedMergeCommitInput,
    cb: (err: any, data?: CreateUnreferencedMergeCommitOutput) => void
  ): void;
  public createUnreferencedMergeCommit(
    args: CreateUnreferencedMergeCommitInput,
    cb?: (err: any, data?: CreateUnreferencedMergeCommitOutput) => void
  ): Promise<CreateUnreferencedMergeCommitOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateUnreferencedMergeCommitCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a branch from a repository, unless that branch is the default branch for the repository. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {RepositoryNameRequiredException} <p>A repository name is required but was not specified.</p>
   *   - {RepositoryDoesNotExistException} <p>The specified repository does not exist.</p>
   *   - {InvalidRepositoryNameException} <p>At least one specified repository name is not valid.</p> <note> <p>This exception only occurs when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.</p> </note>
   *   - {BranchNameRequiredException} <p>A branch name is required but was not specified.</p>
   *   - {InvalidBranchNameException} <p>The specified reference name is not valid.</p>
   *   - {DefaultBranchCannotBeDeletedException} <p>The specified branch is the default branch for the repository, and cannot be deleted. To delete this branch, you must first set another branch as the default branch.</p>
   *   - {EncryptionIntegrityChecksFailedException} <p>An encryption integrity check failed.</p>
   *   - {EncryptionKeyAccessDeniedException} <p>An encryption key could not be accessed.</p>
   *   - {EncryptionKeyDisabledException} <p>The encryption key is disabled.</p>
   *   - {EncryptionKeyNotFoundException} <p>No encryption key was found.</p>
   *   - {EncryptionKeyUnavailableException} <p>The encryption key is not available.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteBranch(args: DeleteBranchInput): Promise<DeleteBranchOutput>;
  public deleteBranch(
    args: DeleteBranchInput,
    cb: (err: any, data?: DeleteBranchOutput) => void
  ): void;
  public deleteBranch(
    args: DeleteBranchInput,
    cb?: (err: any, data?: DeleteBranchOutput) => void
  ): Promise<DeleteBranchOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteBranchCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the content of a comment made on a change, file, or commit in a repository.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {CommentDoesNotExistException} <p>No comment exists with the provided ID. Verify that you have provided the correct ID, and then try again.</p>
   *   - {CommentIdRequiredException} <p>The comment ID is missing or null. A comment ID is required.</p>
   *   - {InvalidCommentIdException} <p>The comment ID is not in a valid format. Make sure that you have provided the full comment ID.</p>
   *   - {CommentDeletedException} <p>This comment has already been deleted. You cannot edit or delete a deleted comment.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteCommentContent(
    args: DeleteCommentContentInput
  ): Promise<DeleteCommentContentOutput>;
  public deleteCommentContent(
    args: DeleteCommentContentInput,
    cb: (err: any, data?: DeleteCommentContentOutput) => void
  ): void;
  public deleteCommentContent(
    args: DeleteCommentContentInput,
    cb?: (err: any, data?: DeleteCommentContentOutput) => void
  ): Promise<DeleteCommentContentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteCommentContentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a specified file from a specified branch. A commit is created on the branch that contains the revision. The file will still exist in the commits prior to the commit that contains the deletion.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {RepositoryNameRequiredException} <p>A repository name is required but was not specified.</p>
   *   - {InvalidRepositoryNameException} <p>At least one specified repository name is not valid.</p> <note> <p>This exception only occurs when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.</p> </note>
   *   - {RepositoryDoesNotExistException} <p>The specified repository does not exist.</p>
   *   - {ParentCommitIdRequiredException} <p>A parent commit ID is required. To view the full commit ID of a branch in a repository, use <a>GetBranch</a> or a Git command (for example, git pull or git log).</p>
   *   - {InvalidParentCommitIdException} <p>The parent commit ID is not valid. The commit ID cannot be empty, and must match the head commit ID for the branch of the repository where you want to add or update a file.</p>
   *   - {ParentCommitDoesNotExistException} <p>The parent commit ID is not valid because it does not exist. The specified parent commit ID does not exist in the specified branch of the repository.</p>
   *   - {ParentCommitIdOutdatedException} <p>The file could not be added because the provided parent commit ID is not the current tip of the specified branch. To view the full commit ID of the current head of the branch, use <a>GetBranch</a>.</p>
   *   - {PathRequiredException} <p>The folderPath for a location cannot be null.</p>
   *   - {InvalidPathException} <p>The specified path is not valid.</p>
   *   - {FileDoesNotExistException} <p>The specified file does not exist. Verify that you have provided the correct name of the file, including its full path and extension.</p>
   *   - {BranchNameRequiredException} <p>A branch name is required but was not specified.</p>
   *   - {InvalidBranchNameException} <p>The specified reference name is not valid.</p>
   *   - {BranchDoesNotExistException} <p>The specified branch does not exist.</p>
   *   - {BranchNameIsTagNameException} <p>The specified branch name is not valid because it is a tag name. Type the name of a current branch in the repository. For a list of valid branch names, use <a>ListBranches</a>.</p>
   *   - {NameLengthExceededException} <p>The user name is not valid because it has exceeded the character limit for author names. </p>
   *   - {InvalidEmailException} <p>The specified email address either contains one or more characters that are not allowed, or it exceeds the maximum number of characters allowed for an email address.</p>
   *   - {CommitMessageLengthExceededException} <p>The commit message is too long. Provide a shorter string. </p>
   *   - {EncryptionIntegrityChecksFailedException} <p>An encryption integrity check failed.</p>
   *   - {EncryptionKeyAccessDeniedException} <p>An encryption key could not be accessed.</p>
   *   - {EncryptionKeyDisabledException} <p>The encryption key is disabled.</p>
   *   - {EncryptionKeyNotFoundException} <p>No encryption key was found.</p>
   *   - {EncryptionKeyUnavailableException} <p>The encryption key is not available.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteFile(args: DeleteFileInput): Promise<DeleteFileOutput>;
  public deleteFile(
    args: DeleteFileInput,
    cb: (err: any, data?: DeleteFileOutput) => void
  ): void;
  public deleteFile(
    args: DeleteFileInput,
    cb?: (err: any, data?: DeleteFileOutput) => void
  ): Promise<DeleteFileOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteFileCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a repository. If a specified repository was already deleted, a null repository ID will be returned.</p> <important> <p>Deleting a repository also deletes all associated objects and metadata. After a repository is deleted, all future push calls to the deleted repository will fail.</p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {RepositoryNameRequiredException} <p>A repository name is required but was not specified.</p>
   *   - {InvalidRepositoryNameException} <p>At least one specified repository name is not valid.</p> <note> <p>This exception only occurs when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.</p> </note>
   *   - {EncryptionIntegrityChecksFailedException} <p>An encryption integrity check failed.</p>
   *   - {EncryptionKeyAccessDeniedException} <p>An encryption key could not be accessed.</p>
   *   - {EncryptionKeyDisabledException} <p>The encryption key is disabled.</p>
   *   - {EncryptionKeyNotFoundException} <p>No encryption key was found.</p>
   *   - {EncryptionKeyUnavailableException} <p>The encryption key is not available.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteRepository(
    args: DeleteRepositoryInput
  ): Promise<DeleteRepositoryOutput>;
  public deleteRepository(
    args: DeleteRepositoryInput,
    cb: (err: any, data?: DeleteRepositoryOutput) => void
  ): void;
  public deleteRepository(
    args: DeleteRepositoryInput,
    cb?: (err: any, data?: DeleteRepositoryOutput) => void
  ): Promise<DeleteRepositoryOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteRepositoryCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about one or more merge conflicts in the attempted merge of two commit specifiers using the squash or three-way merge strategy. If the merge option for the attempted merge is specified as FAST_FORWARD_MERGE, an exception will be thrown.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {RepositoryNameRequiredException} <p>A repository name is required but was not specified.</p>
   *   - {InvalidRepositoryNameException} <p>At least one specified repository name is not valid.</p> <note> <p>This exception only occurs when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.</p> </note>
   *   - {RepositoryDoesNotExistException} <p>The specified repository does not exist.</p>
   *   - {MergeOptionRequiredException} <p>A merge option or stategy is required, and none was provided.</p>
   *   - {InvalidMergeOptionException} <p>The specified merge option is not valid for this operation. Not all merge strategies are supported for all operations.</p>
   *   - {InvalidContinuationTokenException} <p>The specified continuation token is not valid.</p>
   *   - {CommitRequiredException} <p>A commit was not specified.</p>
   *   - {CommitDoesNotExistException} <p>The specified commit does not exist or no commit was specified, and the specified repository has no default branch.</p>
   *   - {InvalidCommitException} <p>The specified commit is not valid.</p>
   *   - {TipsDivergenceExceededException} <p>The divergence between the tips of the provided commit specifiers is too great to determine whether there might be any merge conflicts. Locally compare the specifiers using <code>git diff</code> or a diff tool.</p>
   *   - {PathRequiredException} <p>The folderPath for a location cannot be null.</p>
   *   - {InvalidPathException} <p>The specified path is not valid.</p>
   *   - {FileDoesNotExistException} <p>The specified file does not exist. Verify that you have provided the correct name of the file, including its full path and extension.</p>
   *   - {InvalidMaxMergeHunksException} <p>The specified value for the number of merge hunks to return is not valid.</p>
   *   - {InvalidConflictDetailLevelException} <p>The specified conflict detail level is not valid.</p>
   *   - {InvalidConflictResolutionStrategyException} <p>The specified conflict resolution strategy is not valid.</p>
   *   - {MaximumFileContentToLoadExceededException} <p>The number of files to load exceeds the allowed limit.</p>
   *   - {MaximumItemsToCompareExceededException} <p>The maximum number of items to compare between the source or destination branches and the merge base has exceeded the maximum allowed.</p>
   *   - {EncryptionIntegrityChecksFailedException} <p>An encryption integrity check failed.</p>
   *   - {EncryptionKeyAccessDeniedException} <p>An encryption key could not be accessed.</p>
   *   - {EncryptionKeyDisabledException} <p>The encryption key is disabled.</p>
   *   - {EncryptionKeyNotFoundException} <p>No encryption key was found.</p>
   *   - {EncryptionKeyUnavailableException} <p>The encryption key is not available.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeMergeConflicts(
    args: DescribeMergeConflictsInput
  ): Promise<DescribeMergeConflictsOutput>;
  public describeMergeConflicts(
    args: DescribeMergeConflictsInput,
    cb: (err: any, data?: DescribeMergeConflictsOutput) => void
  ): void;
  public describeMergeConflicts(
    args: DescribeMergeConflictsInput,
    cb?: (err: any, data?: DescribeMergeConflictsOutput) => void
  ): Promise<DescribeMergeConflictsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeMergeConflictsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about one or more pull request events.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {PullRequestDoesNotExistException} <p>The pull request ID could not be found. Make sure that you have specified the correct repository name and pull request ID, and then try again.</p>
   *   - {InvalidPullRequestIdException} <p>The pull request ID is not valid. Make sure that you have provided the full ID and that the pull request is in the specified repository, and then try again.</p>
   *   - {PullRequestIdRequiredException} <p>A pull request ID is required, but none was provided.</p>
   *   - {InvalidPullRequestEventTypeException} <p>The pull request event type is not valid. </p>
   *   - {InvalidActorArnException} <p>The Amazon Resource Name (ARN) is not valid. Make sure that you have provided the full ARN for the user who initiated the change for the pull request, and then try again.</p>
   *   - {ActorDoesNotExistException} <p>The specified Amazon Resource Name (ARN) does not exist in the AWS account.</p>
   *   - {InvalidMaxResultsException} <p>The specified number of maximum results is not valid.</p>
   *   - {InvalidContinuationTokenException} <p>The specified continuation token is not valid.</p>
   *   - {EncryptionIntegrityChecksFailedException} <p>An encryption integrity check failed.</p>
   *   - {EncryptionKeyAccessDeniedException} <p>An encryption key could not be accessed.</p>
   *   - {EncryptionKeyDisabledException} <p>The encryption key is disabled.</p>
   *   - {EncryptionKeyNotFoundException} <p>No encryption key was found.</p>
   *   - {EncryptionKeyUnavailableException} <p>The encryption key is not available.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describePullRequestEvents(
    args: DescribePullRequestEventsInput
  ): Promise<DescribePullRequestEventsOutput>;
  public describePullRequestEvents(
    args: DescribePullRequestEventsInput,
    cb: (err: any, data?: DescribePullRequestEventsOutput) => void
  ): void;
  public describePullRequestEvents(
    args: DescribePullRequestEventsInput,
    cb?: (err: any, data?: DescribePullRequestEventsOutput) => void
  ): Promise<DescribePullRequestEventsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribePullRequestEventsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the base-64 encoded content of an individual blob within a repository.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {RepositoryNameRequiredException} <p>A repository name is required but was not specified.</p>
   *   - {InvalidRepositoryNameException} <p>At least one specified repository name is not valid.</p> <note> <p>This exception only occurs when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.</p> </note>
   *   - {RepositoryDoesNotExistException} <p>The specified repository does not exist.</p>
   *   - {BlobIdRequiredException} <p>A blob ID is required but was not specified.</p>
   *   - {InvalidBlobIdException} <p>The specified blob is not valid.</p>
   *   - {BlobIdDoesNotExistException} <p>The specified blob does not exist.</p>
   *   - {EncryptionIntegrityChecksFailedException} <p>An encryption integrity check failed.</p>
   *   - {EncryptionKeyAccessDeniedException} <p>An encryption key could not be accessed.</p>
   *   - {EncryptionKeyDisabledException} <p>The encryption key is disabled.</p>
   *   - {EncryptionKeyNotFoundException} <p>No encryption key was found.</p>
   *   - {EncryptionKeyUnavailableException} <p>The encryption key is not available.</p>
   *   - {FileTooLargeException} <p>The specified file exceeds the file size limit for AWS CodeCommit. For more information about limits in AWS CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/limits.html">AWS CodeCommit User Guide</a>.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getBlob(args: GetBlobInput): Promise<GetBlobOutput>;
  public getBlob(
    args: GetBlobInput,
    cb: (err: any, data?: GetBlobOutput) => void
  ): void;
  public getBlob(
    args: GetBlobInput,
    cb?: (err: any, data?: GetBlobOutput) => void
  ): Promise<GetBlobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetBlobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about a repository branch, including its name and the last commit ID.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {RepositoryNameRequiredException} <p>A repository name is required but was not specified.</p>
   *   - {RepositoryDoesNotExistException} <p>The specified repository does not exist.</p>
   *   - {InvalidRepositoryNameException} <p>At least one specified repository name is not valid.</p> <note> <p>This exception only occurs when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.</p> </note>
   *   - {BranchNameRequiredException} <p>A branch name is required but was not specified.</p>
   *   - {InvalidBranchNameException} <p>The specified reference name is not valid.</p>
   *   - {BranchDoesNotExistException} <p>The specified branch does not exist.</p>
   *   - {EncryptionIntegrityChecksFailedException} <p>An encryption integrity check failed.</p>
   *   - {EncryptionKeyAccessDeniedException} <p>An encryption key could not be accessed.</p>
   *   - {EncryptionKeyDisabledException} <p>The encryption key is disabled.</p>
   *   - {EncryptionKeyNotFoundException} <p>No encryption key was found.</p>
   *   - {EncryptionKeyUnavailableException} <p>The encryption key is not available.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getBranch(args: GetBranchInput): Promise<GetBranchOutput>;
  public getBranch(
    args: GetBranchInput,
    cb: (err: any, data?: GetBranchOutput) => void
  ): void;
  public getBranch(
    args: GetBranchInput,
    cb?: (err: any, data?: GetBranchOutput) => void
  ): Promise<GetBranchOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetBranchCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the content of a comment made on a change, file, or commit in a repository.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {CommentDoesNotExistException} <p>No comment exists with the provided ID. Verify that you have provided the correct ID, and then try again.</p>
   *   - {CommentIdRequiredException} <p>The comment ID is missing or null. A comment ID is required.</p>
   *   - {InvalidCommentIdException} <p>The comment ID is not in a valid format. Make sure that you have provided the full comment ID.</p>
   *   - {CommentDeletedException} <p>This comment has already been deleted. You cannot edit or delete a deleted comment.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getComment(args: GetCommentInput): Promise<GetCommentOutput>;
  public getComment(
    args: GetCommentInput,
    cb: (err: any, data?: GetCommentOutput) => void
  ): void;
  public getComment(
    args: GetCommentInput,
    cb?: (err: any, data?: GetCommentOutput) => void
  ): Promise<GetCommentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetCommentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about comments made on the comparison between two commits.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {RepositoryNameRequiredException} <p>A repository name is required but was not specified.</p>
   *   - {RepositoryDoesNotExistException} <p>The specified repository does not exist.</p>
   *   - {InvalidRepositoryNameException} <p>At least one specified repository name is not valid.</p> <note> <p>This exception only occurs when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.</p> </note>
   *   - {CommitIdRequiredException} <p>A commit ID was not specified.</p>
   *   - {InvalidCommitIdException} <p>The specified commit ID is not valid.</p>
   *   - {CommitDoesNotExistException} <p>The specified commit does not exist or no commit was specified, and the specified repository has no default branch.</p>
   *   - {InvalidMaxResultsException} <p>The specified number of maximum results is not valid.</p>
   *   - {InvalidContinuationTokenException} <p>The specified continuation token is not valid.</p>
   *   - {EncryptionIntegrityChecksFailedException} <p>An encryption integrity check failed.</p>
   *   - {EncryptionKeyAccessDeniedException} <p>An encryption key could not be accessed.</p>
   *   - {EncryptionKeyDisabledException} <p>The encryption key is disabled.</p>
   *   - {EncryptionKeyNotFoundException} <p>No encryption key was found.</p>
   *   - {EncryptionKeyUnavailableException} <p>The encryption key is not available.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getCommentsForComparedCommit(
    args: GetCommentsForComparedCommitInput
  ): Promise<GetCommentsForComparedCommitOutput>;
  public getCommentsForComparedCommit(
    args: GetCommentsForComparedCommitInput,
    cb: (err: any, data?: GetCommentsForComparedCommitOutput) => void
  ): void;
  public getCommentsForComparedCommit(
    args: GetCommentsForComparedCommitInput,
    cb?: (err: any, data?: GetCommentsForComparedCommitOutput) => void
  ): Promise<GetCommentsForComparedCommitOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetCommentsForComparedCommitCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns comments made on a pull request.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {PullRequestIdRequiredException} <p>A pull request ID is required, but none was provided.</p>
   *   - {PullRequestDoesNotExistException} <p>The pull request ID could not be found. Make sure that you have specified the correct repository name and pull request ID, and then try again.</p>
   *   - {InvalidPullRequestIdException} <p>The pull request ID is not valid. Make sure that you have provided the full ID and that the pull request is in the specified repository, and then try again.</p>
   *   - {RepositoryNameRequiredException} <p>A repository name is required but was not specified.</p>
   *   - {RepositoryDoesNotExistException} <p>The specified repository does not exist.</p>
   *   - {InvalidRepositoryNameException} <p>At least one specified repository name is not valid.</p> <note> <p>This exception only occurs when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.</p> </note>
   *   - {CommitIdRequiredException} <p>A commit ID was not specified.</p>
   *   - {InvalidCommitIdException} <p>The specified commit ID is not valid.</p>
   *   - {CommitDoesNotExistException} <p>The specified commit does not exist or no commit was specified, and the specified repository has no default branch.</p>
   *   - {InvalidMaxResultsException} <p>The specified number of maximum results is not valid.</p>
   *   - {InvalidContinuationTokenException} <p>The specified continuation token is not valid.</p>
   *   - {RepositoryNotAssociatedWithPullRequestException} <p>The repository does not contain any pull requests with that pull request ID. Use GetPullRequest to verify the correct repository name for the pull request ID.</p>
   *   - {EncryptionIntegrityChecksFailedException} <p>An encryption integrity check failed.</p>
   *   - {EncryptionKeyAccessDeniedException} <p>An encryption key could not be accessed.</p>
   *   - {EncryptionKeyDisabledException} <p>The encryption key is disabled.</p>
   *   - {EncryptionKeyNotFoundException} <p>No encryption key was found.</p>
   *   - {EncryptionKeyUnavailableException} <p>The encryption key is not available.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getCommentsForPullRequest(
    args: GetCommentsForPullRequestInput
  ): Promise<GetCommentsForPullRequestOutput>;
  public getCommentsForPullRequest(
    args: GetCommentsForPullRequestInput,
    cb: (err: any, data?: GetCommentsForPullRequestOutput) => void
  ): void;
  public getCommentsForPullRequest(
    args: GetCommentsForPullRequestInput,
    cb?: (err: any, data?: GetCommentsForPullRequestOutput) => void
  ): Promise<GetCommentsForPullRequestOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetCommentsForPullRequestCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about a commit, including commit message and committer information.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {RepositoryNameRequiredException} <p>A repository name is required but was not specified.</p>
   *   - {InvalidRepositoryNameException} <p>At least one specified repository name is not valid.</p> <note> <p>This exception only occurs when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.</p> </note>
   *   - {RepositoryDoesNotExistException} <p>The specified repository does not exist.</p>
   *   - {CommitIdRequiredException} <p>A commit ID was not specified.</p>
   *   - {InvalidCommitIdException} <p>The specified commit ID is not valid.</p>
   *   - {CommitIdDoesNotExistException} <p>The specified commit ID does not exist.</p>
   *   - {EncryptionIntegrityChecksFailedException} <p>An encryption integrity check failed.</p>
   *   - {EncryptionKeyAccessDeniedException} <p>An encryption key could not be accessed.</p>
   *   - {EncryptionKeyDisabledException} <p>The encryption key is disabled.</p>
   *   - {EncryptionKeyNotFoundException} <p>No encryption key was found.</p>
   *   - {EncryptionKeyUnavailableException} <p>The encryption key is not available.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getCommit(args: GetCommitInput): Promise<GetCommitOutput>;
  public getCommit(
    args: GetCommitInput,
    cb: (err: any, data?: GetCommitOutput) => void
  ): void;
  public getCommit(
    args: GetCommitInput,
    cb?: (err: any, data?: GetCommitOutput) => void
  ): Promise<GetCommitOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetCommitCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about the differences in a valid commit specifier (such as a branch, tag, HEAD, commit ID or other fully qualified reference). Results can be limited to a specified path.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {RepositoryNameRequiredException} <p>A repository name is required but was not specified.</p>
   *   - {RepositoryDoesNotExistException} <p>The specified repository does not exist.</p>
   *   - {InvalidRepositoryNameException} <p>At least one specified repository name is not valid.</p> <note> <p>This exception only occurs when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.</p> </note>
   *   - {InvalidContinuationTokenException} <p>The specified continuation token is not valid.</p>
   *   - {InvalidMaxResultsException} <p>The specified number of maximum results is not valid.</p>
   *   - {InvalidCommitIdException} <p>The specified commit ID is not valid.</p>
   *   - {CommitRequiredException} <p>A commit was not specified.</p>
   *   - {InvalidCommitException} <p>The specified commit is not valid.</p>
   *   - {CommitDoesNotExistException} <p>The specified commit does not exist or no commit was specified, and the specified repository has no default branch.</p>
   *   - {InvalidPathException} <p>The specified path is not valid.</p>
   *   - {PathDoesNotExistException} <p>The specified path does not exist.</p>
   *   - {EncryptionIntegrityChecksFailedException} <p>An encryption integrity check failed.</p>
   *   - {EncryptionKeyAccessDeniedException} <p>An encryption key could not be accessed.</p>
   *   - {EncryptionKeyDisabledException} <p>The encryption key is disabled.</p>
   *   - {EncryptionKeyNotFoundException} <p>No encryption key was found.</p>
   *   - {EncryptionKeyUnavailableException} <p>The encryption key is not available.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDifferences(
    args: GetDifferencesInput
  ): Promise<GetDifferencesOutput>;
  public getDifferences(
    args: GetDifferencesInput,
    cb: (err: any, data?: GetDifferencesOutput) => void
  ): void;
  public getDifferences(
    args: GetDifferencesInput,
    cb?: (err: any, data?: GetDifferencesOutput) => void
  ): Promise<GetDifferencesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDifferencesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the base-64 encoded contents of a specified file and its metadata.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {RepositoryNameRequiredException} <p>A repository name is required but was not specified.</p>
   *   - {InvalidRepositoryNameException} <p>At least one specified repository name is not valid.</p> <note> <p>This exception only occurs when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.</p> </note>
   *   - {RepositoryDoesNotExistException} <p>The specified repository does not exist.</p>
   *   - {InvalidCommitException} <p>The specified commit is not valid.</p>
   *   - {CommitDoesNotExistException} <p>The specified commit does not exist or no commit was specified, and the specified repository has no default branch.</p>
   *   - {PathRequiredException} <p>The folderPath for a location cannot be null.</p>
   *   - {InvalidPathException} <p>The specified path is not valid.</p>
   *   - {FileDoesNotExistException} <p>The specified file does not exist. Verify that you have provided the correct name of the file, including its full path and extension.</p>
   *   - {EncryptionIntegrityChecksFailedException} <p>An encryption integrity check failed.</p>
   *   - {EncryptionKeyAccessDeniedException} <p>An encryption key could not be accessed.</p>
   *   - {EncryptionKeyDisabledException} <p>The encryption key is disabled.</p>
   *   - {EncryptionKeyNotFoundException} <p>No encryption key was found.</p>
   *   - {EncryptionKeyUnavailableException} <p>The encryption key is not available.</p>
   *   - {FileTooLargeException} <p>The specified file exceeds the file size limit for AWS CodeCommit. For more information about limits in AWS CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/limits.html">AWS CodeCommit User Guide</a>.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getFile(args: GetFileInput): Promise<GetFileOutput>;
  public getFile(
    args: GetFileInput,
    cb: (err: any, data?: GetFileOutput) => void
  ): void;
  public getFile(
    args: GetFileInput,
    cb?: (err: any, data?: GetFileOutput) => void
  ): Promise<GetFileOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetFileCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the contents of a specified folder in a repository.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {RepositoryNameRequiredException} <p>A repository name is required but was not specified.</p>
   *   - {InvalidRepositoryNameException} <p>At least one specified repository name is not valid.</p> <note> <p>This exception only occurs when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.</p> </note>
   *   - {RepositoryDoesNotExistException} <p>The specified repository does not exist.</p>
   *   - {InvalidCommitException} <p>The specified commit is not valid.</p>
   *   - {CommitDoesNotExistException} <p>The specified commit does not exist or no commit was specified, and the specified repository has no default branch.</p>
   *   - {PathRequiredException} <p>The folderPath for a location cannot be null.</p>
   *   - {InvalidPathException} <p>The specified path is not valid.</p>
   *   - {FolderDoesNotExistException} <p>The specified folder does not exist. Either the folder name is not correct, or you did not provide the full path to the folder.</p>
   *   - {EncryptionIntegrityChecksFailedException} <p>An encryption integrity check failed.</p>
   *   - {EncryptionKeyAccessDeniedException} <p>An encryption key could not be accessed.</p>
   *   - {EncryptionKeyDisabledException} <p>The encryption key is disabled.</p>
   *   - {EncryptionKeyNotFoundException} <p>No encryption key was found.</p>
   *   - {EncryptionKeyUnavailableException} <p>The encryption key is not available.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getFolder(args: GetFolderInput): Promise<GetFolderOutput>;
  public getFolder(
    args: GetFolderInput,
    cb: (err: any, data?: GetFolderOutput) => void
  ): void;
  public getFolder(
    args: GetFolderInput,
    cb?: (err: any, data?: GetFolderOutput) => void
  ): Promise<GetFolderOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetFolderCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about a specified merge commit.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {RepositoryNameRequiredException} <p>A repository name is required but was not specified.</p>
   *   - {InvalidRepositoryNameException} <p>At least one specified repository name is not valid.</p> <note> <p>This exception only occurs when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.</p> </note>
   *   - {RepositoryDoesNotExistException} <p>The specified repository does not exist.</p>
   *   - {CommitRequiredException} <p>A commit was not specified.</p>
   *   - {InvalidCommitException} <p>The specified commit is not valid.</p>
   *   - {CommitDoesNotExistException} <p>The specified commit does not exist or no commit was specified, and the specified repository has no default branch.</p>
   *   - {InvalidConflictDetailLevelException} <p>The specified conflict detail level is not valid.</p>
   *   - {InvalidConflictResolutionStrategyException} <p>The specified conflict resolution strategy is not valid.</p>
   *   - {EncryptionIntegrityChecksFailedException} <p>An encryption integrity check failed.</p>
   *   - {EncryptionKeyAccessDeniedException} <p>An encryption key could not be accessed.</p>
   *   - {EncryptionKeyDisabledException} <p>The encryption key is disabled.</p>
   *   - {EncryptionKeyNotFoundException} <p>No encryption key was found.</p>
   *   - {EncryptionKeyUnavailableException} <p>The encryption key is not available.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getMergeCommit(
    args: GetMergeCommitInput
  ): Promise<GetMergeCommitOutput>;
  public getMergeCommit(
    args: GetMergeCommitInput,
    cb: (err: any, data?: GetMergeCommitOutput) => void
  ): void;
  public getMergeCommit(
    args: GetMergeCommitInput,
    cb?: (err: any, data?: GetMergeCommitOutput) => void
  ): Promise<GetMergeCommitOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetMergeCommitCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about merge conflicts between the before and after commit IDs for a pull request in a repository.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {RepositoryNameRequiredException} <p>A repository name is required but was not specified.</p>
   *   - {InvalidRepositoryNameException} <p>At least one specified repository name is not valid.</p> <note> <p>This exception only occurs when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.</p> </note>
   *   - {RepositoryDoesNotExistException} <p>The specified repository does not exist.</p>
   *   - {MergeOptionRequiredException} <p>A merge option or stategy is required, and none was provided.</p>
   *   - {InvalidMergeOptionException} <p>The specified merge option is not valid for this operation. Not all merge strategies are supported for all operations.</p>
   *   - {InvalidContinuationTokenException} <p>The specified continuation token is not valid.</p>
   *   - {CommitRequiredException} <p>A commit was not specified.</p>
   *   - {CommitDoesNotExistException} <p>The specified commit does not exist or no commit was specified, and the specified repository has no default branch.</p>
   *   - {InvalidCommitException} <p>The specified commit is not valid.</p>
   *   - {TipsDivergenceExceededException} <p>The divergence between the tips of the provided commit specifiers is too great to determine whether there might be any merge conflicts. Locally compare the specifiers using <code>git diff</code> or a diff tool.</p>
   *   - {InvalidMaxConflictFilesException} <p>The specified value for the number of conflict files to return is not valid.</p>
   *   - {InvalidConflictDetailLevelException} <p>The specified conflict detail level is not valid.</p>
   *   - {InvalidDestinationCommitSpecifierException} <p>The destination commit specifier is not valid. You must provide a valid branch name, tag, or full commit ID. </p>
   *   - {InvalidSourceCommitSpecifierException} <p>The source commit specifier is not valid. You must provide a valid branch name, tag, or full commit ID.</p>
   *   - {InvalidConflictResolutionStrategyException} <p>The specified conflict resolution strategy is not valid.</p>
   *   - {MaximumFileContentToLoadExceededException} <p>The number of files to load exceeds the allowed limit.</p>
   *   - {MaximumItemsToCompareExceededException} <p>The maximum number of items to compare between the source or destination branches and the merge base has exceeded the maximum allowed.</p>
   *   - {EncryptionIntegrityChecksFailedException} <p>An encryption integrity check failed.</p>
   *   - {EncryptionKeyAccessDeniedException} <p>An encryption key could not be accessed.</p>
   *   - {EncryptionKeyDisabledException} <p>The encryption key is disabled.</p>
   *   - {EncryptionKeyNotFoundException} <p>No encryption key was found.</p>
   *   - {EncryptionKeyUnavailableException} <p>The encryption key is not available.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getMergeConflicts(
    args: GetMergeConflictsInput
  ): Promise<GetMergeConflictsOutput>;
  public getMergeConflicts(
    args: GetMergeConflictsInput,
    cb: (err: any, data?: GetMergeConflictsOutput) => void
  ): void;
  public getMergeConflicts(
    args: GetMergeConflictsInput,
    cb?: (err: any, data?: GetMergeConflictsOutput) => void
  ): Promise<GetMergeConflictsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetMergeConflictsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about the merge options available for merging two specified branches. For details about why a particular merge option is not available, use GetMergeConflicts or DescribeMergeConflicts.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {RepositoryNameRequiredException} <p>A repository name is required but was not specified.</p>
   *   - {InvalidRepositoryNameException} <p>At least one specified repository name is not valid.</p> <note> <p>This exception only occurs when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.</p> </note>
   *   - {RepositoryDoesNotExistException} <p>The specified repository does not exist.</p>
   *   - {CommitRequiredException} <p>A commit was not specified.</p>
   *   - {CommitDoesNotExistException} <p>The specified commit does not exist or no commit was specified, and the specified repository has no default branch.</p>
   *   - {InvalidCommitException} <p>The specified commit is not valid.</p>
   *   - {TipsDivergenceExceededException} <p>The divergence between the tips of the provided commit specifiers is too great to determine whether there might be any merge conflicts. Locally compare the specifiers using <code>git diff</code> or a diff tool.</p>
   *   - {InvalidConflictDetailLevelException} <p>The specified conflict detail level is not valid.</p>
   *   - {InvalidConflictResolutionStrategyException} <p>The specified conflict resolution strategy is not valid.</p>
   *   - {MaximumFileContentToLoadExceededException} <p>The number of files to load exceeds the allowed limit.</p>
   *   - {MaximumItemsToCompareExceededException} <p>The maximum number of items to compare between the source or destination branches and the merge base has exceeded the maximum allowed.</p>
   *   - {EncryptionIntegrityChecksFailedException} <p>An encryption integrity check failed.</p>
   *   - {EncryptionKeyAccessDeniedException} <p>An encryption key could not be accessed.</p>
   *   - {EncryptionKeyDisabledException} <p>The encryption key is disabled.</p>
   *   - {EncryptionKeyNotFoundException} <p>No encryption key was found.</p>
   *   - {EncryptionKeyUnavailableException} <p>The encryption key is not available.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getMergeOptions(
    args: GetMergeOptionsInput
  ): Promise<GetMergeOptionsOutput>;
  public getMergeOptions(
    args: GetMergeOptionsInput,
    cb: (err: any, data?: GetMergeOptionsOutput) => void
  ): void;
  public getMergeOptions(
    args: GetMergeOptionsInput,
    cb?: (err: any, data?: GetMergeOptionsOutput) => void
  ): Promise<GetMergeOptionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetMergeOptionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about a pull request in a specified repository.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {PullRequestDoesNotExistException} <p>The pull request ID could not be found. Make sure that you have specified the correct repository name and pull request ID, and then try again.</p>
   *   - {InvalidPullRequestIdException} <p>The pull request ID is not valid. Make sure that you have provided the full ID and that the pull request is in the specified repository, and then try again.</p>
   *   - {PullRequestIdRequiredException} <p>A pull request ID is required, but none was provided.</p>
   *   - {EncryptionIntegrityChecksFailedException} <p>An encryption integrity check failed.</p>
   *   - {EncryptionKeyAccessDeniedException} <p>An encryption key could not be accessed.</p>
   *   - {EncryptionKeyDisabledException} <p>The encryption key is disabled.</p>
   *   - {EncryptionKeyNotFoundException} <p>No encryption key was found.</p>
   *   - {EncryptionKeyUnavailableException} <p>The encryption key is not available.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getPullRequest(
    args: GetPullRequestInput
  ): Promise<GetPullRequestOutput>;
  public getPullRequest(
    args: GetPullRequestInput,
    cb: (err: any, data?: GetPullRequestOutput) => void
  ): void;
  public getPullRequest(
    args: GetPullRequestInput,
    cb?: (err: any, data?: GetPullRequestOutput) => void
  ): Promise<GetPullRequestOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetPullRequestCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about a repository.</p> <note> <p>The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a web page could expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a web page.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {RepositoryNameRequiredException} <p>A repository name is required but was not specified.</p>
   *   - {RepositoryDoesNotExistException} <p>The specified repository does not exist.</p>
   *   - {InvalidRepositoryNameException} <p>At least one specified repository name is not valid.</p> <note> <p>This exception only occurs when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.</p> </note>
   *   - {EncryptionIntegrityChecksFailedException} <p>An encryption integrity check failed.</p>
   *   - {EncryptionKeyAccessDeniedException} <p>An encryption key could not be accessed.</p>
   *   - {EncryptionKeyDisabledException} <p>The encryption key is disabled.</p>
   *   - {EncryptionKeyNotFoundException} <p>No encryption key was found.</p>
   *   - {EncryptionKeyUnavailableException} <p>The encryption key is not available.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getRepository(args: GetRepositoryInput): Promise<GetRepositoryOutput>;
  public getRepository(
    args: GetRepositoryInput,
    cb: (err: any, data?: GetRepositoryOutput) => void
  ): void;
  public getRepository(
    args: GetRepositoryInput,
    cb?: (err: any, data?: GetRepositoryOutput) => void
  ): Promise<GetRepositoryOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetRepositoryCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about triggers configured for a repository.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {RepositoryNameRequiredException} <p>A repository name is required but was not specified.</p>
   *   - {InvalidRepositoryNameException} <p>At least one specified repository name is not valid.</p> <note> <p>This exception only occurs when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.</p> </note>
   *   - {RepositoryDoesNotExistException} <p>The specified repository does not exist.</p>
   *   - {EncryptionIntegrityChecksFailedException} <p>An encryption integrity check failed.</p>
   *   - {EncryptionKeyAccessDeniedException} <p>An encryption key could not be accessed.</p>
   *   - {EncryptionKeyDisabledException} <p>The encryption key is disabled.</p>
   *   - {EncryptionKeyNotFoundException} <p>No encryption key was found.</p>
   *   - {EncryptionKeyUnavailableException} <p>The encryption key is not available.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getRepositoryTriggers(
    args: GetRepositoryTriggersInput
  ): Promise<GetRepositoryTriggersOutput>;
  public getRepositoryTriggers(
    args: GetRepositoryTriggersInput,
    cb: (err: any, data?: GetRepositoryTriggersOutput) => void
  ): void;
  public getRepositoryTriggers(
    args: GetRepositoryTriggersInput,
    cb?: (err: any, data?: GetRepositoryTriggersOutput) => void
  ): Promise<GetRepositoryTriggersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetRepositoryTriggersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about one or more branches in a repository.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {RepositoryNameRequiredException} <p>A repository name is required but was not specified.</p>
   *   - {RepositoryDoesNotExistException} <p>The specified repository does not exist.</p>
   *   - {InvalidRepositoryNameException} <p>At least one specified repository name is not valid.</p> <note> <p>This exception only occurs when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.</p> </note>
   *   - {EncryptionIntegrityChecksFailedException} <p>An encryption integrity check failed.</p>
   *   - {EncryptionKeyAccessDeniedException} <p>An encryption key could not be accessed.</p>
   *   - {EncryptionKeyDisabledException} <p>The encryption key is disabled.</p>
   *   - {EncryptionKeyNotFoundException} <p>No encryption key was found.</p>
   *   - {EncryptionKeyUnavailableException} <p>The encryption key is not available.</p>
   *   - {InvalidContinuationTokenException} <p>The specified continuation token is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listBranches(args: ListBranchesInput): Promise<ListBranchesOutput>;
  public listBranches(
    args: ListBranchesInput,
    cb: (err: any, data?: ListBranchesOutput) => void
  ): void;
  public listBranches(
    args: ListBranchesInput,
    cb?: (err: any, data?: ListBranchesOutput) => void
  ): Promise<ListBranchesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListBranchesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of pull requests for a specified repository. The return list can be refined by pull request status or pull request author ARN.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidPullRequestStatusException} <p>The pull request status is not valid. The only valid values are <code>OPEN</code> and <code>CLOSED</code>.</p>
   *   - {InvalidAuthorArnException} <p>The Amazon Resource Name (ARN) is not valid. Make sure that you have provided the full ARN for the author of the pull request, and then try again.</p>
   *   - {AuthorDoesNotExistException} <p>The specified Amazon Resource Name (ARN) does not exist in the AWS account.</p>
   *   - {RepositoryNameRequiredException} <p>A repository name is required but was not specified.</p>
   *   - {InvalidRepositoryNameException} <p>At least one specified repository name is not valid.</p> <note> <p>This exception only occurs when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.</p> </note>
   *   - {RepositoryDoesNotExistException} <p>The specified repository does not exist.</p>
   *   - {InvalidMaxResultsException} <p>The specified number of maximum results is not valid.</p>
   *   - {InvalidContinuationTokenException} <p>The specified continuation token is not valid.</p>
   *   - {EncryptionIntegrityChecksFailedException} <p>An encryption integrity check failed.</p>
   *   - {EncryptionKeyAccessDeniedException} <p>An encryption key could not be accessed.</p>
   *   - {EncryptionKeyDisabledException} <p>The encryption key is disabled.</p>
   *   - {EncryptionKeyNotFoundException} <p>No encryption key was found.</p>
   *   - {EncryptionKeyUnavailableException} <p>The encryption key is not available.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listPullRequests(
    args: ListPullRequestsInput
  ): Promise<ListPullRequestsOutput>;
  public listPullRequests(
    args: ListPullRequestsInput,
    cb: (err: any, data?: ListPullRequestsOutput) => void
  ): void;
  public listPullRequests(
    args: ListPullRequestsInput,
    cb?: (err: any, data?: ListPullRequestsOutput) => void
  ): Promise<ListPullRequestsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListPullRequestsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about one or more repositories.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidSortByException} <p>The specified sort by value is not valid.</p>
   *   - {InvalidOrderException} <p>The specified sort order is not valid.</p>
   *   - {InvalidContinuationTokenException} <p>The specified continuation token is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listRepositories(
    args: ListRepositoriesInput
  ): Promise<ListRepositoriesOutput>;
  public listRepositories(
    args: ListRepositoriesInput,
    cb: (err: any, data?: ListRepositoriesOutput) => void
  ): void;
  public listRepositories(
    args: ListRepositoriesInput,
    cb?: (err: any, data?: ListRepositoriesOutput) => void
  ): Promise<ListRepositoriesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListRepositoriesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about AWS tags for a specified Amazon Resource Name (ARN) in AWS CodeCommit. For a list of valid resources in AWS CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a> in the AWS CodeCommit User Guide.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {RepositoryDoesNotExistException} <p>The specified repository does not exist.</p>
   *   - {InvalidRepositoryNameException} <p>At least one specified repository name is not valid.</p> <note> <p>This exception only occurs when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.</p> </note>
   *   - {ResourceArnRequiredException} <p>A valid Amazon Resource Name (ARN) for an AWS CodeCommit resource is required. For a list of valid resources in AWS CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a> in the AWS CodeCommit User Guide.</p>
   *   - {InvalidResourceArnException} <p>The value for the resource ARN is not valid. For more information about resources in AWS CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a> in the AWS CodeCommit User Guide.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTagsForResource(
    args: ListTagsForResourceInput
  ): Promise<ListTagsForResourceOutput>;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb: (err: any, data?: ListTagsForResourceOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb?: (err: any, data?: ListTagsForResourceOutput) => void
  ): Promise<ListTagsForResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTagsForResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Merges two branches using the fast-forward merge strategy.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {RepositoryNameRequiredException} <p>A repository name is required but was not specified.</p>
   *   - {InvalidRepositoryNameException} <p>At least one specified repository name is not valid.</p> <note> <p>This exception only occurs when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.</p> </note>
   *   - {RepositoryDoesNotExistException} <p>The specified repository does not exist.</p>
   *   - {TipsDivergenceExceededException} <p>The divergence between the tips of the provided commit specifiers is too great to determine whether there might be any merge conflicts. Locally compare the specifiers using <code>git diff</code> or a diff tool.</p>
   *   - {CommitRequiredException} <p>A commit was not specified.</p>
   *   - {InvalidCommitException} <p>The specified commit is not valid.</p>
   *   - {CommitDoesNotExistException} <p>The specified commit does not exist or no commit was specified, and the specified repository has no default branch.</p>
   *   - {InvalidTargetBranchException} <p>The specified target branch is not valid.</p>
   *   - {InvalidBranchNameException} <p>The specified reference name is not valid.</p>
   *   - {BranchNameRequiredException} <p>A branch name is required but was not specified.</p>
   *   - {BranchNameIsTagNameException} <p>The specified branch name is not valid because it is a tag name. Type the name of a current branch in the repository. For a list of valid branch names, use <a>ListBranches</a>.</p>
   *   - {BranchDoesNotExistException} <p>The specified branch does not exist.</p>
   *   - {ManualMergeRequiredException} <p>The pull request cannot be merged automatically into the destination branch. You must manually merge the branches and resolve any conflicts.</p>
   *   - {ConcurrentReferenceUpdateException} <p>The merge cannot be completed because the target branch has been modified. Another user might have modified the target branch while the merge was in progress. Wait a few minutes, and then try again.</p>
   *   - {EncryptionIntegrityChecksFailedException} <p>An encryption integrity check failed.</p>
   *   - {EncryptionKeyAccessDeniedException} <p>An encryption key could not be accessed.</p>
   *   - {EncryptionKeyDisabledException} <p>The encryption key is disabled.</p>
   *   - {EncryptionKeyNotFoundException} <p>No encryption key was found.</p>
   *   - {EncryptionKeyUnavailableException} <p>The encryption key is not available.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public mergeBranchesByFastForward(
    args: MergeBranchesByFastForwardInput
  ): Promise<MergeBranchesByFastForwardOutput>;
  public mergeBranchesByFastForward(
    args: MergeBranchesByFastForwardInput,
    cb: (err: any, data?: MergeBranchesByFastForwardOutput) => void
  ): void;
  public mergeBranchesByFastForward(
    args: MergeBranchesByFastForwardInput,
    cb?: (err: any, data?: MergeBranchesByFastForwardOutput) => void
  ): Promise<MergeBranchesByFastForwardOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new MergeBranchesByFastForwardCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Merges two branches using the squash merge strategy.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {RepositoryNameRequiredException} <p>A repository name is required but was not specified.</p>
   *   - {InvalidRepositoryNameException} <p>At least one specified repository name is not valid.</p> <note> <p>This exception only occurs when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.</p> </note>
   *   - {RepositoryDoesNotExistException} <p>The specified repository does not exist.</p>
   *   - {TipsDivergenceExceededException} <p>The divergence between the tips of the provided commit specifiers is too great to determine whether there might be any merge conflicts. Locally compare the specifiers using <code>git diff</code> or a diff tool.</p>
   *   - {CommitRequiredException} <p>A commit was not specified.</p>
   *   - {InvalidCommitException} <p>The specified commit is not valid.</p>
   *   - {CommitDoesNotExistException} <p>The specified commit does not exist or no commit was specified, and the specified repository has no default branch.</p>
   *   - {InvalidTargetBranchException} <p>The specified target branch is not valid.</p>
   *   - {InvalidBranchNameException} <p>The specified reference name is not valid.</p>
   *   - {BranchNameRequiredException} <p>A branch name is required but was not specified.</p>
   *   - {BranchNameIsTagNameException} <p>The specified branch name is not valid because it is a tag name. Type the name of a current branch in the repository. For a list of valid branch names, use <a>ListBranches</a>.</p>
   *   - {BranchDoesNotExistException} <p>The specified branch does not exist.</p>
   *   - {ManualMergeRequiredException} <p>The pull request cannot be merged automatically into the destination branch. You must manually merge the branches and resolve any conflicts.</p>
   *   - {InvalidConflictDetailLevelException} <p>The specified conflict detail level is not valid.</p>
   *   - {InvalidConflictResolutionStrategyException} <p>The specified conflict resolution strategy is not valid.</p>
   *   - {InvalidConflictResolutionException} <p>The specified conflict resolution list is not valid.</p>
   *   - {MaximumConflictResolutionEntriesExceededException} <p>The number of allowed conflict resolution entries was exceeded.</p>
   *   - {MultipleConflictResolutionEntriesException} <p>More than one conflict resolution entries exists for the conflict. A conflict can have only one conflict resolution entry.</p>
   *   - {ReplacementTypeRequiredException} <p>A replacement type is required.</p>
   *   - {InvalidReplacementTypeException} <p>Automerge was specified for resolving the conflict, but the specified replacement type is not valid.</p>
   *   - {ReplacementContentRequiredException} <p>USE_NEW_CONTENT was specified but no replacement content has been provided.</p>
   *   - {InvalidReplacementContentException} <p>Automerge was specified for resolving the conflict, but the replacement type is not valid or content is missing. </p>
   *   - {PathRequiredException} <p>The folderPath for a location cannot be null.</p>
   *   - {InvalidPathException} <p>The specified path is not valid.</p>
   *   - {FileContentSizeLimitExceededException} <p>The file cannot be added because it is too large. The maximum file size that can be added is 6 MB, and the combined file content change size is 7 MB. Consider making these changes using a Git client.</p>
   *   - {FolderContentSizeLimitExceededException} <p>The commit cannot be created because at least one of the overall changes in the commit results in a folder whose contents exceed the limit of 6 MB. Either reduce the number and size of your changes, or split the changes across multiple folders.</p>
   *   - {MaximumFileContentToLoadExceededException} <p>The number of files to load exceeds the allowed limit.</p>
   *   - {MaximumItemsToCompareExceededException} <p>The maximum number of items to compare between the source or destination branches and the merge base has exceeded the maximum allowed.</p>
   *   - {FileModeRequiredException} <p>The commit cannot be created because a file mode is required to update mode permissions for an existing file, but no file mode has been specified.</p>
   *   - {InvalidFileModeException} <p>The specified file mode permission is not valid. For a list of valid file mode permissions, see <a>PutFile</a>. </p>
   *   - {NameLengthExceededException} <p>The user name is not valid because it has exceeded the character limit for author names. </p>
   *   - {InvalidEmailException} <p>The specified email address either contains one or more characters that are not allowed, or it exceeds the maximum number of characters allowed for an email address.</p>
   *   - {CommitMessageLengthExceededException} <p>The commit message is too long. Provide a shorter string. </p>
   *   - {ConcurrentReferenceUpdateException} <p>The merge cannot be completed because the target branch has been modified. Another user might have modified the target branch while the merge was in progress. Wait a few minutes, and then try again.</p>
   *   - {EncryptionIntegrityChecksFailedException} <p>An encryption integrity check failed.</p>
   *   - {EncryptionKeyAccessDeniedException} <p>An encryption key could not be accessed.</p>
   *   - {EncryptionKeyDisabledException} <p>The encryption key is disabled.</p>
   *   - {EncryptionKeyNotFoundException} <p>No encryption key was found.</p>
   *   - {EncryptionKeyUnavailableException} <p>The encryption key is not available.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public mergeBranchesBySquash(
    args: MergeBranchesBySquashInput
  ): Promise<MergeBranchesBySquashOutput>;
  public mergeBranchesBySquash(
    args: MergeBranchesBySquashInput,
    cb: (err: any, data?: MergeBranchesBySquashOutput) => void
  ): void;
  public mergeBranchesBySquash(
    args: MergeBranchesBySquashInput,
    cb?: (err: any, data?: MergeBranchesBySquashOutput) => void
  ): Promise<MergeBranchesBySquashOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new MergeBranchesBySquashCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Merges two specified branches using the three-way merge strategy.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {RepositoryNameRequiredException} <p>A repository name is required but was not specified.</p>
   *   - {InvalidRepositoryNameException} <p>At least one specified repository name is not valid.</p> <note> <p>This exception only occurs when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.</p> </note>
   *   - {RepositoryDoesNotExistException} <p>The specified repository does not exist.</p>
   *   - {TipsDivergenceExceededException} <p>The divergence between the tips of the provided commit specifiers is too great to determine whether there might be any merge conflicts. Locally compare the specifiers using <code>git diff</code> or a diff tool.</p>
   *   - {CommitRequiredException} <p>A commit was not specified.</p>
   *   - {InvalidCommitException} <p>The specified commit is not valid.</p>
   *   - {CommitDoesNotExistException} <p>The specified commit does not exist or no commit was specified, and the specified repository has no default branch.</p>
   *   - {InvalidTargetBranchException} <p>The specified target branch is not valid.</p>
   *   - {InvalidBranchNameException} <p>The specified reference name is not valid.</p>
   *   - {BranchNameRequiredException} <p>A branch name is required but was not specified.</p>
   *   - {BranchNameIsTagNameException} <p>The specified branch name is not valid because it is a tag name. Type the name of a current branch in the repository. For a list of valid branch names, use <a>ListBranches</a>.</p>
   *   - {BranchDoesNotExistException} <p>The specified branch does not exist.</p>
   *   - {ManualMergeRequiredException} <p>The pull request cannot be merged automatically into the destination branch. You must manually merge the branches and resolve any conflicts.</p>
   *   - {ConcurrentReferenceUpdateException} <p>The merge cannot be completed because the target branch has been modified. Another user might have modified the target branch while the merge was in progress. Wait a few minutes, and then try again.</p>
   *   - {InvalidConflictDetailLevelException} <p>The specified conflict detail level is not valid.</p>
   *   - {InvalidConflictResolutionStrategyException} <p>The specified conflict resolution strategy is not valid.</p>
   *   - {InvalidConflictResolutionException} <p>The specified conflict resolution list is not valid.</p>
   *   - {MaximumConflictResolutionEntriesExceededException} <p>The number of allowed conflict resolution entries was exceeded.</p>
   *   - {MultipleConflictResolutionEntriesException} <p>More than one conflict resolution entries exists for the conflict. A conflict can have only one conflict resolution entry.</p>
   *   - {ReplacementTypeRequiredException} <p>A replacement type is required.</p>
   *   - {InvalidReplacementTypeException} <p>Automerge was specified for resolving the conflict, but the specified replacement type is not valid.</p>
   *   - {ReplacementContentRequiredException} <p>USE_NEW_CONTENT was specified but no replacement content has been provided.</p>
   *   - {InvalidReplacementContentException} <p>Automerge was specified for resolving the conflict, but the replacement type is not valid or content is missing. </p>
   *   - {PathRequiredException} <p>The folderPath for a location cannot be null.</p>
   *   - {InvalidPathException} <p>The specified path is not valid.</p>
   *   - {FileContentSizeLimitExceededException} <p>The file cannot be added because it is too large. The maximum file size that can be added is 6 MB, and the combined file content change size is 7 MB. Consider making these changes using a Git client.</p>
   *   - {FolderContentSizeLimitExceededException} <p>The commit cannot be created because at least one of the overall changes in the commit results in a folder whose contents exceed the limit of 6 MB. Either reduce the number and size of your changes, or split the changes across multiple folders.</p>
   *   - {MaximumFileContentToLoadExceededException} <p>The number of files to load exceeds the allowed limit.</p>
   *   - {MaximumItemsToCompareExceededException} <p>The maximum number of items to compare between the source or destination branches and the merge base has exceeded the maximum allowed.</p>
   *   - {FileModeRequiredException} <p>The commit cannot be created because a file mode is required to update mode permissions for an existing file, but no file mode has been specified.</p>
   *   - {InvalidFileModeException} <p>The specified file mode permission is not valid. For a list of valid file mode permissions, see <a>PutFile</a>. </p>
   *   - {NameLengthExceededException} <p>The user name is not valid because it has exceeded the character limit for author names. </p>
   *   - {InvalidEmailException} <p>The specified email address either contains one or more characters that are not allowed, or it exceeds the maximum number of characters allowed for an email address.</p>
   *   - {CommitMessageLengthExceededException} <p>The commit message is too long. Provide a shorter string. </p>
   *   - {EncryptionIntegrityChecksFailedException} <p>An encryption integrity check failed.</p>
   *   - {EncryptionKeyAccessDeniedException} <p>An encryption key could not be accessed.</p>
   *   - {EncryptionKeyDisabledException} <p>The encryption key is disabled.</p>
   *   - {EncryptionKeyNotFoundException} <p>No encryption key was found.</p>
   *   - {EncryptionKeyUnavailableException} <p>The encryption key is not available.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public mergeBranchesByThreeWay(
    args: MergeBranchesByThreeWayInput
  ): Promise<MergeBranchesByThreeWayOutput>;
  public mergeBranchesByThreeWay(
    args: MergeBranchesByThreeWayInput,
    cb: (err: any, data?: MergeBranchesByThreeWayOutput) => void
  ): void;
  public mergeBranchesByThreeWay(
    args: MergeBranchesByThreeWayInput,
    cb?: (err: any, data?: MergeBranchesByThreeWayOutput) => void
  ): Promise<MergeBranchesByThreeWayOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new MergeBranchesByThreeWayCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Attempts to merge the source commit of a pull request into the specified destination branch for that pull request at the specified commit using the fast-forward merge strategy. If the merge is successful, it closes the pull request.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ManualMergeRequiredException} <p>The pull request cannot be merged automatically into the destination branch. You must manually merge the branches and resolve any conflicts.</p>
   *   - {PullRequestAlreadyClosedException} <p>The pull request status cannot be updated because it is already closed.</p>
   *   - {PullRequestDoesNotExistException} <p>The pull request ID could not be found. Make sure that you have specified the correct repository name and pull request ID, and then try again.</p>
   *   - {InvalidPullRequestIdException} <p>The pull request ID is not valid. Make sure that you have provided the full ID and that the pull request is in the specified repository, and then try again.</p>
   *   - {PullRequestIdRequiredException} <p>A pull request ID is required, but none was provided.</p>
   *   - {TipOfSourceReferenceIsDifferentException} <p>The tip of the source branch in the destination repository does not match the tip of the source branch specified in your request. The pull request might have been updated. Make sure that you have the latest changes.</p>
   *   - {ReferenceDoesNotExistException} <p>The specified reference does not exist. You must provide a full commit ID.</p>
   *   - {InvalidCommitIdException} <p>The specified commit ID is not valid.</p>
   *   - {RepositoryNotAssociatedWithPullRequestException} <p>The repository does not contain any pull requests with that pull request ID. Use GetPullRequest to verify the correct repository name for the pull request ID.</p>
   *   - {RepositoryNameRequiredException} <p>A repository name is required but was not specified.</p>
   *   - {InvalidRepositoryNameException} <p>At least one specified repository name is not valid.</p> <note> <p>This exception only occurs when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.</p> </note>
   *   - {RepositoryDoesNotExistException} <p>The specified repository does not exist.</p>
   *   - {ConcurrentReferenceUpdateException} <p>The merge cannot be completed because the target branch has been modified. Another user might have modified the target branch while the merge was in progress. Wait a few minutes, and then try again.</p>
   *   - {EncryptionIntegrityChecksFailedException} <p>An encryption integrity check failed.</p>
   *   - {EncryptionKeyAccessDeniedException} <p>An encryption key could not be accessed.</p>
   *   - {EncryptionKeyDisabledException} <p>The encryption key is disabled.</p>
   *   - {EncryptionKeyNotFoundException} <p>No encryption key was found.</p>
   *   - {EncryptionKeyUnavailableException} <p>The encryption key is not available.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public mergePullRequestByFastForward(
    args: MergePullRequestByFastForwardInput
  ): Promise<MergePullRequestByFastForwardOutput>;
  public mergePullRequestByFastForward(
    args: MergePullRequestByFastForwardInput,
    cb: (err: any, data?: MergePullRequestByFastForwardOutput) => void
  ): void;
  public mergePullRequestByFastForward(
    args: MergePullRequestByFastForwardInput,
    cb?: (err: any, data?: MergePullRequestByFastForwardOutput) => void
  ): Promise<MergePullRequestByFastForwardOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new MergePullRequestByFastForwardCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Attempts to merge the source commit of a pull request into the specified destination branch for that pull request at the specified commit using the squash merge strategy. If the merge is successful, it closes the pull request.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {PullRequestAlreadyClosedException} <p>The pull request status cannot be updated because it is already closed.</p>
   *   - {PullRequestDoesNotExistException} <p>The pull request ID could not be found. Make sure that you have specified the correct repository name and pull request ID, and then try again.</p>
   *   - {PullRequestIdRequiredException} <p>A pull request ID is required, but none was provided.</p>
   *   - {InvalidPullRequestIdException} <p>The pull request ID is not valid. Make sure that you have provided the full ID and that the pull request is in the specified repository, and then try again.</p>
   *   - {InvalidCommitIdException} <p>The specified commit ID is not valid.</p>
   *   - {ManualMergeRequiredException} <p>The pull request cannot be merged automatically into the destination branch. You must manually merge the branches and resolve any conflicts.</p>
   *   - {TipOfSourceReferenceIsDifferentException} <p>The tip of the source branch in the destination repository does not match the tip of the source branch specified in your request. The pull request might have been updated. Make sure that you have the latest changes.</p>
   *   - {TipsDivergenceExceededException} <p>The divergence between the tips of the provided commit specifiers is too great to determine whether there might be any merge conflicts. Locally compare the specifiers using <code>git diff</code> or a diff tool.</p>
   *   - {NameLengthExceededException} <p>The user name is not valid because it has exceeded the character limit for author names. </p>
   *   - {InvalidEmailException} <p>The specified email address either contains one or more characters that are not allowed, or it exceeds the maximum number of characters allowed for an email address.</p>
   *   - {CommitMessageLengthExceededException} <p>The commit message is too long. Provide a shorter string. </p>
   *   - {InvalidConflictDetailLevelException} <p>The specified conflict detail level is not valid.</p>
   *   - {InvalidConflictResolutionStrategyException} <p>The specified conflict resolution strategy is not valid.</p>
   *   - {InvalidConflictResolutionException} <p>The specified conflict resolution list is not valid.</p>
   *   - {ReplacementTypeRequiredException} <p>A replacement type is required.</p>
   *   - {InvalidReplacementTypeException} <p>Automerge was specified for resolving the conflict, but the specified replacement type is not valid.</p>
   *   - {MultipleConflictResolutionEntriesException} <p>More than one conflict resolution entries exists for the conflict. A conflict can have only one conflict resolution entry.</p>
   *   - {ReplacementContentRequiredException} <p>USE_NEW_CONTENT was specified but no replacement content has been provided.</p>
   *   - {MaximumConflictResolutionEntriesExceededException} <p>The number of allowed conflict resolution entries was exceeded.</p>
   *   - {ConcurrentReferenceUpdateException} <p>The merge cannot be completed because the target branch has been modified. Another user might have modified the target branch while the merge was in progress. Wait a few minutes, and then try again.</p>
   *   - {PathRequiredException} <p>The folderPath for a location cannot be null.</p>
   *   - {InvalidPathException} <p>The specified path is not valid.</p>
   *   - {InvalidFileModeException} <p>The specified file mode permission is not valid. For a list of valid file mode permissions, see <a>PutFile</a>. </p>
   *   - {InvalidReplacementContentException} <p>Automerge was specified for resolving the conflict, but the replacement type is not valid or content is missing. </p>
   *   - {FileContentSizeLimitExceededException} <p>The file cannot be added because it is too large. The maximum file size that can be added is 6 MB, and the combined file content change size is 7 MB. Consider making these changes using a Git client.</p>
   *   - {FolderContentSizeLimitExceededException} <p>The commit cannot be created because at least one of the overall changes in the commit results in a folder whose contents exceed the limit of 6 MB. Either reduce the number and size of your changes, or split the changes across multiple folders.</p>
   *   - {MaximumFileContentToLoadExceededException} <p>The number of files to load exceeds the allowed limit.</p>
   *   - {MaximumItemsToCompareExceededException} <p>The maximum number of items to compare between the source or destination branches and the merge base has exceeded the maximum allowed.</p>
   *   - {RepositoryNameRequiredException} <p>A repository name is required but was not specified.</p>
   *   - {InvalidRepositoryNameException} <p>At least one specified repository name is not valid.</p> <note> <p>This exception only occurs when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.</p> </note>
   *   - {RepositoryDoesNotExistException} <p>The specified repository does not exist.</p>
   *   - {RepositoryNotAssociatedWithPullRequestException} <p>The repository does not contain any pull requests with that pull request ID. Use GetPullRequest to verify the correct repository name for the pull request ID.</p>
   *   - {EncryptionIntegrityChecksFailedException} <p>An encryption integrity check failed.</p>
   *   - {EncryptionKeyAccessDeniedException} <p>An encryption key could not be accessed.</p>
   *   - {EncryptionKeyDisabledException} <p>The encryption key is disabled.</p>
   *   - {EncryptionKeyNotFoundException} <p>No encryption key was found.</p>
   *   - {EncryptionKeyUnavailableException} <p>The encryption key is not available.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public mergePullRequestBySquash(
    args: MergePullRequestBySquashInput
  ): Promise<MergePullRequestBySquashOutput>;
  public mergePullRequestBySquash(
    args: MergePullRequestBySquashInput,
    cb: (err: any, data?: MergePullRequestBySquashOutput) => void
  ): void;
  public mergePullRequestBySquash(
    args: MergePullRequestBySquashInput,
    cb?: (err: any, data?: MergePullRequestBySquashOutput) => void
  ): Promise<MergePullRequestBySquashOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new MergePullRequestBySquashCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Attempts to merge the source commit of a pull request into the specified destination branch for that pull request at the specified commit using the three-way merge strategy. If the merge is successful, it closes the pull request.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {PullRequestAlreadyClosedException} <p>The pull request status cannot be updated because it is already closed.</p>
   *   - {PullRequestDoesNotExistException} <p>The pull request ID could not be found. Make sure that you have specified the correct repository name and pull request ID, and then try again.</p>
   *   - {PullRequestIdRequiredException} <p>A pull request ID is required, but none was provided.</p>
   *   - {InvalidPullRequestIdException} <p>The pull request ID is not valid. Make sure that you have provided the full ID and that the pull request is in the specified repository, and then try again.</p>
   *   - {InvalidCommitIdException} <p>The specified commit ID is not valid.</p>
   *   - {ManualMergeRequiredException} <p>The pull request cannot be merged automatically into the destination branch. You must manually merge the branches and resolve any conflicts.</p>
   *   - {TipOfSourceReferenceIsDifferentException} <p>The tip of the source branch in the destination repository does not match the tip of the source branch specified in your request. The pull request might have been updated. Make sure that you have the latest changes.</p>
   *   - {TipsDivergenceExceededException} <p>The divergence between the tips of the provided commit specifiers is too great to determine whether there might be any merge conflicts. Locally compare the specifiers using <code>git diff</code> or a diff tool.</p>
   *   - {NameLengthExceededException} <p>The user name is not valid because it has exceeded the character limit for author names. </p>
   *   - {InvalidEmailException} <p>The specified email address either contains one or more characters that are not allowed, or it exceeds the maximum number of characters allowed for an email address.</p>
   *   - {CommitMessageLengthExceededException} <p>The commit message is too long. Provide a shorter string. </p>
   *   - {InvalidConflictDetailLevelException} <p>The specified conflict detail level is not valid.</p>
   *   - {InvalidConflictResolutionStrategyException} <p>The specified conflict resolution strategy is not valid.</p>
   *   - {InvalidConflictResolutionException} <p>The specified conflict resolution list is not valid.</p>
   *   - {ReplacementTypeRequiredException} <p>A replacement type is required.</p>
   *   - {InvalidReplacementTypeException} <p>Automerge was specified for resolving the conflict, but the specified replacement type is not valid.</p>
   *   - {MultipleConflictResolutionEntriesException} <p>More than one conflict resolution entries exists for the conflict. A conflict can have only one conflict resolution entry.</p>
   *   - {ReplacementContentRequiredException} <p>USE_NEW_CONTENT was specified but no replacement content has been provided.</p>
   *   - {MaximumConflictResolutionEntriesExceededException} <p>The number of allowed conflict resolution entries was exceeded.</p>
   *   - {PathRequiredException} <p>The folderPath for a location cannot be null.</p>
   *   - {InvalidPathException} <p>The specified path is not valid.</p>
   *   - {InvalidFileModeException} <p>The specified file mode permission is not valid. For a list of valid file mode permissions, see <a>PutFile</a>. </p>
   *   - {InvalidReplacementContentException} <p>Automerge was specified for resolving the conflict, but the replacement type is not valid or content is missing. </p>
   *   - {FileContentSizeLimitExceededException} <p>The file cannot be added because it is too large. The maximum file size that can be added is 6 MB, and the combined file content change size is 7 MB. Consider making these changes using a Git client.</p>
   *   - {FolderContentSizeLimitExceededException} <p>The commit cannot be created because at least one of the overall changes in the commit results in a folder whose contents exceed the limit of 6 MB. Either reduce the number and size of your changes, or split the changes across multiple folders.</p>
   *   - {MaximumFileContentToLoadExceededException} <p>The number of files to load exceeds the allowed limit.</p>
   *   - {MaximumItemsToCompareExceededException} <p>The maximum number of items to compare between the source or destination branches and the merge base has exceeded the maximum allowed.</p>
   *   - {RepositoryNameRequiredException} <p>A repository name is required but was not specified.</p>
   *   - {InvalidRepositoryNameException} <p>At least one specified repository name is not valid.</p> <note> <p>This exception only occurs when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.</p> </note>
   *   - {RepositoryDoesNotExistException} <p>The specified repository does not exist.</p>
   *   - {RepositoryNotAssociatedWithPullRequestException} <p>The repository does not contain any pull requests with that pull request ID. Use GetPullRequest to verify the correct repository name for the pull request ID.</p>
   *   - {ConcurrentReferenceUpdateException} <p>The merge cannot be completed because the target branch has been modified. Another user might have modified the target branch while the merge was in progress. Wait a few minutes, and then try again.</p>
   *   - {EncryptionIntegrityChecksFailedException} <p>An encryption integrity check failed.</p>
   *   - {EncryptionKeyAccessDeniedException} <p>An encryption key could not be accessed.</p>
   *   - {EncryptionKeyDisabledException} <p>The encryption key is disabled.</p>
   *   - {EncryptionKeyNotFoundException} <p>No encryption key was found.</p>
   *   - {EncryptionKeyUnavailableException} <p>The encryption key is not available.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public mergePullRequestByThreeWay(
    args: MergePullRequestByThreeWayInput
  ): Promise<MergePullRequestByThreeWayOutput>;
  public mergePullRequestByThreeWay(
    args: MergePullRequestByThreeWayInput,
    cb: (err: any, data?: MergePullRequestByThreeWayOutput) => void
  ): void;
  public mergePullRequestByThreeWay(
    args: MergePullRequestByThreeWayInput,
    cb?: (err: any, data?: MergePullRequestByThreeWayOutput) => void
  ): Promise<MergePullRequestByThreeWayOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new MergePullRequestByThreeWayCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Posts a comment on the comparison between two commits.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {RepositoryNameRequiredException} <p>A repository name is required but was not specified.</p>
   *   - {RepositoryDoesNotExistException} <p>The specified repository does not exist.</p>
   *   - {InvalidRepositoryNameException} <p>At least one specified repository name is not valid.</p> <note> <p>This exception only occurs when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.</p> </note>
   *   - {ClientRequestTokenRequiredException} <p>A client request token is required. A client request token is an unique, client-generated idempotency token that when provided in a request, ensures the request cannot be repeated with a changed parameter. If a request is received with the same parameters and a token is included, the request will return information about the initial request that used that token.</p>
   *   - {InvalidClientRequestTokenException} <p>The client request token is not valid.</p>
   *   - {IdempotencyParameterMismatchException} <p>The client request token is not valid. Either the token is not in a valid format, or the token has been used in a previous request and cannot be re-used.</p>
   *   - {CommentContentRequiredException} <p>The comment is empty. You must provide some content for a comment. The content cannot be null.</p>
   *   - {CommentContentSizeLimitExceededException} <p>The comment is too large. Comments are limited to 1,000 characters.</p>
   *   - {InvalidFileLocationException} <p>The location of the file is not valid. Make sure that you include the extension of the file as well as the file name.</p>
   *   - {InvalidRelativeFileVersionEnumException} <p>Either the enum is not in a valid format, or the specified file version enum is not valid in respect to the current file version.</p>
   *   - {PathRequiredException} <p>The folderPath for a location cannot be null.</p>
   *   - {InvalidFilePositionException} <p>The position is not valid. Make sure that the line number exists in the version of the file you want to comment on.</p>
   *   - {CommitIdRequiredException} <p>A commit ID was not specified.</p>
   *   - {InvalidCommitIdException} <p>The specified commit ID is not valid.</p>
   *   - {EncryptionIntegrityChecksFailedException} <p>An encryption integrity check failed.</p>
   *   - {EncryptionKeyAccessDeniedException} <p>An encryption key could not be accessed.</p>
   *   - {EncryptionKeyDisabledException} <p>The encryption key is disabled.</p>
   *   - {EncryptionKeyNotFoundException} <p>No encryption key was found.</p>
   *   - {EncryptionKeyUnavailableException} <p>The encryption key is not available.</p>
   *   - {BeforeCommitIdAndAfterCommitIdAreSameException} <p>The before commit ID and the after commit ID are the same, which is not valid. The before commit ID and the after commit ID must be different commit IDs.</p>
   *   - {CommitDoesNotExistException} <p>The specified commit does not exist or no commit was specified, and the specified repository has no default branch.</p>
   *   - {InvalidPathException} <p>The specified path is not valid.</p>
   *   - {PathDoesNotExistException} <p>The specified path does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public postCommentForComparedCommit(
    args: PostCommentForComparedCommitInput
  ): Promise<PostCommentForComparedCommitOutput>;
  public postCommentForComparedCommit(
    args: PostCommentForComparedCommitInput,
    cb: (err: any, data?: PostCommentForComparedCommitOutput) => void
  ): void;
  public postCommentForComparedCommit(
    args: PostCommentForComparedCommitInput,
    cb?: (err: any, data?: PostCommentForComparedCommitOutput) => void
  ): Promise<PostCommentForComparedCommitOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PostCommentForComparedCommitCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Posts a comment on a pull request.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {PullRequestDoesNotExistException} <p>The pull request ID could not be found. Make sure that you have specified the correct repository name and pull request ID, and then try again.</p>
   *   - {InvalidPullRequestIdException} <p>The pull request ID is not valid. Make sure that you have provided the full ID and that the pull request is in the specified repository, and then try again.</p>
   *   - {PullRequestIdRequiredException} <p>A pull request ID is required, but none was provided.</p>
   *   - {RepositoryNotAssociatedWithPullRequestException} <p>The repository does not contain any pull requests with that pull request ID. Use GetPullRequest to verify the correct repository name for the pull request ID.</p>
   *   - {RepositoryNameRequiredException} <p>A repository name is required but was not specified.</p>
   *   - {RepositoryDoesNotExistException} <p>The specified repository does not exist.</p>
   *   - {InvalidRepositoryNameException} <p>At least one specified repository name is not valid.</p> <note> <p>This exception only occurs when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.</p> </note>
   *   - {ClientRequestTokenRequiredException} <p>A client request token is required. A client request token is an unique, client-generated idempotency token that when provided in a request, ensures the request cannot be repeated with a changed parameter. If a request is received with the same parameters and a token is included, the request will return information about the initial request that used that token.</p>
   *   - {InvalidClientRequestTokenException} <p>The client request token is not valid.</p>
   *   - {IdempotencyParameterMismatchException} <p>The client request token is not valid. Either the token is not in a valid format, or the token has been used in a previous request and cannot be re-used.</p>
   *   - {CommentContentRequiredException} <p>The comment is empty. You must provide some content for a comment. The content cannot be null.</p>
   *   - {CommentContentSizeLimitExceededException} <p>The comment is too large. Comments are limited to 1,000 characters.</p>
   *   - {InvalidFileLocationException} <p>The location of the file is not valid. Make sure that you include the extension of the file as well as the file name.</p>
   *   - {InvalidRelativeFileVersionEnumException} <p>Either the enum is not in a valid format, or the specified file version enum is not valid in respect to the current file version.</p>
   *   - {PathRequiredException} <p>The folderPath for a location cannot be null.</p>
   *   - {InvalidFilePositionException} <p>The position is not valid. Make sure that the line number exists in the version of the file you want to comment on.</p>
   *   - {CommitIdRequiredException} <p>A commit ID was not specified.</p>
   *   - {InvalidCommitIdException} <p>The specified commit ID is not valid.</p>
   *   - {EncryptionIntegrityChecksFailedException} <p>An encryption integrity check failed.</p>
   *   - {EncryptionKeyAccessDeniedException} <p>An encryption key could not be accessed.</p>
   *   - {EncryptionKeyDisabledException} <p>The encryption key is disabled.</p>
   *   - {EncryptionKeyNotFoundException} <p>No encryption key was found.</p>
   *   - {EncryptionKeyUnavailableException} <p>The encryption key is not available.</p>
   *   - {CommitDoesNotExistException} <p>The specified commit does not exist or no commit was specified, and the specified repository has no default branch.</p>
   *   - {InvalidPathException} <p>The specified path is not valid.</p>
   *   - {PathDoesNotExistException} <p>The specified path does not exist.</p>
   *   - {PathRequiredException} <p>The folderPath for a location cannot be null.</p>
   *   - {BeforeCommitIdAndAfterCommitIdAreSameException} <p>The before commit ID and the after commit ID are the same, which is not valid. The before commit ID and the after commit ID must be different commit IDs.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public postCommentForPullRequest(
    args: PostCommentForPullRequestInput
  ): Promise<PostCommentForPullRequestOutput>;
  public postCommentForPullRequest(
    args: PostCommentForPullRequestInput,
    cb: (err: any, data?: PostCommentForPullRequestOutput) => void
  ): void;
  public postCommentForPullRequest(
    args: PostCommentForPullRequestInput,
    cb?: (err: any, data?: PostCommentForPullRequestOutput) => void
  ): Promise<PostCommentForPullRequestOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PostCommentForPullRequestCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Posts a comment in reply to an existing comment on a comparison between commits or a pull request.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClientRequestTokenRequiredException} <p>A client request token is required. A client request token is an unique, client-generated idempotency token that when provided in a request, ensures the request cannot be repeated with a changed parameter. If a request is received with the same parameters and a token is included, the request will return information about the initial request that used that token.</p>
   *   - {InvalidClientRequestTokenException} <p>The client request token is not valid.</p>
   *   - {IdempotencyParameterMismatchException} <p>The client request token is not valid. Either the token is not in a valid format, or the token has been used in a previous request and cannot be re-used.</p>
   *   - {CommentContentRequiredException} <p>The comment is empty. You must provide some content for a comment. The content cannot be null.</p>
   *   - {CommentContentSizeLimitExceededException} <p>The comment is too large. Comments are limited to 1,000 characters.</p>
   *   - {CommentDoesNotExistException} <p>No comment exists with the provided ID. Verify that you have provided the correct ID, and then try again.</p>
   *   - {CommentIdRequiredException} <p>The comment ID is missing or null. A comment ID is required.</p>
   *   - {InvalidCommentIdException} <p>The comment ID is not in a valid format. Make sure that you have provided the full comment ID.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public postCommentReply(
    args: PostCommentReplyInput
  ): Promise<PostCommentReplyOutput>;
  public postCommentReply(
    args: PostCommentReplyInput,
    cb: (err: any, data?: PostCommentReplyOutput) => void
  ): void;
  public postCommentReply(
    args: PostCommentReplyInput,
    cb?: (err: any, data?: PostCommentReplyOutput) => void
  ): Promise<PostCommentReplyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PostCommentReplyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds or updates a file in a branch in an AWS CodeCommit repository, and generates a commit for the addition in the specified branch.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {RepositoryNameRequiredException} <p>A repository name is required but was not specified.</p>
   *   - {InvalidRepositoryNameException} <p>At least one specified repository name is not valid.</p> <note> <p>This exception only occurs when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.</p> </note>
   *   - {RepositoryDoesNotExistException} <p>The specified repository does not exist.</p>
   *   - {ParentCommitIdRequiredException} <p>A parent commit ID is required. To view the full commit ID of a branch in a repository, use <a>GetBranch</a> or a Git command (for example, git pull or git log).</p>
   *   - {InvalidParentCommitIdException} <p>The parent commit ID is not valid. The commit ID cannot be empty, and must match the head commit ID for the branch of the repository where you want to add or update a file.</p>
   *   - {ParentCommitDoesNotExistException} <p>The parent commit ID is not valid because it does not exist. The specified parent commit ID does not exist in the specified branch of the repository.</p>
   *   - {ParentCommitIdOutdatedException} <p>The file could not be added because the provided parent commit ID is not the current tip of the specified branch. To view the full commit ID of the current head of the branch, use <a>GetBranch</a>.</p>
   *   - {FileContentRequiredException} <p>The file cannot be added because it is empty. Empty files cannot be added to the repository with this API.</p>
   *   - {FileContentSizeLimitExceededException} <p>The file cannot be added because it is too large. The maximum file size that can be added is 6 MB, and the combined file content change size is 7 MB. Consider making these changes using a Git client.</p>
   *   - {FolderContentSizeLimitExceededException} <p>The commit cannot be created because at least one of the overall changes in the commit results in a folder whose contents exceed the limit of 6 MB. Either reduce the number and size of your changes, or split the changes across multiple folders.</p>
   *   - {PathRequiredException} <p>The folderPath for a location cannot be null.</p>
   *   - {InvalidPathException} <p>The specified path is not valid.</p>
   *   - {BranchNameRequiredException} <p>A branch name is required but was not specified.</p>
   *   - {InvalidBranchNameException} <p>The specified reference name is not valid.</p>
   *   - {BranchDoesNotExistException} <p>The specified branch does not exist.</p>
   *   - {BranchNameIsTagNameException} <p>The specified branch name is not valid because it is a tag name. Type the name of a current branch in the repository. For a list of valid branch names, use <a>ListBranches</a>.</p>
   *   - {InvalidFileModeException} <p>The specified file mode permission is not valid. For a list of valid file mode permissions, see <a>PutFile</a>. </p>
   *   - {NameLengthExceededException} <p>The user name is not valid because it has exceeded the character limit for author names. </p>
   *   - {InvalidEmailException} <p>The specified email address either contains one or more characters that are not allowed, or it exceeds the maximum number of characters allowed for an email address.</p>
   *   - {CommitMessageLengthExceededException} <p>The commit message is too long. Provide a shorter string. </p>
   *   - {InvalidDeletionParameterException} <p>The specified deletion parameter is not valid.</p>
   *   - {EncryptionIntegrityChecksFailedException} <p>An encryption integrity check failed.</p>
   *   - {EncryptionKeyAccessDeniedException} <p>An encryption key could not be accessed.</p>
   *   - {EncryptionKeyDisabledException} <p>The encryption key is disabled.</p>
   *   - {EncryptionKeyNotFoundException} <p>No encryption key was found.</p>
   *   - {EncryptionKeyUnavailableException} <p>The encryption key is not available.</p>
   *   - {SameFileContentException} <p>The file was not added or updated because the content of the file is exactly the same as the content of that file in the repository and branch that you specified.</p>
   *   - {FileNameConflictsWithDirectoryNameException} <p>A file cannot be added to the repository because the specified file name has the same name as a directory in this repository. Either provide another name for the file, or add the file in a directory that does not match the file name.</p>
   *   - {DirectoryNameConflictsWithFileNameException} <p>A file cannot be added to the repository because the specified path name has the same name as a file that already exists in this repository. Either provide a different name for the file, or specify a different path for the file.</p>
   *   - {FilePathConflictsWithSubmodulePathException} <p>The commit cannot be created because a specified file path points to a submodule. Verify that the destination files have valid file paths that do not point to a submodule.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putFile(args: PutFileInput): Promise<PutFileOutput>;
  public putFile(
    args: PutFileInput,
    cb: (err: any, data?: PutFileOutput) => void
  ): void;
  public putFile(
    args: PutFileInput,
    cb?: (err: any, data?: PutFileOutput) => void
  ): Promise<PutFileOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutFileCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Replaces all triggers for a repository. This can be used to create or delete triggers.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {RepositoryDoesNotExistException} <p>The specified repository does not exist.</p>
   *   - {RepositoryNameRequiredException} <p>A repository name is required but was not specified.</p>
   *   - {InvalidRepositoryNameException} <p>At least one specified repository name is not valid.</p> <note> <p>This exception only occurs when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.</p> </note>
   *   - {RepositoryTriggersListRequiredException} <p>The list of triggers for the repository is required but was not specified.</p>
   *   - {MaximumRepositoryTriggersExceededException} <p>The number of triggers allowed for the repository was exceeded.</p>
   *   - {InvalidRepositoryTriggerNameException} <p>The name of the trigger is not valid.</p>
   *   - {InvalidRepositoryTriggerDestinationArnException} <p>The Amazon Resource Name (ARN) for the trigger is not valid for the specified destination. The most common reason for this error is that the ARN does not meet the requirements for the service type.</p>
   *   - {InvalidRepositoryTriggerRegionException} <p>The region for the trigger target does not match the region for the repository. Triggers must be created in the same region as the target for the trigger.</p>
   *   - {InvalidRepositoryTriggerCustomDataException} <p>The custom data provided for the trigger is not valid.</p>
   *   - {MaximumBranchesExceededException} <p>The number of branches for the trigger was exceeded.</p>
   *   - {InvalidRepositoryTriggerBranchNameException} <p>One or more branch names specified for the trigger is not valid.</p>
   *   - {InvalidRepositoryTriggerEventsException} <p>One or more events specified for the trigger is not valid. Check to make sure that all events specified match the requirements for allowed events.</p>
   *   - {RepositoryTriggerNameRequiredException} <p>A name for the trigger is required but was not specified.</p>
   *   - {RepositoryTriggerDestinationArnRequiredException} <p>A destination ARN for the target service for the trigger is required but was not specified.</p>
   *   - {RepositoryTriggerBranchNameListRequiredException} <p>At least one branch name is required but was not specified in the trigger configuration.</p>
   *   - {RepositoryTriggerEventsListRequiredException} <p>At least one event for the trigger is required but was not specified.</p>
   *   - {EncryptionIntegrityChecksFailedException} <p>An encryption integrity check failed.</p>
   *   - {EncryptionKeyAccessDeniedException} <p>An encryption key could not be accessed.</p>
   *   - {EncryptionKeyDisabledException} <p>The encryption key is disabled.</p>
   *   - {EncryptionKeyNotFoundException} <p>No encryption key was found.</p>
   *   - {EncryptionKeyUnavailableException} <p>The encryption key is not available.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putRepositoryTriggers(
    args: PutRepositoryTriggersInput
  ): Promise<PutRepositoryTriggersOutput>;
  public putRepositoryTriggers(
    args: PutRepositoryTriggersInput,
    cb: (err: any, data?: PutRepositoryTriggersOutput) => void
  ): void;
  public putRepositoryTriggers(
    args: PutRepositoryTriggersInput,
    cb?: (err: any, data?: PutRepositoryTriggersOutput) => void
  ): Promise<PutRepositoryTriggersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutRepositoryTriggersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds or updates tags for a resource in AWS CodeCommit. For a list of valid resources in AWS CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a> in the AWS CodeCommit User Guide.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {RepositoryDoesNotExistException} <p>The specified repository does not exist.</p>
   *   - {InvalidRepositoryNameException} <p>At least one specified repository name is not valid.</p> <note> <p>This exception only occurs when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.</p> </note>
   *   - {ResourceArnRequiredException} <p>A valid Amazon Resource Name (ARN) for an AWS CodeCommit resource is required. For a list of valid resources in AWS CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a> in the AWS CodeCommit User Guide.</p>
   *   - {InvalidResourceArnException} <p>The value for the resource ARN is not valid. For more information about resources in AWS CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a> in the AWS CodeCommit User Guide.</p>
   *   - {TagsMapRequiredException} <p>A map of tags is required.</p>
   *   - {InvalidTagsMapException} <p>The map of tags is not valid.</p>
   *   - {TooManyTagsException} <p>The maximum number of tags for an AWS CodeCommit resource has been exceeded.</p>
   *   - {InvalidSystemTagUsageException} <p>The specified tag is not valid. Key names cannot be prefixed with aws:.</p>
   *   - {TagPolicyException} <p>The tag policy is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public tagResource(args: TagResourceInput): Promise<TagResourceOutput>;
  public tagResource(
    args: TagResourceInput,
    cb: (err: any, data?: TagResourceOutput) => void
  ): void;
  public tagResource(
    args: TagResourceInput,
    cb?: (err: any, data?: TagResourceOutput) => void
  ): Promise<TagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Tests the functionality of repository triggers by sending information to the trigger target. If real data is available in the repository, the test will send data from the last commit. If no data is available, sample data will be generated.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {RepositoryDoesNotExistException} <p>The specified repository does not exist.</p>
   *   - {RepositoryNameRequiredException} <p>A repository name is required but was not specified.</p>
   *   - {InvalidRepositoryNameException} <p>At least one specified repository name is not valid.</p> <note> <p>This exception only occurs when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.</p> </note>
   *   - {RepositoryTriggersListRequiredException} <p>The list of triggers for the repository is required but was not specified.</p>
   *   - {MaximumRepositoryTriggersExceededException} <p>The number of triggers allowed for the repository was exceeded.</p>
   *   - {InvalidRepositoryTriggerNameException} <p>The name of the trigger is not valid.</p>
   *   - {InvalidRepositoryTriggerDestinationArnException} <p>The Amazon Resource Name (ARN) for the trigger is not valid for the specified destination. The most common reason for this error is that the ARN does not meet the requirements for the service type.</p>
   *   - {InvalidRepositoryTriggerRegionException} <p>The region for the trigger target does not match the region for the repository. Triggers must be created in the same region as the target for the trigger.</p>
   *   - {InvalidRepositoryTriggerCustomDataException} <p>The custom data provided for the trigger is not valid.</p>
   *   - {MaximumBranchesExceededException} <p>The number of branches for the trigger was exceeded.</p>
   *   - {InvalidRepositoryTriggerBranchNameException} <p>One or more branch names specified for the trigger is not valid.</p>
   *   - {InvalidRepositoryTriggerEventsException} <p>One or more events specified for the trigger is not valid. Check to make sure that all events specified match the requirements for allowed events.</p>
   *   - {RepositoryTriggerNameRequiredException} <p>A name for the trigger is required but was not specified.</p>
   *   - {RepositoryTriggerDestinationArnRequiredException} <p>A destination ARN for the target service for the trigger is required but was not specified.</p>
   *   - {RepositoryTriggerBranchNameListRequiredException} <p>At least one branch name is required but was not specified in the trigger configuration.</p>
   *   - {RepositoryTriggerEventsListRequiredException} <p>At least one event for the trigger is required but was not specified.</p>
   *   - {EncryptionIntegrityChecksFailedException} <p>An encryption integrity check failed.</p>
   *   - {EncryptionKeyAccessDeniedException} <p>An encryption key could not be accessed.</p>
   *   - {EncryptionKeyDisabledException} <p>The encryption key is disabled.</p>
   *   - {EncryptionKeyNotFoundException} <p>No encryption key was found.</p>
   *   - {EncryptionKeyUnavailableException} <p>The encryption key is not available.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public testRepositoryTriggers(
    args: TestRepositoryTriggersInput
  ): Promise<TestRepositoryTriggersOutput>;
  public testRepositoryTriggers(
    args: TestRepositoryTriggersInput,
    cb: (err: any, data?: TestRepositoryTriggersOutput) => void
  ): void;
  public testRepositoryTriggers(
    args: TestRepositoryTriggersInput,
    cb?: (err: any, data?: TestRepositoryTriggersOutput) => void
  ): Promise<TestRepositoryTriggersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TestRepositoryTriggersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes tags for a resource in AWS CodeCommit. For a list of valid resources in AWS CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a> in the AWS CodeCommit User Guide.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {RepositoryDoesNotExistException} <p>The specified repository does not exist.</p>
   *   - {InvalidRepositoryNameException} <p>At least one specified repository name is not valid.</p> <note> <p>This exception only occurs when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.</p> </note>
   *   - {ResourceArnRequiredException} <p>A valid Amazon Resource Name (ARN) for an AWS CodeCommit resource is required. For a list of valid resources in AWS CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a> in the AWS CodeCommit User Guide.</p>
   *   - {InvalidResourceArnException} <p>The value for the resource ARN is not valid. For more information about resources in AWS CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a> in the AWS CodeCommit User Guide.</p>
   *   - {TagKeysListRequiredException} <p>A list of tag keys is required. The list cannot be empty or null.</p>
   *   - {InvalidTagKeysListException} <p>The list of tags is not valid.</p>
   *   - {TooManyTagsException} <p>The maximum number of tags for an AWS CodeCommit resource has been exceeded.</p>
   *   - {InvalidSystemTagUsageException} <p>The specified tag is not valid. Key names cannot be prefixed with aws:.</p>
   *   - {TagPolicyException} <p>The tag policy is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public untagResource(args: UntagResourceInput): Promise<UntagResourceOutput>;
  public untagResource(
    args: UntagResourceInput,
    cb: (err: any, data?: UntagResourceOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceInput,
    cb?: (err: any, data?: UntagResourceOutput) => void
  ): Promise<UntagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UntagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Replaces the contents of a comment.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {CommentContentRequiredException} <p>The comment is empty. You must provide some content for a comment. The content cannot be null.</p>
   *   - {CommentContentSizeLimitExceededException} <p>The comment is too large. Comments are limited to 1,000 characters.</p>
   *   - {CommentDoesNotExistException} <p>No comment exists with the provided ID. Verify that you have provided the correct ID, and then try again.</p>
   *   - {CommentIdRequiredException} <p>The comment ID is missing or null. A comment ID is required.</p>
   *   - {InvalidCommentIdException} <p>The comment ID is not in a valid format. Make sure that you have provided the full comment ID.</p>
   *   - {CommentNotCreatedByCallerException} <p>You cannot modify or delete this comment. Only comment authors can modify or delete their comments.</p>
   *   - {CommentDeletedException} <p>This comment has already been deleted. You cannot edit or delete a deleted comment.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateComment(args: UpdateCommentInput): Promise<UpdateCommentOutput>;
  public updateComment(
    args: UpdateCommentInput,
    cb: (err: any, data?: UpdateCommentOutput) => void
  ): void;
  public updateComment(
    args: UpdateCommentInput,
    cb?: (err: any, data?: UpdateCommentOutput) => void
  ): Promise<UpdateCommentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateCommentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sets or changes the default branch name for the specified repository.</p> <note> <p>If you use this operation to change the default branch name to the current default branch name, a success message is returned even though the default branch did not change.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {RepositoryNameRequiredException} <p>A repository name is required but was not specified.</p>
   *   - {RepositoryDoesNotExistException} <p>The specified repository does not exist.</p>
   *   - {InvalidRepositoryNameException} <p>At least one specified repository name is not valid.</p> <note> <p>This exception only occurs when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.</p> </note>
   *   - {BranchNameRequiredException} <p>A branch name is required but was not specified.</p>
   *   - {InvalidBranchNameException} <p>The specified reference name is not valid.</p>
   *   - {BranchDoesNotExistException} <p>The specified branch does not exist.</p>
   *   - {EncryptionIntegrityChecksFailedException} <p>An encryption integrity check failed.</p>
   *   - {EncryptionKeyAccessDeniedException} <p>An encryption key could not be accessed.</p>
   *   - {EncryptionKeyDisabledException} <p>The encryption key is disabled.</p>
   *   - {EncryptionKeyNotFoundException} <p>No encryption key was found.</p>
   *   - {EncryptionKeyUnavailableException} <p>The encryption key is not available.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateDefaultBranch(
    args: UpdateDefaultBranchInput
  ): Promise<UpdateDefaultBranchOutput>;
  public updateDefaultBranch(
    args: UpdateDefaultBranchInput,
    cb: (err: any, data?: UpdateDefaultBranchOutput) => void
  ): void;
  public updateDefaultBranch(
    args: UpdateDefaultBranchInput,
    cb?: (err: any, data?: UpdateDefaultBranchOutput) => void
  ): Promise<UpdateDefaultBranchOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateDefaultBranchCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Replaces the contents of the description of a pull request.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {PullRequestDoesNotExistException} <p>The pull request ID could not be found. Make sure that you have specified the correct repository name and pull request ID, and then try again.</p>
   *   - {InvalidPullRequestIdException} <p>The pull request ID is not valid. Make sure that you have provided the full ID and that the pull request is in the specified repository, and then try again.</p>
   *   - {PullRequestIdRequiredException} <p>A pull request ID is required, but none was provided.</p>
   *   - {InvalidDescriptionException} <p>The pull request description is not valid. Descriptions are limited to 1,000 characters in length.</p>
   *   - {PullRequestAlreadyClosedException} <p>The pull request status cannot be updated because it is already closed.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updatePullRequestDescription(
    args: UpdatePullRequestDescriptionInput
  ): Promise<UpdatePullRequestDescriptionOutput>;
  public updatePullRequestDescription(
    args: UpdatePullRequestDescriptionInput,
    cb: (err: any, data?: UpdatePullRequestDescriptionOutput) => void
  ): void;
  public updatePullRequestDescription(
    args: UpdatePullRequestDescriptionInput,
    cb?: (err: any, data?: UpdatePullRequestDescriptionOutput) => void
  ): Promise<UpdatePullRequestDescriptionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdatePullRequestDescriptionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the status of a pull request. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {PullRequestDoesNotExistException} <p>The pull request ID could not be found. Make sure that you have specified the correct repository name and pull request ID, and then try again.</p>
   *   - {InvalidPullRequestIdException} <p>The pull request ID is not valid. Make sure that you have provided the full ID and that the pull request is in the specified repository, and then try again.</p>
   *   - {PullRequestIdRequiredException} <p>A pull request ID is required, but none was provided.</p>
   *   - {InvalidPullRequestStatusUpdateException} <p>The pull request status update is not valid. The only valid update is from <code>OPEN</code> to <code>CLOSED</code>.</p>
   *   - {InvalidPullRequestStatusException} <p>The pull request status is not valid. The only valid values are <code>OPEN</code> and <code>CLOSED</code>.</p>
   *   - {PullRequestStatusRequiredException} <p>A pull request status is required, but none was provided.</p>
   *   - {EncryptionIntegrityChecksFailedException} <p>An encryption integrity check failed.</p>
   *   - {EncryptionKeyAccessDeniedException} <p>An encryption key could not be accessed.</p>
   *   - {EncryptionKeyDisabledException} <p>The encryption key is disabled.</p>
   *   - {EncryptionKeyNotFoundException} <p>No encryption key was found.</p>
   *   - {EncryptionKeyUnavailableException} <p>The encryption key is not available.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updatePullRequestStatus(
    args: UpdatePullRequestStatusInput
  ): Promise<UpdatePullRequestStatusOutput>;
  public updatePullRequestStatus(
    args: UpdatePullRequestStatusInput,
    cb: (err: any, data?: UpdatePullRequestStatusOutput) => void
  ): void;
  public updatePullRequestStatus(
    args: UpdatePullRequestStatusInput,
    cb?: (err: any, data?: UpdatePullRequestStatusOutput) => void
  ): Promise<UpdatePullRequestStatusOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdatePullRequestStatusCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Replaces the title of a pull request.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {PullRequestDoesNotExistException} <p>The pull request ID could not be found. Make sure that you have specified the correct repository name and pull request ID, and then try again.</p>
   *   - {InvalidPullRequestIdException} <p>The pull request ID is not valid. Make sure that you have provided the full ID and that the pull request is in the specified repository, and then try again.</p>
   *   - {PullRequestIdRequiredException} <p>A pull request ID is required, but none was provided.</p>
   *   - {TitleRequiredException} <p>A pull request title is required. It cannot be empty or null.</p>
   *   - {InvalidTitleException} <p>The title of the pull request is not valid. Pull request titles cannot exceed 100 characters in length.</p>
   *   - {PullRequestAlreadyClosedException} <p>The pull request status cannot be updated because it is already closed.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updatePullRequestTitle(
    args: UpdatePullRequestTitleInput
  ): Promise<UpdatePullRequestTitleOutput>;
  public updatePullRequestTitle(
    args: UpdatePullRequestTitleInput,
    cb: (err: any, data?: UpdatePullRequestTitleOutput) => void
  ): void;
  public updatePullRequestTitle(
    args: UpdatePullRequestTitleInput,
    cb?: (err: any, data?: UpdatePullRequestTitleOutput) => void
  ): Promise<UpdatePullRequestTitleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdatePullRequestTitleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sets or changes the comment or description for a repository.</p> <note> <p>The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a web page could expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a web page.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {RepositoryNameRequiredException} <p>A repository name is required but was not specified.</p>
   *   - {RepositoryDoesNotExistException} <p>The specified repository does not exist.</p>
   *   - {InvalidRepositoryNameException} <p>At least one specified repository name is not valid.</p> <note> <p>This exception only occurs when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.</p> </note>
   *   - {InvalidRepositoryDescriptionException} <p>The specified repository description is not valid.</p>
   *   - {EncryptionIntegrityChecksFailedException} <p>An encryption integrity check failed.</p>
   *   - {EncryptionKeyAccessDeniedException} <p>An encryption key could not be accessed.</p>
   *   - {EncryptionKeyDisabledException} <p>The encryption key is disabled.</p>
   *   - {EncryptionKeyNotFoundException} <p>No encryption key was found.</p>
   *   - {EncryptionKeyUnavailableException} <p>The encryption key is not available.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateRepositoryDescription(
    args: UpdateRepositoryDescriptionInput
  ): Promise<UpdateRepositoryDescriptionOutput>;
  public updateRepositoryDescription(
    args: UpdateRepositoryDescriptionInput,
    cb: (err: any, data?: UpdateRepositoryDescriptionOutput) => void
  ): void;
  public updateRepositoryDescription(
    args: UpdateRepositoryDescriptionInput,
    cb?: (err: any, data?: UpdateRepositoryDescriptionOutput) => void
  ): Promise<UpdateRepositoryDescriptionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateRepositoryDescriptionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Renames a repository. The repository name must be unique across the calling AWS account. In addition, repository names are limited to 100 alphanumeric, dash, and underscore characters, and cannot include certain characters. The suffix ".git" is prohibited. For a full description of the limits on repository names, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/limits.html">Limits</a> in the AWS CodeCommit User Guide.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {RepositoryDoesNotExistException} <p>The specified repository does not exist.</p>
   *   - {RepositoryNameExistsException} <p>The specified repository name already exists.</p>
   *   - {RepositoryNameRequiredException} <p>A repository name is required but was not specified.</p>
   *   - {InvalidRepositoryNameException} <p>At least one specified repository name is not valid.</p> <note> <p>This exception only occurs when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.</p> </note>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateRepositoryName(
    args: UpdateRepositoryNameInput
  ): Promise<UpdateRepositoryNameOutput>;
  public updateRepositoryName(
    args: UpdateRepositoryNameInput,
    cb: (err: any, data?: UpdateRepositoryNameOutput) => void
  ): void;
  public updateRepositoryName(
    args: UpdateRepositoryNameInput,
    cb?: (err: any, data?: UpdateRepositoryNameOutput) => void
  ): Promise<UpdateRepositoryNameOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateRepositoryNameCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
