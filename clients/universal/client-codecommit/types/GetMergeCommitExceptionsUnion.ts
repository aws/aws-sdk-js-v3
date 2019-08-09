import { RepositoryNameRequiredException } from "./RepositoryNameRequiredException";
import { InvalidRepositoryNameException } from "./InvalidRepositoryNameException";
import { RepositoryDoesNotExistException } from "./RepositoryDoesNotExistException";
import { CommitRequiredException } from "./CommitRequiredException";
import { InvalidCommitException } from "./InvalidCommitException";
import { CommitDoesNotExistException } from "./CommitDoesNotExistException";
import { InvalidConflictDetailLevelException } from "./InvalidConflictDetailLevelException";
import { InvalidConflictResolutionStrategyException } from "./InvalidConflictResolutionStrategyException";
import { EncryptionIntegrityChecksFailedException } from "./EncryptionIntegrityChecksFailedException";
import { EncryptionKeyAccessDeniedException } from "./EncryptionKeyAccessDeniedException";
import { EncryptionKeyDisabledException } from "./EncryptionKeyDisabledException";
import { EncryptionKeyNotFoundException } from "./EncryptionKeyNotFoundException";
import { EncryptionKeyUnavailableException } from "./EncryptionKeyUnavailableException";
export type GetMergeCommitExceptionsUnion =
  | RepositoryNameRequiredException
  | InvalidRepositoryNameException
  | RepositoryDoesNotExistException
  | CommitRequiredException
  | InvalidCommitException
  | CommitDoesNotExistException
  | InvalidConflictDetailLevelException
  | InvalidConflictResolutionStrategyException
  | EncryptionIntegrityChecksFailedException
  | EncryptionKeyAccessDeniedException
  | EncryptionKeyDisabledException
  | EncryptionKeyNotFoundException
  | EncryptionKeyUnavailableException;
