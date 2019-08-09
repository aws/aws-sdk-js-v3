import { UpdatePullRequestDescriptionInput } from "./UpdatePullRequestDescriptionInput";
import { UpdatePullRequestDescriptionOutput } from "./UpdatePullRequestDescriptionOutput";
import { PullRequestDoesNotExistException } from "./PullRequestDoesNotExistException";
import { InvalidPullRequestIdException } from "./InvalidPullRequestIdException";
import { PullRequestIdRequiredException } from "./PullRequestIdRequiredException";
import { InvalidDescriptionException } from "./InvalidDescriptionException";
import { PullRequestAlreadyClosedException } from "./PullRequestAlreadyClosedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
