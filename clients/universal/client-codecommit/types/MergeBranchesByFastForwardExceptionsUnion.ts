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
import { ConcurrentReferenceUpdateException } from "./ConcurrentReferenceUpdateException";
import { EncryptionIntegrityChecksFailedException } from "./EncryptionIntegrityChecksFailedException";
import { EncryptionKeyAccessDeniedException } from "./EncryptionKeyAccessDeniedException";
import { EncryptionKeyDisabledException } from "./EncryptionKeyDisabledException";
import { EncryptionKeyNotFoundException } from "./EncryptionKeyNotFoundException";
import { EncryptionKeyUnavailableException } from "./EncryptionKeyUnavailableException";
export type MergeBranchesByFastForwardExceptionsUnion =
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
  | ConcurrentReferenceUpdateException
  | EncryptionIntegrityChecksFailedException
  | EncryptionKeyAccessDeniedException
  | EncryptionKeyDisabledException
  | EncryptionKeyNotFoundException
  | EncryptionKeyUnavailableException;
