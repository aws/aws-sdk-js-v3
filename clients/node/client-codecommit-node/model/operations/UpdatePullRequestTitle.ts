import { UpdatePullRequestTitleInput } from "../shapes/UpdatePullRequestTitleInput";
import { UpdatePullRequestTitleOutput } from "../shapes/UpdatePullRequestTitleOutput";
import { PullRequestDoesNotExistException } from "../shapes/PullRequestDoesNotExistException";
import { InvalidPullRequestIdException } from "../shapes/InvalidPullRequestIdException";
import { PullRequestIdRequiredException } from "../shapes/PullRequestIdRequiredException";
import { TitleRequiredException } from "../shapes/TitleRequiredException";
import { InvalidTitleException } from "../shapes/InvalidTitleException";
import { PullRequestAlreadyClosedException } from "../shapes/PullRequestAlreadyClosedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdatePullRequestTitle: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdatePullRequestTitle",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdatePullRequestTitleInput
  },
  output: {
    shape: UpdatePullRequestTitleOutput
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
      shape: TitleRequiredException
    },
    {
      shape: InvalidTitleException
    },
    {
      shape: PullRequestAlreadyClosedException
    }
  ]
};
