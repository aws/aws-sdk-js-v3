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
import { InvalidMaxConflictFilesException } from "./InvalidMaxConflictFilesException";
import { InvalidConflictDetailLevelException } from "./InvalidConflictDetailLevelException";
import { InvalidDestinationCommitSpecifierException } from "./InvalidDestinationCommitSpecifierException";
import { InvalidSourceCommitSpecifierException } from "./InvalidSourceCommitSpecifierException";
import { InvalidConflictResolutionStrategyException } from "./InvalidConflictResolutionStrategyException";
import { MaximumFileContentToLoadExceededException } from "./MaximumFileContentToLoadExceededException";
import { MaximumItemsToCompareExceededException } from "./MaximumItemsToCompareExceededException";
import { EncryptionIntegrityChecksFailedException } from "./EncryptionIntegrityChecksFailedException";
import { EncryptionKeyAccessDeniedException } from "./EncryptionKeyAccessDeniedException";
import { EncryptionKeyDisabledException } from "./EncryptionKeyDisabledException";
import { EncryptionKeyNotFoundException } from "./EncryptionKeyNotFoundException";
import { EncryptionKeyUnavailableException } from "./EncryptionKeyUnavailableException";
export type GetMergeConflictsExceptionsUnion =
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
  | InvalidMaxConflictFilesException
  | InvalidConflictDetailLevelException
  | InvalidDestinationCommitSpecifierException
  | InvalidSourceCommitSpecifierException
  | InvalidConflictResolutionStrategyException
  | MaximumFileContentToLoadExceededException
  | MaximumItemsToCompareExceededException
  | EncryptionIntegrityChecksFailedException
  | EncryptionKeyAccessDeniedException
  | EncryptionKeyDisabledException
  | EncryptionKeyNotFoundException
  | EncryptionKeyUnavailableException;
