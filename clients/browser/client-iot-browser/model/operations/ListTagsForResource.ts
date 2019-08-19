import { ListTagsForResourceInput } from "../shapes/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "../shapes/ListTagsForResourceOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListTagsForResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListTagsForResource",
  http: {
    method: "GET",
    requestUri: "/tags"
  },
  input: {
    shape: ListTagsForResourceInput
  },
  output: {
    shape: ListTagsForResourceOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ThrottlingException
    }
  ]
};
