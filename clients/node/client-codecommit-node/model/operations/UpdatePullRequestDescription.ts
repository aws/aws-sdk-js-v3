import { UpdatePullRequestDescriptionInput } from "../shapes/UpdatePullRequestDescriptionInput";
import { UpdatePullRequestDescriptionOutput } from "../shapes/UpdatePullRequestDescriptionOutput";
import { PullRequestDoesNotExistException } from "../shapes/PullRequestDoesNotExistException";
import { InvalidPullRequestIdException } from "../shapes/InvalidPullRequestIdException";
import { PullRequestIdRequiredException } from "../shapes/PullRequestIdRequiredException";
import { InvalidDescriptionException } from "../shapes/InvalidDescriptionException";
import { PullRequestAlreadyClosedException } from "../shapes/PullRequestAlreadyClosedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdatePullRequestDescription: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdatePullRequestDescription",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdatePullRequestDescriptionInput
  },
  output: {
    shape: UpdatePullRequestDescriptionOutput
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
      shape: InvalidDescriptionException
    },
    {
      shape: PullRequestAlreadyClosedException
    }
  ]
};
