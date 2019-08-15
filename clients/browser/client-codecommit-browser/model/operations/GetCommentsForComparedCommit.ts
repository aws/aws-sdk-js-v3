import { GetCommentsForComparedCommitInput } from "../shapes/GetCommentsForComparedCommitInput";
import { GetCommentsForComparedCommitOutput } from "../shapes/GetCommentsForComparedCommitOutput";
import { RepositoryNameRequiredException } from "../shapes/RepositoryNameRequiredException";
import { RepositoryDoesNotExistException } from "../shapes/RepositoryDoesNotExistException";
import { InvalidRepositoryNameException } from "../shapes/InvalidRepositoryNameException";
import { CommitIdRequiredException } from "../shapes/CommitIdRequiredException";
import { InvalidCommitIdException } from "../shapes/InvalidCommitIdException";
import { CommitDoesNotExistException } from "../shapes/CommitDoesNotExistException";
import { InvalidMaxResultsException } from "../shapes/InvalidMaxResultsException";
import { InvalidContinuationTokenException } from "../shapes/InvalidContinuationTokenException";
import { EncryptionIntegrityChecksFailedException } from "../shapes/EncryptionIntegrityChecksFailedException";
import { EncryptionKeyAccessDeniedException } from "../shapes/EncryptionKeyAccessDeniedException";
import { EncryptionKeyDisabledException } from "../shapes/EncryptionKeyDisabledException";
import { EncryptionKeyNotFoundException } from "../shapes/EncryptionKeyNotFoundException";
import { EncryptionKeyUnavailableException } from "../shapes/EncryptionKeyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetCommentsForComparedCommit: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetCommentsForComparedCommit",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetCommentsForComparedCommitInput
  },
  output: {
    shape: GetCommentsForComparedCommitOutput
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
      shape: CommitIdRequiredException
    },
    {
      shape: InvalidCommitIdException
    },
    {
      shape: CommitDoesNotExistException
    },
    {
      shape: InvalidMaxResultsException
    },
    {
      shape: InvalidContinuationTokenException
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
