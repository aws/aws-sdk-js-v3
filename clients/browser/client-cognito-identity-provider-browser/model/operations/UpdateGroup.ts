import { UpdateGroupInput } from "../shapes/UpdateGroupInput";
import { UpdateGroupOutput } from "../shapes/UpdateGroupOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateGroupInput
  },
  output: {
    shape: UpdateGroupOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: NotAuthorizedException
    },
    {
      shape: InternalErrorException
    }
  ]
};
