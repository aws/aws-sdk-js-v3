import { TagStreamInput } from "./TagStreamInput";
import { TagStreamOutput } from "./TagStreamOutput";
import { ClientLimitExceededException } from "./ClientLimitExceededException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { InvalidResourceFormatException } from "./InvalidResourceFormatException";
import { TagsPerResourceExceededLimitException } from "./TagsPerResourceExceededLimitException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
