import { PullRequestAlreadyClosedException } from "./PullRequestAlreadyClosedException";
import { PullRequestDoesNotExistException } from "./PullRequestDoesNotExistException";
import { PullRequestIdRequiredException } from "./PullRequestIdRequiredException";
import { InvalidPullRequestIdException } from "./InvalidPullRequestIdException";
import { InvalidCommitIdException } from "./InvalidCommitIdException";
import { ManualMergeRequiredException } from "./ManualMergeRequiredException";
import { TipOfSourceReferenceIsDifferentException } from "./TipOfSourceReferenceIsDifferentException";
import { TipsDivergenceExceededException } from "./TipsDivergenceExceededException";
import { NameLengthExceededException } from "./NameLengthExceededException";
import { InvalidEmailException } from "./InvalidEmailException";
import { CommitMessageLengthExceededException } from "./CommitMessageLengthExceededException";
import { InvalidConflictDetailLevelException } from "./InvalidConflictDetailLevelException";
import { InvalidConflictResolutionStrategyException } from "./InvalidConflictResolutionStrategyException";
import { InvalidConflictResolutionException } from "./InvalidConflictResolutionException";
import { ReplacementTypeRequiredException } from "./ReplacementTypeRequiredException";
import { InvalidReplacementTypeException } from "./InvalidReplacementTypeException";
import { MultipleConflictResolutionEntriesException } from "./MultipleConflictResolutionEntriesException";
import { ReplacementContentRequiredException } from "./ReplacementContentRequiredException";
import { MaximumConflictResolutionEntriesExceededException } from "./MaximumConflictResolutionEntriesExceededException";
import { PathRequiredException } from "./PathRequiredException";
import { InvalidPathException } from "./InvalidPathException";
import { InvalidFileModeException } from "./InvalidFileModeException";
import { InvalidReplacementContentException } from "./InvalidReplacementContentException";
import { FileContentSizeLimitExceededException } from "./FileContentSizeLimitExceededException";
import { FolderContentSizeLimitExceededException } from "./FolderContentSizeLimitExceededException";
import { MaximumFileContentToLoadExceededException } from "./MaximumFileContentToLoadExceededException";
import { MaximumItemsToCompareExceededException } from "./MaximumItemsToCompareExceededException";
import { RepositoryNameRequiredException } from "./RepositoryNameRequiredException";
import { InvalidRepositoryNameException } from "./InvalidRepositoryNameException";
import { RepositoryDoesNotExistException } from "./RepositoryDoesNotExistException";
import { RepositoryNotAssociatedWithPullRequestException } from "./RepositoryNotAssociatedWithPullRequestException";
import { ConcurrentReferenceUpdateException } from "./ConcurrentReferenceUpdateException";
import { EncryptionIntegrityChecksFailedException } from "./EncryptionIntegrityChecksFailedException";
import { EncryptionKeyAccessDeniedException } from "./EncryptionKeyAccessDeniedException";
import { EncryptionKeyDisabledException } from "./EncryptionKeyDisabledException";
import { EncryptionKeyNotFoundException } from "./EncryptionKeyNotFoundException";
import { EncryptionKeyUnavailableException } from "./EncryptionKeyUnavailableException";
export type MergePullRequestByThreeWayExceptionsUnion =
  | PullRequestAlreadyClosedException
  | PullRequestDoesNotExistException
  | PullRequestIdRequiredException
  | InvalidPullRequestIdException
  | InvalidCommitIdException
  | ManualMergeRequiredException
  | TipOfSourceReferenceIsDifferentException
  | TipsDivergenceExceededException
  | NameLengthExceededException
  | InvalidEmailException
  | CommitMessageLengthExceededException
  | InvalidConflictDetailLevelException
  | InvalidConflictResolutionStrategyException
  | InvalidConflictResolutionException
  | ReplacementTypeRequiredException
  | InvalidReplacementTypeException
  | MultipleConflictResolutionEntriesException
  | ReplacementContentRequiredException
  | MaximumConflictResolutionEntriesExceededException
  | PathRequiredException
  | InvalidPathException
  | InvalidFileModeException
  | InvalidReplacementContentException
  | FileContentSizeLimitExceededException
  | FolderContentSizeLimitExceededException
  | MaximumFileContentToLoadExceededException
  | MaximumItemsToCompareExceededException
  | RepositoryNameRequiredException
  | InvalidRepositoryNameException
  | RepositoryDoesNotExistException
  | RepositoryNotAssociatedWithPullRequestException
  | ConcurrentReferenceUpdateException
  | EncryptionIntegrityChecksFailedException
  | EncryptionKeyAccessDeniedException
  | EncryptionKeyDisabledException
  | EncryptionKeyNotFoundException
  | EncryptionKeyUnavailableException;
