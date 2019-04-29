import { PutFileInput } from "./PutFileInput";
import { PutFileOutput } from "./PutFileOutput";
import { RepositoryNameRequiredException } from "./RepositoryNameRequiredException";
import { InvalidRepositoryNameException } from "./InvalidRepositoryNameException";
import { RepositoryDoesNotExistException } from "./RepositoryDoesNotExistException";
import { ParentCommitIdRequiredException } from "./ParentCommitIdRequiredException";
import { InvalidParentCommitIdException } from "./InvalidParentCommitIdException";
import { ParentCommitDoesNotExistException } from "./ParentCommitDoesNotExistException";
import { ParentCommitIdOutdatedException } from "./ParentCommitIdOutdatedException";
import { FileContentRequiredException } from "./FileContentRequiredException";
import { FileContentSizeLimitExceededException } from "./FileContentSizeLimitExceededException";
import { PathRequiredException } from "./PathRequiredException";
import { InvalidPathException } from "./InvalidPathException";
import { BranchNameRequiredException } from "./BranchNameRequiredException";
import { InvalidBranchNameException } from "./InvalidBranchNameException";
import { BranchDoesNotExistException } from "./BranchDoesNotExistException";
import { BranchNameIsTagNameException } from "./BranchNameIsTagNameException";
import { InvalidFileModeException } from "./InvalidFileModeException";
import { NameLengthExceededException } from "./NameLengthExceededException";
import { InvalidEmailException } from "./InvalidEmailException";
import { CommitMessageLengthExceededException } from "./CommitMessageLengthExceededException";
import { InvalidDeletionParameterException } from "./InvalidDeletionParameterException";
import { EncryptionIntegrityChecksFailedException } from "./EncryptionIntegrityChecksFailedException";
import { EncryptionKeyAccessDeniedException } from "./EncryptionKeyAccessDeniedException";
import { EncryptionKeyDisabledException } from "./EncryptionKeyDisabledException";
import { EncryptionKeyNotFoundException } from "./EncryptionKeyNotFoundException";
import { EncryptionKeyUnavailableException } from "./EncryptionKeyUnavailableException";
import { SameFileContentException } from "./SameFileContentException";
import { FileNameConflictsWithDirectoryNameException } from "./FileNameConflictsWithDirectoryNameException";
import { DirectoryNameConflictsWithFileNameException } from "./DirectoryNameConflictsWithFileNameException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
    }
  ]
};
