import { TagResourceInput } from "../shapes/TagResourceInput";
import { TagResourceOutput } from "../shapes/TagResourceOutput";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const TagResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "TagResource",
  http: {
    method: "POST",
    requestUri: "/tags/{resourceArn}"
  },
  input: {
    shape: TagResourceInput
  },
  output: {
    shape: TagResourceOutput
  },
  errors: [
    {
      shape: InternalFailureException
    },
    {
      shape: BadRequestException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
