import { DescribePullRequestEventsInput } from "./DescribePullRequestEventsInput";
import { DescribePullRequestEventsOutput } from "./DescribePullRequestEventsOutput";
import { PullRequestDoesNotExistException } from "./PullRequestDoesNotExistException";
import { InvalidPullRequestIdException } from "./InvalidPullRequestIdException";
import { PullRequestIdRequiredException } from "./PullRequestIdRequiredException";
import { InvalidPullRequestEventTypeException } from "./InvalidPullRequestEventTypeException";
import { InvalidActorArnException } from "./InvalidActorArnException";
import { ActorDoesNotExistException } from "./ActorDoesNotExistException";
import { InvalidMaxResultsException } from "./InvalidMaxResultsException";
import { InvalidContinuationTokenException } from "./InvalidContinuationTokenException";
import { EncryptionIntegrityChecksFailedException } from "./EncryptionIntegrityChecksFailedException";
import { EncryptionKeyAccessDeniedException } from "./EncryptionKeyAccessDeniedException";
import { EncryptionKeyDisabledException } from "./EncryptionKeyDisabledException";
import { EncryptionKeyNotFoundException } from "./EncryptionKeyNotFoundException";
import { EncryptionKeyUnavailableException } from "./EncryptionKeyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
