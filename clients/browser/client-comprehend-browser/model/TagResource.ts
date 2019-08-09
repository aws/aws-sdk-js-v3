import { TagResourceInput } from "./TagResourceInput";
import { TagResourceOutput } from "./TagResourceOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TooManyTagsException } from "./TooManyTagsException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const TagResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "TagResource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: TagResourceInput
  },
  output: {
    shape: TagResourceOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ConcurrentModificationException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: TooManyTagsException
    },
    {
      shape: InternalServerException
    }
  ]
};
