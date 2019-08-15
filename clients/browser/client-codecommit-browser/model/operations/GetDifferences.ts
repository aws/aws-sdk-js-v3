import { GetDifferencesInput } from "../shapes/GetDifferencesInput";
import { GetDifferencesOutput } from "../shapes/GetDifferencesOutput";
import { RepositoryNameRequiredException } from "../shapes/RepositoryNameRequiredException";
import { RepositoryDoesNotExistException } from "../shapes/RepositoryDoesNotExistException";
import { InvalidRepositoryNameException } from "../shapes/InvalidRepositoryNameException";
import { InvalidContinuationTokenException } from "../shapes/InvalidContinuationTokenException";
import { InvalidMaxResultsException } from "../shapes/InvalidMaxResultsException";
import { InvalidCommitIdException } from "../shapes/InvalidCommitIdException";
import { CommitRequiredException } from "../shapes/CommitRequiredException";
import { InvalidCommitException } from "../shapes/InvalidCommitException";
import { CommitDoesNotExistException } from "../shapes/CommitDoesNotExistException";
import { InvalidPathException } from "../shapes/InvalidPathException";
import { PathDoesNotExistException } from "../shapes/PathDoesNotExistException";
import { EncryptionIntegrityChecksFailedException } from "../shapes/EncryptionIntegrityChecksFailedException";
import { EncryptionKeyAccessDeniedException } from "../shapes/EncryptionKeyAccessDeniedException";
import { EncryptionKeyDisabledException } from "../shapes/EncryptionKeyDisabledException";
import { EncryptionKeyNotFoundException } from "../shapes/EncryptionKeyNotFoundException";
import { EncryptionKeyUnavailableException } from "../shapes/EncryptionKeyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetDifferences: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDifferences",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetDifferencesInput
  },
  output: {
    shape: GetDifferencesOutput
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
      shape: InvalidContinuationTokenException
    },
    {
      shape: InvalidMaxResultsException
    },
    {
      shape: InvalidCommitIdException
    },
    {
      shape: CommitRequiredException
    },
    {
      shape: InvalidCommitException
    },
    {
      shape: CommitDoesNotExistException
    },
    {
      shape: InvalidPathException
    },
    {
      shape: PathDoesNotExistException
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
