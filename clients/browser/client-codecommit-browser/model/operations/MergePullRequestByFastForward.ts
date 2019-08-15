import { MergePullRequestByFastForwardInput } from "../shapes/MergePullRequestByFastForwardInput";
import { MergePullRequestByFastForwardOutput } from "../shapes/MergePullRequestByFastForwardOutput";
import { ManualMergeRequiredException } from "../shapes/ManualMergeRequiredException";
import { PullRequestAlreadyClosedException } from "../shapes/PullRequestAlreadyClosedException";
import { PullRequestDoesNotExistException } from "../shapes/PullRequestDoesNotExistException";
import { InvalidPullRequestIdException } from "../shapes/InvalidPullRequestIdException";
import { PullRequestIdRequiredException } from "../shapes/PullRequestIdRequiredException";
import { TipOfSourceReferenceIsDifferentException } from "../shapes/TipOfSourceReferenceIsDifferentException";
import { ReferenceDoesNotExistException } from "../shapes/ReferenceDoesNotExistException";
import { InvalidCommitIdException } from "../shapes/InvalidCommitIdException";
import { RepositoryNotAssociatedWithPullRequestException } from "../shapes/RepositoryNotAssociatedWithPullRequestException";
import { RepositoryNameRequiredException } from "../shapes/RepositoryNameRequiredException";
import { InvalidRepositoryNameException } from "../shapes/InvalidRepositoryNameException";
import { RepositoryDoesNotExistException } from "../shapes/RepositoryDoesNotExistException";
import { ConcurrentReferenceUpdateException } from "../shapes/ConcurrentReferenceUpdateException";
import { EncryptionIntegrityChecksFailedException } from "../shapes/EncryptionIntegrityChecksFailedException";
import { EncryptionKeyAccessDeniedException } from "../shapes/EncryptionKeyAccessDeniedException";
import { EncryptionKeyDisabledException } from "../shapes/EncryptionKeyDisabledException";
import { EncryptionKeyNotFoundException } from "../shapes/EncryptionKeyNotFoundException";
import { EncryptionKeyUnavailableException } from "../shapes/EncryptionKeyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const MergePullRequestByFastForward: _Operation_ = {
  metadata: ServiceMetadata,
  name: "MergePullRequestByFastForward",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: MergePullRequestByFastForwardInput
  },
  output: {
    shape: MergePullRequestByFastForwardOutput
  },
  errors: [
    {
      shape: ManualMergeRequiredException
    },
    {
      shape: PullRequestAlreadyClosedException
    },
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
      shape: TipOfSourceReferenceIsDifferentException
    },
    {
      shape: ReferenceDoesNotExistException
    },
    {
      shape: InvalidCommitIdException
    },
    {
      shape: RepositoryNotAssociatedWithPullRequestException
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
      shape: ConcurrentReferenceUpdateException
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
