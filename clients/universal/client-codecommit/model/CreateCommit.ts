import { CreateCommitInput } from "./CreateCommitInput";
import { CreateCommitOutput } from "./CreateCommitOutput";
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
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateCommit: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateCommit",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateCommitInput
  },
  output: {
    shape: CreateCommitOutput
  },
  errors: [
    {
      shape: RepositoryNameRequiredException
    },
    {
      shape: InvalidRepositoryNameException
    },
    {
      shape: RepositoryDoesNotExistException
    },
    {
      shape: ParentCommitIdRequiredException
    },
    {
      shape: InvalidParentCommitIdException
    },
    {
      shape: ParentCommitDoesNotExistException
    },
    {
      shape: ParentCommitIdOutdatedException
    },
    {
      shape: BranchNameRequiredException
    },
    {
      shape: InvalidBranchNameException
    },
    {
      shape: BranchDoesNotExistException
    },
    {
      shape: BranchNameIsTagNameException
    },
    {
      shape: FileEntryRequiredException
    },
    {
      shape: MaximumFileEntriesExceededException
    },
    {
      shape: PutFileEntryConflictException
    },
    {
      shape: SourceFileOrContentRequiredException
    },
    {
      shape: FileContentAndSourceFileSpecifiedException
    },
    {
      shape: PathRequiredException
    },
    {
      shape: InvalidPathException
    },
    {
      shape: SamePathRequestException
    },
    {
      shape: FileDoesNotExistException
    },
    {
      shape: FileContentSizeLimitExceededException
    },
    {
      shape: FolderContentSizeLimitExceededException
    },
    {
      shape: InvalidDeletionParameterException
    },
    {
      shape: RestrictedSourceFileException
    },
    {
      shape: FileModeRequiredException
    },
    {
      shape: InvalidFileModeException
    },
    {
      shape: NameLengthExceededException
    },
    {
      shape: InvalidEmailException
    },
    {
      shape: CommitMessageLengthExceededException
    },
    {
      shape: EncryptionIntegrityChecksFailedException
    },
    {
      shape: EncryptionKeyAccessDeniedException
    },
    {
      shape: EncryptionKeyDisabledException
    },
    {
      shape: EncryptionKeyNotFoundException
    },
    {
      shape: EncryptionKeyUnavailableException
    },
    {
      shape: NoChangeException
    },
    {
      shape: FileNameConflictsWithDirectoryNameException
    },
    {
      shape: DirectoryNameConflictsWithFileNameException
    },
    {
      shape: FilePathConflictsWithSubmodulePathException
    }
  ]
};
