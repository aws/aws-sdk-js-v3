import { TagResourceInput } from "../shapes/TagResourceInput";
import { TagResourceOutput } from "../shapes/TagResourceOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InvalidTagParameterException } from "../shapes/InvalidTagParameterException";
import { TooManyTagsException } from "../shapes/TooManyTagsException";
import { RepositoryNotFoundException } from "../shapes/RepositoryNotFoundException";
import { ServerException } from "../shapes/ServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
      shape: InvalidParameterException
    },
    {
      shape: InvalidTagParameterException
    },
    {
      shape: TooManyTagsException
    },
    {
      shape: RepositoryNotFoundException
    },
    {
      shape: ServerException
    }
  ]
};
