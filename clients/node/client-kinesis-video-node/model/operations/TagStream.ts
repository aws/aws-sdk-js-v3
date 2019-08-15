import { TagStreamInput } from "../shapes/TagStreamInput";
import { TagStreamOutput } from "../shapes/TagStreamOutput";
import { ClientLimitExceededException } from "../shapes/ClientLimitExceededException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { InvalidResourceFormatException } from "../shapes/InvalidResourceFormatException";
import { TagsPerResourceExceededLimitException } from "../shapes/TagsPerResourceExceededLimitException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const TagStream: _Operation_ = {
  metadata: ServiceMetadata,
  name: "TagStream",
  http: {
    method: "POST",
    requestUri: "/tagStream"
  },
  input: {
    shape: TagStreamInput
  },
  output: {
    shape: TagStreamOutput
  },
  errors: [
    {
      shape: ClientLimitExceededException
    },
    {
      shape: InvalidArgumentException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: NotAuthorizedException
    },
    {
      shape: InvalidResourceFormatException
    },
    {
      shape: TagsPerResourceExceededLimitException
    }
  ]
};
