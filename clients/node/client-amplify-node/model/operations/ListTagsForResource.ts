import { ListTagsForResourceInput } from "../shapes/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "../shapes/ListTagsForResourceOutput";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListTagsForResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListTagsForResource",
  http: {
    method: "GET",
    requestUri: "/tags/{resourceArn}"
  },
  input: {
    shape: ListTagsForResourceInput
  },
  output: {
    shape: ListTagsForResourceOutput
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
