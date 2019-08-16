import { ListTagsForStreamInput } from "../shapes/ListTagsForStreamInput";
import { ListTagsForStreamOutput } from "../shapes/ListTagsForStreamOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
