import { UpdatePullRequestStatusInput } from "../shapes/UpdatePullRequestStatusInput";
import { UpdatePullRequestStatusOutput } from "../shapes/UpdatePullRequestStatusOutput";
import { PullRequestDoesNotExistException } from "../shapes/PullRequestDoesNotExistException";
import { InvalidPullRequestIdException } from "../shapes/InvalidPullRequestIdException";
import { PullRequestIdRequiredException } from "../shapes/PullRequestIdRequiredException";
import { InvalidPullRequestStatusUpdateException } from "../shapes/InvalidPullRequestStatusUpdateException";
import { InvalidPullRequestStatusException } from "../shapes/InvalidPullRequestStatusException";
import { PullRequestStatusRequiredException } from "../shapes/PullRequestStatusRequiredException";
import { EncryptionIntegrityChecksFailedException } from "../shapes/EncryptionIntegrityChecksFailedException";
import { EncryptionKeyAccessDeniedException } from "../shapes/EncryptionKeyAccessDeniedException";
import { EncryptionKeyDisabledException } from "../shapes/EncryptionKeyDisabledException";
import { EncryptionKeyNotFoundException } from "../shapes/EncryptionKeyNotFoundException";
import { EncryptionKeyUnavailableException } from "../shapes/EncryptionKeyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdatePullRequestStatus: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdatePullRequestStatus",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdatePullRequestStatusInput
  },
  output: {
    shape: UpdatePullRequestStatusOutput
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
      shape: InvalidPullRequestStatusUpdateException
    },
    {
      shape: InvalidPullRequestStatusException
    },
    {
      shape: PullRequestStatusRequiredException
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
