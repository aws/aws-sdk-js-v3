import { TagUserInput } from "./TagUserInput";
import { TagUserOutput } from "./TagUserOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidInputException } from "./InvalidInputException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
