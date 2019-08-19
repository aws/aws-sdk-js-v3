import { UntagResourceInput } from "../shapes/UntagResourceInput";
import { UntagResourceOutput } from "../shapes/UntagResourceOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { InvalidTagsException } from "../shapes/InvalidTagsException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UntagResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UntagResource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UntagResourceInput
  },
  output: {
    shape: UntagResourceOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidArnException
    },
    {
      shape: InvalidTagsException
    },
    {
      shape: ConcurrentModificationException
    }
  ]
};
