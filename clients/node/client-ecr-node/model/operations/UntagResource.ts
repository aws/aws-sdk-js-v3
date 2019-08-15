import { UntagResourceInput } from "../shapes/UntagResourceInput";
import { UntagResourceOutput } from "../shapes/UntagResourceOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InvalidTagParameterException } from "../shapes/InvalidTagParameterException";
import { TooManyTagsException } from "../shapes/TooManyTagsException";
import { RepositoryNotFoundException } from "../shapes/RepositoryNotFoundException";
import { ServerException } from "../shapes/ServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UntagResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UntagResource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UntagResourceInput
  },
  output: {
    shape: UntagResourceOutput
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
