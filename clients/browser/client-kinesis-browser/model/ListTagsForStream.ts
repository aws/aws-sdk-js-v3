import { ListTagsForStreamInput } from "./ListTagsForStreamInput";
import { ListTagsForStreamOutput } from "./ListTagsForStreamOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListTagsForStream: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListTagsForStream",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListTagsForStreamInput
  },
  output: {
    shape: ListTagsForStreamOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidArgumentException
    },
    {
      shape: LimitExceededException
    }
  ]
};
