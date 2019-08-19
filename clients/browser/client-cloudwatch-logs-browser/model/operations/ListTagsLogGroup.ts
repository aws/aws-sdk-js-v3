import { ListTagsLogGroupInput } from "../shapes/ListTagsLogGroupInput";
import { ListTagsLogGroupOutput } from "../shapes/ListTagsLogGroupOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListTagsLogGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListTagsLogGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListTagsLogGroupInput
  },
  output: {
    shape: ListTagsLogGroupOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
