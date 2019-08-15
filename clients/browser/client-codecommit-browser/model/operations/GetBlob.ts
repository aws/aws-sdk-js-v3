import { GetBlobInput } from "../shapes/GetBlobInput";
import { GetBlobOutput } from "../shapes/GetBlobOutput";
import { RepositoryNameRequiredException } from "../shapes/RepositoryNameRequiredException";
import { InvalidRepositoryNameException } from "../shapes/InvalidRepositoryNameException";
import { RepositoryDoesNotExistException } from "../shapes/RepositoryDoesNotExistException";
import { BlobIdRequiredException } from "../shapes/BlobIdRequiredException";
import { InvalidBlobIdException } from "../shapes/InvalidBlobIdException";
import { BlobIdDoesNotExistException } from "../shapes/BlobIdDoesNotExistException";
import { EncryptionIntegrityChecksFailedException } from "../shapes/EncryptionIntegrityChecksFailedException";
import { EncryptionKeyAccessDeniedException } from "../shapes/EncryptionKeyAccessDeniedException";
import { EncryptionKeyDisabledException } from "../shapes/EncryptionKeyDisabledException";
import { EncryptionKeyNotFoundException } from "../shapes/EncryptionKeyNotFoundException";
import { EncryptionKeyUnavailableException } from "../shapes/EncryptionKeyUnavailableException";
import { FileTooLargeException } from "../shapes/FileTooLargeException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetBlob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetBlob",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetBlobInput
  },
  output: {
    shape: GetBlobOutput
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
      shape: BlobIdRequiredException
    },
    {
      shape: InvalidBlobIdException
    },
    {
      shape: BlobIdDoesNotExistException
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
    },
    {
      shape: FileTooLargeException
    }
  ]
};
