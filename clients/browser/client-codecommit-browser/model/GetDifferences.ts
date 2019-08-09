import { GetDifferencesInput } from "./GetDifferencesInput";
import { GetDifferencesOutput } from "./GetDifferencesOutput";
import { RepositoryNameRequiredException } from "./RepositoryNameRequiredException";
import { RepositoryDoesNotExistException } from "./RepositoryDoesNotExistException";
import { InvalidRepositoryNameException } from "./InvalidRepositoryNameException";
import { InvalidContinuationTokenException } from "./InvalidContinuationTokenException";
import { InvalidMaxResultsException } from "./InvalidMaxResultsException";
import { InvalidCommitIdException } from "./InvalidCommitIdException";
import { CommitRequiredException } from "./CommitRequiredException";
import { InvalidCommitException } from "./InvalidCommitException";
import { CommitDoesNotExistException } from "./CommitDoesNotExistException";
import { InvalidPathException } from "./InvalidPathException";
import { PathDoesNotExistException } from "./PathDoesNotExistException";
import { EncryptionIntegrityChecksFailedException } from "./EncryptionIntegrityChecksFailedException";
import { EncryptionKeyAccessDeniedException } from "./EncryptionKeyAccessDeniedException";
import { EncryptionKeyDisabledException } from "./EncryptionKeyDisabledException";
import { EncryptionKeyNotFoundException } from "./EncryptionKeyNotFoundException";
import { EncryptionKeyUnavailableException } from "./EncryptionKeyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
