import { ListTagsForResourceInput } from "../shapes/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "../shapes/ListTagsForResourceOutput";
import { InsufficientPrivilegesException } from "../shapes/InsufficientPrivilegesException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceTypeNotSupportedException } from "../shapes/ResourceTypeNotSupportedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListTagsForResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListTagsForResource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListTagsForResourceInput
  },
  output: {
    shape: ListTagsForResourceOutput,
    resultWrapper: "ListTagsForResourceResult"
  },
  errors: [
    {
      shape: InsufficientPrivilegesException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ResourceTypeNotSupportedException
    }
  ]
};
