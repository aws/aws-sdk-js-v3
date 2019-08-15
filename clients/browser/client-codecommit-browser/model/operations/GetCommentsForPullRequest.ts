import { GetCommentsForPullRequestInput } from "../shapes/GetCommentsForPullRequestInput";
import { GetCommentsForPullRequestOutput } from "../shapes/GetCommentsForPullRequestOutput";
import { PullRequestIdRequiredException } from "../shapes/PullRequestIdRequiredException";
import { PullRequestDoesNotExistException } from "../shapes/PullRequestDoesNotExistException";
import { InvalidPullRequestIdException } from "../shapes/InvalidPullRequestIdException";
import { RepositoryNameRequiredException } from "../shapes/RepositoryNameRequiredException";
import { RepositoryDoesNotExistException } from "../shapes/RepositoryDoesNotExistException";
import { InvalidRepositoryNameException } from "../shapes/InvalidRepositoryNameException";
import { CommitIdRequiredException } from "../shapes/CommitIdRequiredException";
import { InvalidCommitIdException } from "../shapes/InvalidCommitIdException";
import { CommitDoesNotExistException } from "../shapes/CommitDoesNotExistException";
import { InvalidMaxResultsException } from "../shapes/InvalidMaxResultsException";
import { InvalidContinuationTokenException } from "../shapes/InvalidContinuationTokenException";
import { RepositoryNotAssociatedWithPullRequestException } from "../shapes/RepositoryNotAssociatedWithPullRequestException";
import { EncryptionIntegrityChecksFailedException } from "../shapes/EncryptionIntegrityChecksFailedException";
import { EncryptionKeyAccessDeniedException } from "../shapes/EncryptionKeyAccessDeniedException";
import { EncryptionKeyDisabledException } from "../shapes/EncryptionKeyDisabledException";
import { EncryptionKeyNotFoundException } from "../shapes/EncryptionKeyNotFoundException";
import { EncryptionKeyUnavailableException } from "../shapes/EncryptionKeyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetCommentsForPullRequest: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetCommentsForPullRequest",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetCommentsForPullRequestInput
  },
  output: {
    shape: GetCommentsForPullRequestOutput
  },
  errors: [
    {
      shape: PullRequestIdRequiredException
    },
    {
      shape: PullRequestDoesNotExistException
    },
    {
      shape: InvalidPullRequestIdException
    },
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
      shape: RepositoryNotAssociatedWithPullRequestException
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
