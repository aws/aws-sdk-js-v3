import { RepositoryNameRequiredException } from "./RepositoryNameRequiredException";
import { InvalidRepositoryNameException } from "./InvalidRepositoryNameException";
import { RepositoryDoesNotExistException } from "./RepositoryDoesNotExistException";
import { TipsDivergenceExceededException } from "./TipsDivergenceExceededException";
import { CommitRequiredException } from "./CommitRequiredException";
import { InvalidCommitException } from "./InvalidCommitException";
import { CommitDoesNotExistException } from "./CommitDoesNotExistException";
import { InvalidTargetBranchException } from "./InvalidTargetBranchException";
import { InvalidBranchNameException } from "./InvalidBranchNameException";
import { BranchNameRequiredException } from "./BranchNameRequiredException";
import { BranchNameIsTagNameException } from "./BranchNameIsTagNameException";
import { BranchDoesNotExistException } from "./BranchDoesNotExistException";
import { ManualMergeRequiredException } from "./ManualMergeRequiredException";
import { InvalidConflictDetailLevelException } from "./InvalidConflictDetailLevelException";
import { InvalidConflictResolutionStrategyException } from "./InvalidConflictResolutionStrategyException";
import { InvalidConflictResolutionException } from "./InvalidConflictResolutionException";
import { MaximumConflictResolutionEntriesExceededException } from "./MaximumConflictResolutionEntriesExceededException";
import { MultipleConflictResolutionEntriesException } from "./MultipleConflictResolutionEntriesException";
import { ReplacementTypeRequiredException } from "./ReplacementTypeRequiredException";
import { InvalidReplacementTypeException } from "./InvalidReplacementTypeException";
import { ReplacementContentRequiredException } from "./ReplacementContentRequiredException";
import { InvalidReplacementContentException } from "./InvalidReplacementContentException";
import { PathRequiredException } from "./PathRequiredException";
import { InvalidPathException } from "./InvalidPathException";
import { FileContentSizeLimitExceededException } from "./FileContentSizeLimitExceededException";
import { FolderContentSizeLimitExceededException } from "./FolderContentSizeLimitExceededException";
import { MaximumFileContentToLoadExceededException } from "./MaximumFileContentToLoadExceededException";
import { MaximumItemsToCompareExceededException } from "./MaximumItemsToCompareExceededException";
import { FileModeRequiredException } from "./FileModeRequiredException";
import { InvalidFileModeException } from "./InvalidFileModeException";
import { NameLengthExceededException } from "./NameLengthExceededException";
import { InvalidEmailException } from "./InvalidEmailException";
import { CommitMessageLengthExceededException } from "./CommitMessageLengthExceededException";
import { ConcurrentReferenceUpdateException } from "./ConcurrentReferenceUpdateException";
import { EncryptionIntegrityChecksFailedException } from "./EncryptionIntegrityChecksFailedException";
import { EncryptionKeyAccessDeniedException } from "./EncryptionKeyAccessDeniedException";
import { EncryptionKeyDisabledException } from "./EncryptionKeyDisabledException";
import { EncryptionKeyNotFoundException } from "./EncryptionKeyNotFoundException";
import { EncryptionKeyUnavailableException } from "./EncryptionKeyUnavailableException";
export type MergeBranchesBySquashExceptionsUnion =
  | RepositoryNameRequiredException
  | InvalidRepositoryNameException
  | RepositoryDoesNotExistException
  | TipsDivergenceExceededException
  | CommitRequiredException
  | InvalidCommitException
  | CommitDoesNotExistException
  | InvalidTargetBranchException
  | InvalidBranchNameException
  | BranchNameRequiredException
  | BranchNameIsTagNameException
  | BranchDoesNotExistException
  | ManualMergeRequiredException
  | InvalidConflictDetailLevelException
  | InvalidConflictResolutionStrategyException
  | InvalidConflictResolutionException
  | MaximumConflictResolutionEntriesExceededException
  | MultipleConflictResolutionEntriesException
  | ReplacementTypeRequiredException
  | InvalidReplacementTypeException
  | ReplacementContentRequiredException
  | InvalidReplacementContentException
  | PathRequiredException
  | InvalidPathException
  | FileContentSizeLimitExceededException
  | FolderContentSizeLimitExceededException
  | MaximumFileContentToLoadExceededException
  | MaximumItemsToCompareExceededException
  | FileModeRequiredException
  | InvalidFileModeException
  | NameLengthExceededException
  | InvalidEmailException
  | CommitMessageLengthExceededException
  | ConcurrentReferenceUpdateException
  | EncryptionIntegrityChecksFailedException
  | EncryptionKeyAccessDeniedException
  | EncryptionKeyDisabledException
  | EncryptionKeyNotFoundException
  | EncryptionKeyUnavailableException;
