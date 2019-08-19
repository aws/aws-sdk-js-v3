import { AdminAddUserToGroupInput } from "../shapes/AdminAddUserToGroupInput";
import { AdminAddUserToGroupOutput } from "../shapes/AdminAddUserToGroupOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { UserNotFoundException } from "../shapes/UserNotFoundException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AdminAddUserToGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AdminAddUserToGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AdminAddUserToGroupInput
  },
  output: {
    shape: AdminAddUserToGroupOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
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
