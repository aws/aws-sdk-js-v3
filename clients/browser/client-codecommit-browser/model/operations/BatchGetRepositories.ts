import { BatchGetRepositoriesInput } from "../shapes/BatchGetRepositoriesInput";
import { BatchGetRepositoriesOutput } from "../shapes/BatchGetRepositoriesOutput";
import { RepositoryNamesRequiredException } from "../shapes/RepositoryNamesRequiredException";
import { MaximumRepositoryNamesExceededException } from "../shapes/MaximumRepositoryNamesExceededException";
import { InvalidRepositoryNameException } from "../shapes/InvalidRepositoryNameException";
import { EncryptionIntegrityChecksFailedException } from "../shapes/EncryptionIntegrityChecksFailedException";
import { EncryptionKeyAccessDeniedException } from "../shapes/EncryptionKeyAccessDeniedException";
import { EncryptionKeyDisabledException } from "../shapes/EncryptionKeyDisabledException";
import { EncryptionKeyNotFoundException } from "../shapes/EncryptionKeyNotFoundException";
import { EncryptionKeyUnavailableException } from "../shapes/EncryptionKeyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const BatchGetRepositories: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchGetRepositories",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: BatchGetRepositoriesInput
  },
  output: {
    shape: BatchGetRepositoriesOutput
  },
  errors: [
    {
      shape: RepositoryNamesRequiredException
    },
    {
      shape: MaximumRepositoryNamesExceededException
    },
    {
      shape: InvalidRepositoryNameException
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
