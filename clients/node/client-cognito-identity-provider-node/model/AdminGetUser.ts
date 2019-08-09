import { AdminGetUserInput } from "./AdminGetUserInput";
import { AdminGetUserOutput } from "./AdminGetUserOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { UserNotFoundException } from "./UserNotFoundException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AdminGetUser: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AdminGetUser",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AdminGetUserInput
  },
  output: {
    shape: AdminGetUserOutput
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
