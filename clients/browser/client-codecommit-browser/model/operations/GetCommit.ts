import { GetCommitInput } from "../shapes/GetCommitInput";
import { GetCommitOutput } from "../shapes/GetCommitOutput";
import { RepositoryNameRequiredException } from "../shapes/RepositoryNameRequiredException";
import { InvalidRepositoryNameException } from "../shapes/InvalidRepositoryNameException";
import { RepositoryDoesNotExistException } from "../shapes/RepositoryDoesNotExistException";
import { CommitIdRequiredException } from "../shapes/CommitIdRequiredException";
import { InvalidCommitIdException } from "../shapes/InvalidCommitIdException";
import { CommitIdDoesNotExistException } from "../shapes/CommitIdDoesNotExistException";
import { EncryptionIntegrityChecksFailedException } from "../shapes/EncryptionIntegrityChecksFailedException";
import { EncryptionKeyAccessDeniedException } from "../shapes/EncryptionKeyAccessDeniedException";
import { EncryptionKeyDisabledException } from "../shapes/EncryptionKeyDisabledException";
import { EncryptionKeyNotFoundException } from "../shapes/EncryptionKeyNotFoundException";
import { EncryptionKeyUnavailableException } from "../shapes/EncryptionKeyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetCommit: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetCommit",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetCommitInput
  },
  output: {
    shape: GetCommitOutput
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
      shape: CommitIdRequiredException
    },
    {
      shape: InvalidCommitIdException
    },
    {
      shape: CommitIdDoesNotExistException
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
