import { ListTagsOfResourceInput } from "../shapes/ListTagsOfResourceInput";
import { ListTagsOfResourceOutput } from "../shapes/ListTagsOfResourceOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListTagsOfResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListTagsOfResource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListTagsOfResourceInput
  },
  output: {
    shape: ListTagsOfResourceOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InternalServerError
    }
  ]
};
