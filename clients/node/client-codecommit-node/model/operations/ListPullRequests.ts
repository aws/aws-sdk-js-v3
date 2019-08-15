import { ListPullRequestsInput } from "../shapes/ListPullRequestsInput";
import { ListPullRequestsOutput } from "../shapes/ListPullRequestsOutput";
import { InvalidPullRequestStatusException } from "../shapes/InvalidPullRequestStatusException";
import { InvalidAuthorArnException } from "../shapes/InvalidAuthorArnException";
import { AuthorDoesNotExistException } from "../shapes/AuthorDoesNotExistException";
import { RepositoryNameRequiredException } from "../shapes/RepositoryNameRequiredException";
import { InvalidRepositoryNameException } from "../shapes/InvalidRepositoryNameException";
import { RepositoryDoesNotExistException } from "../shapes/RepositoryDoesNotExistException";
import { InvalidMaxResultsException } from "../shapes/InvalidMaxResultsException";
import { InvalidContinuationTokenException } from "../shapes/InvalidContinuationTokenException";
import { EncryptionIntegrityChecksFailedException } from "../shapes/EncryptionIntegrityChecksFailedException";
import { EncryptionKeyAccessDeniedException } from "../shapes/EncryptionKeyAccessDeniedException";
import { EncryptionKeyDisabledException } from "../shapes/EncryptionKeyDisabledException";
import { EncryptionKeyNotFoundException } from "../shapes/EncryptionKeyNotFoundException";
import { EncryptionKeyUnavailableException } from "../shapes/EncryptionKeyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListPullRequests: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListPullRequests",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListPullRequestsInput
  },
  output: {
    shape: ListPullRequestsOutput
  },
  errors: [
    {
      shape: InvalidPullRequestStatusException
    },
    {
      shape: InvalidAuthorArnException
    },
    {
      shape: AuthorDoesNotExistException
    },
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
