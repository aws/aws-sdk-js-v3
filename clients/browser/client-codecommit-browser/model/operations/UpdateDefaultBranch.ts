import { UpdateDefaultBranchInput } from "../shapes/UpdateDefaultBranchInput";
import { UpdateDefaultBranchOutput } from "../shapes/UpdateDefaultBranchOutput";
import { RepositoryNameRequiredException } from "../shapes/RepositoryNameRequiredException";
import { RepositoryDoesNotExistException } from "../shapes/RepositoryDoesNotExistException";
import { InvalidRepositoryNameException } from "../shapes/InvalidRepositoryNameException";
import { BranchNameRequiredException } from "../shapes/BranchNameRequiredException";
import { InvalidBranchNameException } from "../shapes/InvalidBranchNameException";
import { BranchDoesNotExistException } from "../shapes/BranchDoesNotExistException";
import { EncryptionIntegrityChecksFailedException } from "../shapes/EncryptionIntegrityChecksFailedException";
import { EncryptionKeyAccessDeniedException } from "../shapes/EncryptionKeyAccessDeniedException";
import { EncryptionKeyDisabledException } from "../shapes/EncryptionKeyDisabledException";
import { EncryptionKeyNotFoundException } from "../shapes/EncryptionKeyNotFoundException";
import { EncryptionKeyUnavailableException } from "../shapes/EncryptionKeyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateDefaultBranch: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateDefaultBranch",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateDefaultBranchInput
  },
  output: {
    shape: UpdateDefaultBranchOutput
  },
  errors: [
    {
      shape: RepositoryNameRequiredException
    },
    {
      shape: RepositoryDoesNotExistException
    },
    {
      shape: InvalidRepositoryNameException
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
