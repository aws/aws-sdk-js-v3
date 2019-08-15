import { CreateBranchInput } from "../shapes/CreateBranchInput";
import { CreateBranchOutput } from "../shapes/CreateBranchOutput";
import { RepositoryNameRequiredException } from "../shapes/RepositoryNameRequiredException";
import { InvalidRepositoryNameException } from "../shapes/InvalidRepositoryNameException";
import { RepositoryDoesNotExistException } from "../shapes/RepositoryDoesNotExistException";
import { BranchNameRequiredException } from "../shapes/BranchNameRequiredException";
import { BranchNameExistsException } from "../shapes/BranchNameExistsException";
import { InvalidBranchNameException } from "../shapes/InvalidBranchNameException";
import { CommitIdRequiredException } from "../shapes/CommitIdRequiredException";
import { CommitDoesNotExistException } from "../shapes/CommitDoesNotExistException";
import { InvalidCommitIdException } from "../shapes/InvalidCommitIdException";
import { EncryptionIntegrityChecksFailedException } from "../shapes/EncryptionIntegrityChecksFailedException";
import { EncryptionKeyAccessDeniedException } from "../shapes/EncryptionKeyAccessDeniedException";
import { EncryptionKeyDisabledException } from "../shapes/EncryptionKeyDisabledException";
import { EncryptionKeyNotFoundException } from "../shapes/EncryptionKeyNotFoundException";
import { EncryptionKeyUnavailableException } from "../shapes/EncryptionKeyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
