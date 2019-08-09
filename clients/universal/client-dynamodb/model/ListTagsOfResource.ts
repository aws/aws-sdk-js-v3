import { ListTagsOfResourceInput } from "./ListTagsOfResourceInput";
import { ListTagsOfResourceOutput } from "./ListTagsOfResourceOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
