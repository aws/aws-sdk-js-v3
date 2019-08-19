import { TagResourceInput } from "../shapes/TagResourceInput";
import { TagResourceOutput } from "../shapes/TagResourceOutput";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InvalidAccountStatusException } from "../shapes/InvalidAccountStatusException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const TagResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "TagResource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: TagResourceInput
  },
  output: {
    shape: TagResourceOutput
  },
  errors: [
    {
      shape: LimitExceededException
    },
    {
      shape: InvalidAccountStatusException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
