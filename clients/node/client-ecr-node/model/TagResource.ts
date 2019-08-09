import { TagResourceInput } from "./TagResourceInput";
import { TagResourceOutput } from "./TagResourceOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidTagParameterException } from "./InvalidTagParameterException";
import { TooManyTagsException } from "./TooManyTagsException";
import { RepositoryNotFoundException } from "./RepositoryNotFoundException";
import { ServerException } from "./ServerException";
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
