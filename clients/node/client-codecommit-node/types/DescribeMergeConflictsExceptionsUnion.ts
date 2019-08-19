import { RepositoryNameRequiredException } from "./RepositoryNameRequiredException";
import { InvalidRepositoryNameException } from "./InvalidRepositoryNameException";
import { RepositoryDoesNotExistException } from "./RepositoryDoesNotExistException";
import { MergeOptionRequiredException } from "./MergeOptionRequiredException";
import { InvalidMergeOptionException } from "./InvalidMergeOptionException";
import { InvalidContinuationTokenException } from "./InvalidContinuationTokenException";
import { CommitRequiredException } from "./CommitRequiredException";
import { CommitDoesNotExistException } from "./CommitDoesNotExistException";
import { InvalidCommitException } from "./InvalidCommitException";
import { TipsDivergenceExceededException } from "./TipsDivergenceExceededException";
import { PathRequiredException } from "./PathRequiredException";
import { InvalidPathException } from "./InvalidPathException";
import { FileDoesNotExistException } from "./FileDoesNotExistException";
import { InvalidMaxMergeHunksException } from "./InvalidMaxMergeHunksException";
import { InvalidConflictDetailLevelException } from "./InvalidConflictDetailLevelException";
import { InvalidConflictResolutionStrategyException } from "./InvalidConflictResolutionStrategyException";
import { MaximumFileContentToLoadExceededException } from "./MaximumFileContentToLoadExceededException";
import { MaximumItemsToCompareExceededException } from "./MaximumItemsToCompareExceededException";
import { EncryptionIntegrityChecksFailedException } from "./EncryptionIntegrityChecksFailedException";
import { EncryptionKeyAccessDeniedException } from "./EncryptionKeyAccessDeniedException";
import { EncryptionKeyDisabledException } from "./EncryptionKeyDisabledException";
import { EncryptionKeyNotFoundException } from "./EncryptionKeyNotFoundException";
import { EncryptionKeyUnavailableException } from "./EncryptionKeyUnavailableException";
export type DescribeMergeConflictsExceptionsUnion =
  | RepositoryNameRequiredException
  | InvalidRepositoryNameException
  | RepositoryDoesNotExistException
  | MergeOptionRequiredException
  | InvalidMergeOptionException
  | InvalidContinuationTokenException
  | CommitRequiredException
  | CommitDoesNotExistException
  | InvalidCommitException
  | TipsDivergenceExceededException
  | PathRequiredException
  | InvalidPathException
  | FileDoesNotExistException
  | InvalidMaxMergeHunksException
  | InvalidConflictDetailLevelException
  | InvalidConflictResolutionStrategyException
  | MaximumFileContentToLoadExceededException
  | MaximumItemsToCompareExceededException
  | EncryptionIntegrityChecksFailedException
  | EncryptionKeyAccessDeniedException
  | EncryptionKeyDisabledException
  | EncryptionKeyNotFoundException
  | EncryptionKeyUnavailableException;
