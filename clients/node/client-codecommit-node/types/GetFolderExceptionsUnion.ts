import { RepositoryNameRequiredException } from "./RepositoryNameRequiredException";
import { InvalidRepositoryNameException } from "./InvalidRepositoryNameException";
import { RepositoryDoesNotExistException } from "./RepositoryDoesNotExistException";
import { InvalidCommitException } from "./InvalidCommitException";
import { CommitDoesNotExistException } from "./CommitDoesNotExistException";
import { PathRequiredException } from "./PathRequiredException";
import { InvalidPathException } from "./InvalidPathException";
import { FolderDoesNotExistException } from "./FolderDoesNotExistException";
import { EncryptionIntegrityChecksFailedException } from "./EncryptionIntegrityChecksFailedException";
import { EncryptionKeyAccessDeniedException } from "./EncryptionKeyAccessDeniedException";
import { EncryptionKeyDisabledException } from "./EncryptionKeyDisabledException";
import { EncryptionKeyNotFoundException } from "./EncryptionKeyNotFoundException";
import { EncryptionKeyUnavailableException } from "./EncryptionKeyUnavailableException";
export type GetFolderExceptionsUnion =
  | RepositoryNameRequiredException
  | InvalidRepositoryNameException
  | RepositoryDoesNotExistException
  | InvalidCommitException
  | CommitDoesNotExistException
  | PathRequiredException
  | InvalidPathException
  | FolderDoesNotExistException
  | EncryptionIntegrityChecksFailedException
  | EncryptionKeyAccessDeniedException
  | EncryptionKeyDisabledException
  | EncryptionKeyNotFoundException
  | EncryptionKeyUnavailableException;
