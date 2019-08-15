import { DescribePullRequestEventsInput } from "../shapes/DescribePullRequestEventsInput";
import { DescribePullRequestEventsOutput } from "../shapes/DescribePullRequestEventsOutput";
import { PullRequestDoesNotExistException } from "../shapes/PullRequestDoesNotExistException";
import { InvalidPullRequestIdException } from "../shapes/InvalidPullRequestIdException";
import { PullRequestIdRequiredException } from "../shapes/PullRequestIdRequiredException";
import { InvalidPullRequestEventTypeException } from "../shapes/InvalidPullRequestEventTypeException";
import { InvalidActorArnException } from "../shapes/InvalidActorArnException";
import { ActorDoesNotExistException } from "../shapes/ActorDoesNotExistException";
import { InvalidMaxResultsException } from "../shapes/InvalidMaxResultsException";
import { InvalidContinuationTokenException } from "../shapes/InvalidContinuationTokenException";
import { EncryptionIntegrityChecksFailedException } from "../shapes/EncryptionIntegrityChecksFailedException";
import { EncryptionKeyAccessDeniedException } from "../shapes/EncryptionKeyAccessDeniedException";
import { EncryptionKeyDisabledException } from "../shapes/EncryptionKeyDisabledException";
import { EncryptionKeyNotFoundException } from "../shapes/EncryptionKeyNotFoundException";
import { EncryptionKeyUnavailableException } from "../shapes/EncryptionKeyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribePullRequestEvents: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribePullRequestEvents",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribePullRequestEventsInput
  },
  output: {
    shape: DescribePullRequestEventsOutput
  },
  errors: [
    {
      shape: PullRequestDoesNotExistException
    },
    {
      shape: InvalidPullRequestIdException
    },
    {
      shape: PullRequestIdRequiredException
    },
    {
      shape: InvalidPullRequestEventTypeException
    },
    {
      shape: InvalidActorArnException
    },
    {
      shape: ActorDoesNotExistException
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
