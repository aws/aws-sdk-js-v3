import { AdminDisableUserInput } from "../shapes/AdminDisableUserInput";
import { AdminDisableUserOutput } from "../shapes/AdminDisableUserOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { UserNotFoundException } from "../shapes/UserNotFoundException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AdminDisableUser: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AdminDisableUser",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AdminDisableUserInput
  },
  output: {
    shape: AdminDisableUserOutput
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
      shape: UserNotFoundException
    },
    {
      shape: InternalErrorException
    }
  ]
};
