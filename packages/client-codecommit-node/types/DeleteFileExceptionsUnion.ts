import { RepositoryNameRequiredException } from "./RepositoryNameRequiredException";
import { InvalidRepositoryNameException } from "./InvalidRepositoryNameException";
import { RepositoryDoesNotExistException } from "./RepositoryDoesNotExistException";
import { ParentCommitIdRequiredException } from "./ParentCommitIdRequiredException";
import { InvalidParentCommitIdException } from "./InvalidParentCommitIdException";
import { ParentCommitDoesNotExistException } from "./ParentCommitDoesNotExistException";
import { ParentCommitIdOutdatedException } from "./ParentCommitIdOutdatedException";
import { PathRequiredException } from "./PathRequiredException";
import { InvalidPathException } from "./InvalidPathException";
import { FileDoesNotExistException } from "./FileDoesNotExistException";
import { BranchNameRequiredException } from "./BranchNameRequiredException";
import { InvalidBranchNameException } from "./InvalidBranchNameException";
import { BranchDoesNotExistException } from "./BranchDoesNotExistException";
import { BranchNameIsTagNameException } from "./BranchNameIsTagNameException";
import { NameLengthExceededException } from "./NameLengthExceededException";
import { InvalidEmailException } from "./InvalidEmailException";
import { CommitMessageLengthExceededException } from "./CommitMessageLengthExceededException";
import { EncryptionIntegrityChecksFailedException } from "./EncryptionIntegrityChecksFailedException";
import { EncryptionKeyAccessDeniedException } from "./EncryptionKeyAccessDeniedException";
import { EncryptionKeyDisabledException } from "./EncryptionKeyDisabledException";
import { EncryptionKeyNotFoundException } from "./EncryptionKeyNotFoundException";
import { EncryptionKeyUnavailableException } from "./EncryptionKeyUnavailableException";
export type DeleteFileExceptionsUnion =
  | RepositoryNameRequiredException
  | InvalidRepositoryNameException
  | RepositoryDoesNotExistException
  | ParentCommitIdRequiredException
  | InvalidParentCommitIdException
  | ParentCommitDoesNotExistException
  | ParentCommitIdOutdatedException
  | PathRequiredException
  | InvalidPathException
  | FileDoesNotExistException
  | BranchNameRequiredException
  | InvalidBranchNameException
  | BranchDoesNotExistException
  | BranchNameIsTagNameException
  | NameLengthExceededException
  | InvalidEmailException
  | CommitMessageLengthExceededException
  | EncryptionIntegrityChecksFailedException
  | EncryptionKeyAccessDeniedException
  | EncryptionKeyDisabledException
  | EncryptionKeyNotFoundException
  | EncryptionKeyUnavailableException;
