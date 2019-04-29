import { CreateBranchInput } from "./CreateBranchInput";
import { CreateBranchOutput } from "./CreateBranchOutput";
import { RepositoryNameRequiredException } from "./RepositoryNameRequiredException";
import { InvalidRepositoryNameException } from "./InvalidRepositoryNameException";
import { RepositoryDoesNotExistException } from "./RepositoryDoesNotExistException";
import { BranchNameRequiredException } from "./BranchNameRequiredException";
import { BranchNameExistsException } from "./BranchNameExistsException";
import { InvalidBranchNameException } from "./InvalidBranchNameException";
import { CommitIdRequiredException } from "./CommitIdRequiredException";
import { CommitDoesNotExistException } from "./CommitDoesNotExistException";
import { InvalidCommitIdException } from "./InvalidCommitIdException";
import { EncryptionIntegrityChecksFailedException } from "./EncryptionIntegrityChecksFailedException";
import { EncryptionKeyAccessDeniedException } from "./EncryptionKeyAccessDeniedException";
import { EncryptionKeyDisabledException } from "./EncryptionKeyDisabledException";
import { EncryptionKeyNotFoundException } from "./EncryptionKeyNotFoundException";
import { EncryptionKeyUnavailableException } from "./EncryptionKeyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateBranch: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateBranch",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateBranchInput
  },
  output: {
    shape: CreateBranchOutput
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
      shape: BranchNameRequiredException
    },
    {
      shape: BranchNameExistsException
    },
    {
      shape: InvalidBranchNameException
    },
    {
      shape: CommitIdRequiredException
    },
    {
      shape: CommitDoesNotExistException
    },
    {
      shape: InvalidCommitIdException
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
