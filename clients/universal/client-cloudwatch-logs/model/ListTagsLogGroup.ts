import { ListTagsLogGroupInput } from "./ListTagsLogGroupInput";
import { ListTagsLogGroupOutput } from "./ListTagsLogGroupOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
