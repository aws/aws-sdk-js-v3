import { DeleteFileInput } from "../shapes/DeleteFileInput";
import { DeleteFileOutput } from "../shapes/DeleteFileOutput";
import { RepositoryNameRequiredException } from "../shapes/RepositoryNameRequiredException";
import { InvalidRepositoryNameException } from "../shapes/InvalidRepositoryNameException";
import { RepositoryDoesNotExistException } from "../shapes/RepositoryDoesNotExistException";
import { ParentCommitIdRequiredException } from "../shapes/ParentCommitIdRequiredException";
import { InvalidParentCommitIdException } from "../shapes/InvalidParentCommitIdException";
import { ParentCommitDoesNotExistException } from "../shapes/ParentCommitDoesNotExistException";
import { ParentCommitIdOutdatedException } from "../shapes/ParentCommitIdOutdatedException";
import { PathRequiredException } from "../shapes/PathRequiredException";
import { InvalidPathException } from "../shapes/InvalidPathException";
import { FileDoesNotExistException } from "../shapes/FileDoesNotExistException";
import { BranchNameRequiredException } from "../shapes/BranchNameRequiredException";
import { InvalidBranchNameException } from "../shapes/InvalidBranchNameException";
import { BranchDoesNotExistException } from "../shapes/BranchDoesNotExistException";
import { BranchNameIsTagNameException } from "../shapes/BranchNameIsTagNameException";
import { NameLengthExceededException } from "../shapes/NameLengthExceededException";
import { InvalidEmailException } from "../shapes/InvalidEmailException";
import { CommitMessageLengthExceededException } from "../shapes/CommitMessageLengthExceededException";
import { EncryptionIntegrityChecksFailedException } from "../shapes/EncryptionIntegrityChecksFailedException";
import { EncryptionKeyAccessDeniedException } from "../shapes/EncryptionKeyAccessDeniedException";
import { EncryptionKeyDisabledException } from "../shapes/EncryptionKeyDisabledException";
import { EncryptionKeyNotFoundException } from "../shapes/EncryptionKeyNotFoundException";
import { EncryptionKeyUnavailableException } from "../shapes/EncryptionKeyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteFile: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteFile",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteFileInput
  },
  output: {
    shape: DeleteFileOutput
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
      shape: PathRequiredException
    },
    {
      shape: InvalidPathException
    },
    {
      shape: FileDoesNotExistException
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
    }
  ]
};
