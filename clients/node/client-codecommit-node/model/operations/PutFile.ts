import { PutFileInput } from "../shapes/PutFileInput";
import { PutFileOutput } from "../shapes/PutFileOutput";
import { RepositoryNameRequiredException } from "../shapes/RepositoryNameRequiredException";
import { InvalidRepositoryNameException } from "../shapes/InvalidRepositoryNameException";
import { RepositoryDoesNotExistException } from "../shapes/RepositoryDoesNotExistException";
import { ParentCommitIdRequiredException } from "../shapes/ParentCommitIdRequiredException";
import { InvalidParentCommitIdException } from "../shapes/InvalidParentCommitIdException";
import { ParentCommitDoesNotExistException } from "../shapes/ParentCommitDoesNotExistException";
import { ParentCommitIdOutdatedException } from "../shapes/ParentCommitIdOutdatedException";
import { FileContentRequiredException } from "../shapes/FileContentRequiredException";
import { FileContentSizeLimitExceededException } from "../shapes/FileContentSizeLimitExceededException";
import { FolderContentSizeLimitExceededException } from "../shapes/FolderContentSizeLimitExceededException";
import { PathRequiredException } from "../shapes/PathRequiredException";
import { InvalidPathException } from "../shapes/InvalidPathException";
import { BranchNameRequiredException } from "../shapes/BranchNameRequiredException";
import { InvalidBranchNameException } from "../shapes/InvalidBranchNameException";
import { BranchDoesNotExistException } from "../shapes/BranchDoesNotExistException";
import { BranchNameIsTagNameException } from "../shapes/BranchNameIsTagNameException";
import { InvalidFileModeException } from "../shapes/InvalidFileModeException";
import { NameLengthExceededException } from "../shapes/NameLengthExceededException";
import { InvalidEmailException } from "../shapes/InvalidEmailException";
import { CommitMessageLengthExceededException } from "../shapes/CommitMessageLengthExceededException";
import { InvalidDeletionParameterException } from "../shapes/InvalidDeletionParameterException";
import { EncryptionIntegrityChecksFailedException } from "../shapes/EncryptionIntegrityChecksFailedException";
import { EncryptionKeyAccessDeniedException } from "../shapes/EncryptionKeyAccessDeniedException";
import { EncryptionKeyDisabledException } from "../shapes/EncryptionKeyDisabledException";
import { EncryptionKeyNotFoundException } from "../shapes/EncryptionKeyNotFoundException";
import { EncryptionKeyUnavailableException } from "../shapes/EncryptionKeyUnavailableException";
import { SameFileContentException } from "../shapes/SameFileContentException";
import { FileNameConflictsWithDirectoryNameException } from "../shapes/FileNameConflictsWithDirectoryNameException";
import { DirectoryNameConflictsWithFileNameException } from "../shapes/DirectoryNameConflictsWithFileNameException";
import { FilePathConflictsWithSubmodulePathException } from "../shapes/FilePathConflictsWithSubmodulePathException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutFile: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutFile",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutFileInput
  },
  output: {
    shape: PutFileOutput
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
      shape: FileContentRequiredException
    },
    {
      shape: FileContentSizeLimitExceededException
    },
    {
      shape: FolderContentSizeLimitExceededException
    },
    {
      shape: PathRequiredException
    },
    {
      shape: InvalidPathException
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
      shape: InvalidDeletionParameterException
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
      shape: SameFileContentException
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
