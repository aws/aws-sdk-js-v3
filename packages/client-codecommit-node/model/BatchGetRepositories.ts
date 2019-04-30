import { BatchGetRepositoriesInput } from "./BatchGetRepositoriesInput";
import { BatchGetRepositoriesOutput } from "./BatchGetRepositoriesOutput";
import { RepositoryNamesRequiredException } from "./RepositoryNamesRequiredException";
import { MaximumRepositoryNamesExceededException } from "./MaximumRepositoryNamesExceededException";
import { InvalidRepositoryNameException } from "./InvalidRepositoryNameException";
import { EncryptionIntegrityChecksFailedException } from "./EncryptionIntegrityChecksFailedException";
import { EncryptionKeyAccessDeniedException } from "./EncryptionKeyAccessDeniedException";
import { EncryptionKeyDisabledException } from "./EncryptionKeyDisabledException";
import { EncryptionKeyNotFoundException } from "./EncryptionKeyNotFoundException";
import { EncryptionKeyUnavailableException } from "./EncryptionKeyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
