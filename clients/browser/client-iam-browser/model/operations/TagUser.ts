import { TagUserInput } from "../shapes/TagUserInput";
import { TagUserOutput } from "../shapes/TagUserOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const TagUser: _Operation_ = {
  metadata: ServiceMetadata,
  name: "TagUser",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: TagUserInput
  },
  output: {
    shape: TagUserOutput
  },
  errors: [
    {
      shape: NoSuchEntityException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: ConcurrentModificationException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
