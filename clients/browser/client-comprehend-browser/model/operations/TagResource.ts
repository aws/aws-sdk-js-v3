import { TagResourceInput } from "../shapes/TagResourceInput";
import { TagResourceOutput } from "../shapes/TagResourceOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { TooManyTagsException } from "../shapes/TooManyTagsException";
import { InternalServerException } from "../shapes/InternalServerException";
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
      shape: InvalidRequestException
    },
    {
      shape: ConcurrentModificationException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: TooManyTagsException
    },
    {
      shape: InternalServerException
    }
  ]
};
