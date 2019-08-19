import { CreateCommitInput } from "../shapes/CreateCommitInput";
import { CreateCommitOutput } from "../shapes/CreateCommitOutput";
import { RepositoryNameRequiredException } from "../shapes/RepositoryNameRequiredException";
import { InvalidRepositoryNameException } from "../shapes/InvalidRepositoryNameException";
import { RepositoryDoesNotExistException } from "../shapes/RepositoryDoesNotExistException";
import { ParentCommitIdRequiredException } from "../shapes/ParentCommitIdRequiredException";
import { InvalidParentCommitIdException } from "../shapes/InvalidParentCommitIdException";
import { ParentCommitDoesNotExistException } from "../shapes/ParentCommitDoesNotExistException";
import { ParentCommitIdOutdatedException } from "../shapes/ParentCommitIdOutdatedException";
import { BranchNameRequiredException } from "../shapes/BranchNameRequiredException";
import { InvalidBranchNameException } from "../shapes/InvalidBranchNameException";
import { BranchDoesNotExistException } from "../shapes/BranchDoesNotExistException";
import { BranchNameIsTagNameException } from "../shapes/BranchNameIsTagNameException";
import { FileEntryRequiredException } from "../shapes/FileEntryRequiredException";
import { MaximumFileEntriesExceededException } from "../shapes/MaximumFileEntriesExceededException";
import { PutFileEntryConflictException } from "../shapes/PutFileEntryConflictException";
import { SourceFileOrContentRequiredException } from "../shapes/SourceFileOrContentRequiredException";
import { FileContentAndSourceFileSpecifiedException } from "../shapes/FileContentAndSourceFileSpecifiedException";
import { PathRequiredException } from "../shapes/PathRequiredException";
import { InvalidPathException } from "../shapes/InvalidPathException";
import { SamePathRequestException } from "../shapes/SamePathRequestException";
import { FileDoesNotExistException } from "../shapes/FileDoesNotExistException";
import { FileContentSizeLimitExceededException } from "../shapes/FileContentSizeLimitExceededException";
import { FolderContentSizeLimitExceededException } from "../shapes/FolderContentSizeLimitExceededException";
import { InvalidDeletionParameterException } from "../shapes/InvalidDeletionParameterException";
import { RestrictedSourceFileException } from "../shapes/RestrictedSourceFileException";
import { FileModeRequiredException } from "../shapes/FileModeRequiredException";
import { InvalidFileModeException } from "../shapes/InvalidFileModeException";
import { NameLengthExceededException } from "../shapes/NameLengthExceededException";
import { InvalidEmailException } from "../shapes/InvalidEmailException";
import { CommitMessageLengthExceededException } from "../shapes/CommitMessageLengthExceededException";
import { EncryptionIntegrityChecksFailedException } from "../shapes/EncryptionIntegrityChecksFailedException";
import { EncryptionKeyAccessDeniedException } from "../shapes/EncryptionKeyAccessDeniedException";
import { EncryptionKeyDisabledException } from "../shapes/EncryptionKeyDisabledException";
import { EncryptionKeyNotFoundException } from "../shapes/EncryptionKeyNotFoundException";
import { EncryptionKeyUnavailableException } from "../shapes/EncryptionKeyUnavailableException";
import { NoChangeException } from "../shapes/NoChangeException";
import { FileNameConflictsWithDirectoryNameException } from "../shapes/FileNameConflictsWithDirectoryNameException";
import { DirectoryNameConflictsWithFileNameException } from "../shapes/DirectoryNameConflictsWithFileNameException";
import { FilePathConflictsWithSubmodulePathException } from "../shapes/FilePathConflictsWithSubmodulePathException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
