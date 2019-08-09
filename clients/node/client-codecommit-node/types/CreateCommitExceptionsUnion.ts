import { RepositoryNameRequiredException } from "./RepositoryNameRequiredException";
import { InvalidRepositoryNameException } from "./InvalidRepositoryNameException";
import { RepositoryDoesNotExistException } from "./RepositoryDoesNotExistException";
import { ParentCommitIdRequiredException } from "./ParentCommitIdRequiredException";
import { InvalidParentCommitIdException } from "./InvalidParentCommitIdException";
import { ParentCommitDoesNotExistException } from "./ParentCommitDoesNotExistException";
import { ParentCommitIdOutdatedException } from "./ParentCommitIdOutdatedException";
import { BranchNameRequiredException } from "./BranchNameRequiredException";
import { InvalidBranchNameException } from "./InvalidBranchNameException";
import { BranchDoesNotExistException } from "./BranchDoesNotExistException";
import { BranchNameIsTagNameException } from "./BranchNameIsTagNameException";
import { FileEntryRequiredException } from "./FileEntryRequiredException";
import { MaximumFileEntriesExceededException } from "./MaximumFileEntriesExceededException";
import { PutFileEntryConflictException } from "./PutFileEntryConflictException";
import { SourceFileOrContentRequiredException } from "./SourceFileOrContentRequiredException";
import { FileContentAndSourceFileSpecifiedException } from "./FileContentAndSourceFileSpecifiedException";
import { PathRequiredException } from "./PathRequiredException";
import { InvalidPathException } from "./InvalidPathException";
import { SamePathRequestException } from "./SamePathRequestException";
import { FileDoesNotExistException } from "./FileDoesNotExistException";
import { FileContentSizeLimitExceededException } from "./FileContentSizeLimitExceededException";
import { FolderContentSizeLimitExceededException } from "./FolderContentSizeLimitExceededException";
import { InvalidDeletionParameterException } from "./InvalidDeletionParameterException";
import { RestrictedSourceFileException } from "./RestrictedSourceFileException";
import { FileModeRequiredException } from "./FileModeRequiredException";
import { InvalidFileModeException } from "./InvalidFileModeException";
import { NameLengthExceededException } from "./NameLengthExceededException";
import { InvalidEmailException } from "./InvalidEmailException";
import { CommitMessageLengthExceededException } from "./CommitMessageLengthExceededException";
import { EncryptionIntegrityChecksFailedException } from "./EncryptionIntegrityChecksFailedException";
import { EncryptionKeyAccessDeniedException } from "./EncryptionKeyAccessDeniedException";
import { EncryptionKeyDisabledException } from "./EncryptionKeyDisabledException";
import { EncryptionKeyNotFoundException } from "./EncryptionKeyNotFoundException";
import { EncryptionKeyUnavailableException } from "./EncryptionKeyUnavailableException";
import { NoChangeException } from "./NoChangeException";
import { FileNameConflictsWithDirectoryNameException } from "./FileNameConflictsWithDirectoryNameException";
import { DirectoryNameConflictsWithFileNameException } from "./DirectoryNameConflictsWithFileNameException";
import { FilePathConflictsWithSubmodulePathException } from "./FilePathConflictsWithSubmodulePathException";
export type CreateCommitExceptionsUnion =
  | RepositoryNameRequiredException
  | InvalidRepositoryNameException
  | RepositoryDoesNotExistException
  | ParentCommitIdRequiredException
  | InvalidParentCommitIdException
  | ParentCommitDoesNotExistException
  | ParentCommitIdOutdatedException
  | BranchNameRequiredException
  | InvalidBranchNameException
  | BranchDoesNotExistException
  | BranchNameIsTagNameException
  | FileEntryRequiredException
  | MaximumFileEntriesExceededException
  | PutFileEntryConflictException
  | SourceFileOrContentRequiredException
  | FileContentAndSourceFileSpecifiedException
  | PathRequiredException
  | InvalidPathException
  | SamePathRequestException
  | FileDoesNotExistException
  | FileContentSizeLimitExceededException
  | FolderContentSizeLimitExceededException
  | InvalidDeletionParameterException
  | RestrictedSourceFileException
  | FileModeRequiredException
  | InvalidFileModeException
  | NameLengthExceededException
  | InvalidEmailException
  | CommitMessageLengthExceededException
  | EncryptionIntegrityChecksFailedException
  | EncryptionKeyAccessDeniedException
  | EncryptionKeyDisabledException
  | EncryptionKeyNotFoundException
  | EncryptionKeyUnavailableException
  | NoChangeException
  | FileNameConflictsWithDirectoryNameException
  | DirectoryNameConflictsWithFileNameException
  | FilePathConflictsWithSubmodulePathException;
