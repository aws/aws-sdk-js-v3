import { AdminEnableUserInput } from "../shapes/AdminEnableUserInput";
import { AdminEnableUserOutput } from "../shapes/AdminEnableUserOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { UserNotFoundException } from "../shapes/UserNotFoundException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AdminEnableUser: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AdminEnableUser",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AdminEnableUserInput
  },
  output: {
    shape: AdminEnableUserOutput
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
