import { DeleteBranchInput } from "../shapes/DeleteBranchInput";
import { DeleteBranchOutput } from "../shapes/DeleteBranchOutput";
import { RepositoryNameRequiredException } from "../shapes/RepositoryNameRequiredException";
import { RepositoryDoesNotExistException } from "../shapes/RepositoryDoesNotExistException";
import { InvalidRepositoryNameException } from "../shapes/InvalidRepositoryNameException";
import { BranchNameRequiredException } from "../shapes/BranchNameRequiredException";
import { InvalidBranchNameException } from "../shapes/InvalidBranchNameException";
import { DefaultBranchCannotBeDeletedException } from "../shapes/DefaultBranchCannotBeDeletedException";
import { EncryptionIntegrityChecksFailedException } from "../shapes/EncryptionIntegrityChecksFailedException";
import { EncryptionKeyAccessDeniedException } from "../shapes/EncryptionKeyAccessDeniedException";
import { EncryptionKeyDisabledException } from "../shapes/EncryptionKeyDisabledException";
import { EncryptionKeyNotFoundException } from "../shapes/EncryptionKeyNotFoundException";
import { EncryptionKeyUnavailableException } from "../shapes/EncryptionKeyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteBranch: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteBranch",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteBranchInput
  },
  output: {
    shape: DeleteBranchOutput
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
      shape: DefaultBranchCannotBeDeletedException
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
