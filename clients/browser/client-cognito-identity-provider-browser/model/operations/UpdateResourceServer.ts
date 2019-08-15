import { UpdateResourceServerInput } from "../shapes/UpdateResourceServerInput";
import { UpdateResourceServerOutput } from "../shapes/UpdateResourceServerOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateResourceServer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateResourceServer",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateResourceServerInput
  },
  output: {
    shape: UpdateResourceServerOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: NotAuthorizedException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: InternalErrorException
    }
  ]
};
