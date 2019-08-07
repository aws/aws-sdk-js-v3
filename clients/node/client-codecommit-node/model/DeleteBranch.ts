import { DeleteBranchInput } from "./DeleteBranchInput";
import { DeleteBranchOutput } from "./DeleteBranchOutput";
import { RepositoryNameRequiredException } from "./RepositoryNameRequiredException";
import { RepositoryDoesNotExistException } from "./RepositoryDoesNotExistException";
import { InvalidRepositoryNameException } from "./InvalidRepositoryNameException";
import { BranchNameRequiredException } from "./BranchNameRequiredException";
import { InvalidBranchNameException } from "./InvalidBranchNameException";
import { DefaultBranchCannotBeDeletedException } from "./DefaultBranchCannotBeDeletedException";
import { EncryptionIntegrityChecksFailedException } from "./EncryptionIntegrityChecksFailedException";
import { EncryptionKeyAccessDeniedException } from "./EncryptionKeyAccessDeniedException";
import { EncryptionKeyDisabledException } from "./EncryptionKeyDisabledException";
import { EncryptionKeyNotFoundException } from "./EncryptionKeyNotFoundException";
import { EncryptionKeyUnavailableException } from "./EncryptionKeyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
