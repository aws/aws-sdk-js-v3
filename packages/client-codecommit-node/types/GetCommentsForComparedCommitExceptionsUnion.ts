import { RepositoryNameRequiredException } from "./RepositoryNameRequiredException";
import { RepositoryDoesNotExistException } from "./RepositoryDoesNotExistException";
import { InvalidRepositoryNameException } from "./InvalidRepositoryNameException";
import { CommitIdRequiredException } from "./CommitIdRequiredException";
import { InvalidCommitIdException } from "./InvalidCommitIdException";
import { CommitDoesNotExistException } from "./CommitDoesNotExistException";
import { InvalidMaxResultsException } from "./InvalidMaxResultsException";
import { InvalidContinuationTokenException } from "./InvalidContinuationTokenException";
import { EncryptionIntegrityChecksFailedException } from "./EncryptionIntegrityChecksFailedException";
import { EncryptionKeyAccessDeniedException } from "./EncryptionKeyAccessDeniedException";
import { EncryptionKeyDisabledException } from "./EncryptionKeyDisabledException";
import { EncryptionKeyNotFoundException } from "./EncryptionKeyNotFoundException";
import { EncryptionKeyUnavailableException } from "./EncryptionKeyUnavailableException";
export type GetCommentsForComparedCommitExceptionsUnion =
  | RepositoryNameRequiredException
  | RepositoryDoesNotExistException
  | InvalidRepositoryNameException
  | CommitIdRequiredException
  | InvalidCommitIdException
  | CommitDoesNotExistException
  | InvalidMaxResultsException
  | InvalidContinuationTokenException
  | EncryptionIntegrityChecksFailedException
  | EncryptionKeyAccessDeniedException
  | EncryptionKeyDisabledException
  | EncryptionKeyNotFoundException
  | EncryptionKeyUnavailableException;
