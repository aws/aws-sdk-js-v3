import { UpdateDefaultBranchInput } from "./UpdateDefaultBranchInput";
import { UpdateDefaultBranchOutput } from "./UpdateDefaultBranchOutput";
import { RepositoryNameRequiredException } from "./RepositoryNameRequiredException";
import { RepositoryDoesNotExistException } from "./RepositoryDoesNotExistException";
import { InvalidRepositoryNameException } from "./InvalidRepositoryNameException";
import { BranchNameRequiredException } from "./BranchNameRequiredException";
import { InvalidBranchNameException } from "./InvalidBranchNameException";
import { BranchDoesNotExistException } from "./BranchDoesNotExistException";
import { EncryptionIntegrityChecksFailedException } from "./EncryptionIntegrityChecksFailedException";
import { EncryptionKeyAccessDeniedException } from "./EncryptionKeyAccessDeniedException";
import { EncryptionKeyDisabledException } from "./EncryptionKeyDisabledException";
import { EncryptionKeyNotFoundException } from "./EncryptionKeyNotFoundException";
import { EncryptionKeyUnavailableException } from "./EncryptionKeyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
