import { AdminDeleteUserInput } from "../shapes/AdminDeleteUserInput";
import { AdminDeleteUserOutput } from "../shapes/AdminDeleteUserOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { UserNotFoundException } from "../shapes/UserNotFoundException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AdminDeleteUser: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AdminDeleteUser",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AdminDeleteUserInput
  },
  output: {
    shape: AdminDeleteUserOutput
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
