import { GetFileInput } from "../shapes/GetFileInput";
import { GetFileOutput } from "../shapes/GetFileOutput";
import { RepositoryNameRequiredException } from "../shapes/RepositoryNameRequiredException";
import { InvalidRepositoryNameException } from "../shapes/InvalidRepositoryNameException";
import { RepositoryDoesNotExistException } from "../shapes/RepositoryDoesNotExistException";
import { InvalidCommitException } from "../shapes/InvalidCommitException";
import { CommitDoesNotExistException } from "../shapes/CommitDoesNotExistException";
import { PathRequiredException } from "../shapes/PathRequiredException";
import { InvalidPathException } from "../shapes/InvalidPathException";
import { FileDoesNotExistException } from "../shapes/FileDoesNotExistException";
import { EncryptionIntegrityChecksFailedException } from "../shapes/EncryptionIntegrityChecksFailedException";
import { EncryptionKeyAccessDeniedException } from "../shapes/EncryptionKeyAccessDeniedException";
import { EncryptionKeyDisabledException } from "../shapes/EncryptionKeyDisabledException";
import { EncryptionKeyNotFoundException } from "../shapes/EncryptionKeyNotFoundException";
import { EncryptionKeyUnavailableException } from "../shapes/EncryptionKeyUnavailableException";
import { FileTooLargeException } from "../shapes/FileTooLargeException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetFile: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetFile",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetFileInput
  },
  output: {
    shape: GetFileOutput
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
      shape: InvalidCommitException
    },
    {
      shape: CommitDoesNotExistException
    },
    {
      shape: PathRequiredException
    },
    {
      shape: InvalidPathException
    },
    {
      shape: FileDoesNotExistException
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
