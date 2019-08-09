import { ListTagsForResourceInput } from "./ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./ListTagsForResourceOutput";
import { InsufficientPrivilegesException } from "./InsufficientPrivilegesException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceTypeNotSupportedException } from "./ResourceTypeNotSupportedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
